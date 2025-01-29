import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import {
  ActionMapType,
  AuthUserStateType,
  AuthUserType,
  User,
  UserProviderType,
} from "..";
import { AuthUser } from "../../feature/auth";
import { isValidToken, setSession } from "../utils/validation.utils";
import apiClient from "../../feature/shared/api/api-client";

const AuthContext = createContext<UserProviderType | undefined>(undefined);
enum Types {
  INITIAL = "INITIAL",
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
  LOGOUT = "LOGOUT",
}

type Payload = {
  [Types.INITIAL]: {
    user: AuthUserType;
  };
  [Types.LOGIN]: {
    user: AuthUserType;
  };
  // [Types.REGISTER]:{
  //   user:AuthUserType
  // },
  [Types.LOGOUT]: undefined;
};

type ActionType = ActionMapType<Payload>[keyof ActionMapType<Payload>];

const initialState: AuthUserStateType = {
  user: null,
  loading: true,
};

const reducer = (
  state: AuthUserStateType,
  action: ActionType
): AuthUserStateType => {
  if (action.type === Types.INITIAL) {
    if (action.payload.user && "id" in action.payload.user) {
      return {
        loading: false,
        user: action.payload.user,
      };
    }
    if (state.user && "accessToken" in state.user) {
      return {
        loading: false,
        user: {
          ...action.payload.user,
          isValid: true,
          accessToken: state.user.accessToken,
          refreshToken: state.user.refreshToken,
        },
      };
    }
    return {
      loading: false,
      user: action.payload.user,
    };
  }
  if (action.type === Types.LOGIN) {
    return {
      ...state,
      user: action.payload.user,
    };
  }
  // if (action.type === Types.REGISTER) {
  //   return {
  //     ...state,
  //     user: action.payload.user,
  //   };
  // }
  if (action.type === Types.LOGOUT) {
    return {
      ...state,
      user: null,
    };
  }
  return state;
};
const ACCESS_TOKEN = "accessToken";
const REFRESH_TOKEN = "refreshToken";
export default function AuthProvider({
  children,
}: PropsWithChildren): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);
  const initialize = useCallback(async () => {
    try {
      const accessToken = sessionStorage.getItem(ACCESS_TOKEN);
      const refreshToken = sessionStorage.getItem(REFRESH_TOKEN);
      if (accessToken && refreshToken && isValidToken(accessToken)) {
        setSession(accessToken, refreshToken);
        const { data } = await apiClient.get<User>("auth/me");
        dispatch({
          type: Types.INITIAL,
          payload: { user: data },
        });
      } else {
        dispatch({
          type: Types.INITIAL,
          payload: { user: null },
        });
      }
    } catch (error) {
      console.error(error);
      dispatch({
        type: Types.INITIAL,
        payload: {
          user: null,
        },
      });
    }
  }, []);
  useEffect(() => {
    initialize();
  }, [initialize]);
  const login = useCallback(
    async (username: string, password: string) => {
      const res = await AuthUser(username, password);
      const { accessToken, refreshToken } = res.data;
      setSession(accessToken, refreshToken);
      dispatch({
        type: Types.LOGIN,
        payload: {
          user: {
            accessToken,
            refreshToken,
            isValid: true,
          },
        },
      });
      initialize();
      return res.data;
    },
    [initialize]
  );

  const logout = useCallback(() => {
    setSession(null, null);
    dispatch({
      type: Types.LOGOUT,
    });
  }, []);
  const checkAuthenticated =
    state.user && ("accessToken" in state.user || "id" in state.user)
      ? "authenticated"
      : "unauthenticated";
  const status = state.loading ? "loading" : checkAuthenticated;
  const memoizedValue = useMemo<UserProviderType>(
    () => ({
      user: state.user,
      loading: status === "loading",
      authenticated: checkAuthenticated === "authenticated",

      login,
      logout,
    }),
    [state.user, status, checkAuthenticated, login, logout]
  );
  return (
    <AuthContext.Provider value={memoizedValue}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthedUser(): UserProviderType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error(
      "Authed user can;t be access from the outside of it context provider"
    );
  }
  return context;
}
