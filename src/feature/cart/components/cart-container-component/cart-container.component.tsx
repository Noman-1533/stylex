import { Fragment } from "react/jsx-runtime";
import { Divider, Title } from "../../../shared";
import {
  CartActionType,
  CartContextType,
  CartStateType,
  SingleCartItemType,
} from "../../models";
import SingleCartItem from "../single-cart-component/single-cart-item.component";
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import OrderSummary from "../order-summary-component/order-summary.component";
import { useAuthedUser } from "../../../../provider";
import { getCartByUser } from "../../api";
import { CartContextActionType } from "../../enums";

const CartContext = createContext<CartContextType | undefined>(undefined);
const initialState: CartStateType = {
  loading: true,
  carts: null,
};

const reducer = (state: CartStateType, action: CartActionType) => {
  if (action.type === CartContextActionType.INITIAL) {
    if (action.payload.carts.length > 0) {
      return {
        loading: false,
        carts: action.payload.carts,
      };
    }
    if (state.carts && state.carts.length > 0) {
      return {
        loading: false,
        carts: state.carts,
      };
    }
    return {
      loading: false,
      carts: action.payload.carts,
    };
  }
  if (action.type === CartContextActionType.UPDATE) {
    return {
      loading: false,
      carts: action.payload.carts,
    };
  }
  return state;
};
const STORAGE_KEY = "Current_User_Cart";
export function CartContextProvider({ children }: PropsWithChildren) {
  const { user: authedUser, authenticated } = useAuthedUser();

  const [state, dispatch] = useReducer(reducer, initialState);

  const initialize = useCallback(async () => {
    try {
      if (authedUser && "id" in authedUser) {
        const userId: string = authedUser.id.toString();
        const userCartString = localStorage.getItem(STORAGE_KEY + userId);
        let userCart: SingleCartItemType[] = [];
        if (userCartString) userCart = JSON.parse(userCartString);
        if (userCart.length === 0 && authenticated) {
          const res = await getCartByUser(authedUser.id);
          localStorage.setItem(STORAGE_KEY + userId, JSON.stringify(res));
          userCart = res;
        }
        dispatch({
          type: CartContextActionType.INITIAL,
          payload: { carts: userCart },
        });
      } else {
        dispatch({
          type: CartContextActionType.INITIAL,
          payload: { carts: [] },
        });
      }
    } catch (error) {
      console.error(error);
      dispatch({
        type: CartContextActionType.INITIAL,
        payload: { carts: [] },
      });
    }
  }, [authedUser, authenticated]);
  useEffect(() => {
    initialize();
  }, [initialize]);

  const addToCart = useCallback(
    (
      newCartItem: SingleCartItemType,
      currentCartItems: SingleCartItemType[]
    ) => {
      let updatedCarts: SingleCartItemType[];
      if (
        currentCartItems.findIndex((cart) => cart.id === newCartItem.id) !== -1
      ) {
        updatedCarts = currentCartItems.map((cart) =>
          cart.id === newCartItem.id
            ? { ...cart, quantity: cart.quantity + newCartItem.quantity }
            : cart
        );
      } else {
        updatedCarts = [...currentCartItems, newCartItem];
      }
      if (authedUser && "id" in authedUser) {
        localStorage.setItem(
          STORAGE_KEY + authedUser.id,
          JSON.stringify(updatedCarts)
        );
      }
      // console.log("current carts", updatedCarts);
      initialize();
      dispatch({
        type: CartContextActionType.UPDATE,
        payload: { carts: updatedCarts },
      });
    },
    [authedUser, initialize]
  );

  const deleteCart = useCallback(
    (id: number, cartItems: SingleCartItemType[]) => {
      let updatedCarts: SingleCartItemType[];
      if (authedUser && "id" in authedUser) {
        updatedCarts = cartItems.filter((cart) => cart.id !== id);
        localStorage.setItem(
          STORAGE_KEY + authedUser?.id,
          JSON.stringify(updatedCarts)
        );
      } else updatedCarts = [];
      dispatch({
        type: CartContextActionType.UPDATE,
        payload: { carts: updatedCarts },
      });
    },
    [authedUser]
  );

  const updateCartItemQuantity = useCallback(
    (id: number, cartItems: SingleCartItemType[], updatedQuantity: number) => {
      const updatedCarts = cartItems.map((cart) => {
        if (cart.id == id) {
          const updatedTotal = cart.price * updatedQuantity;
          let updatedDiscountedPrice = updatedTotal;
          if (cart.discountPercentage) {
            updatedDiscountedPrice =
              updatedTotal - (updatedTotal * cart.discountPercentage) / 100;
          }
          return {
            ...cart,
            quantity: updatedQuantity,
            total: updatedTotal,
            discountTotal: updatedDiscountedPrice,
          };
        } else return cart;
        // cart.id === id ? { ...cart, quantity: updatedQuantity,total:updatedQuantity*cart.price,discountTotal:(updatedQuantity*cart.price) } : cart
      });
      if (authedUser && "id" in authedUser) {
        localStorage.setItem(
          STORAGE_KEY + authedUser.id,
          JSON.stringify(updatedCarts)
        );
      }
      dispatch({
        type: CartContextActionType.UPDATE,
        payload: {
          carts: updatedCarts,
        },
      });
    },
    [authedUser]
  );

  const HandleCartOnLogout = useCallback(() => {
    dispatch({
      type: CartContextActionType.UPDATE,
      payload: { carts: [] },
    });
  }, []);
  const memoizedValue = useMemo(
    () => ({
      carts: state.carts,
      loading: state.loading,
      addToCart: addToCart,
      updateCartQuantity: updateCartItemQuantity,
      deleteCart: deleteCart,
      handleCartOnLogout: HandleCartOnLogout,
    }),
    [
      state.carts,
      state.loading,
      addToCart,
      updateCartItemQuantity,
      deleteCart,
      HandleCartOnLogout,
    ]
  );

  return (
    <CartContext.Provider value={memoizedValue}>
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  const cartContext = useContext(CartContext);
  if (cartContext === undefined) {
    throw new Error(
      "Cart content is accessible for the component inside cart provider"
    );
  }
  return cartContext;
}

export default function CartContainer() {
  const context = useCartContext();
  const { carts: cartItems } = context;

  return (
    <div className="flex flex-col gap-5 md:flex-row md:gap-2 my-2 md:my-4 mx-2 ">
      {/* Cart Items Section */}
      <div className="border border-gray-200 p-2 rounded-xl w-full md:w-[50%] ">
        {cartItems!.length ? (
          cartItems!.map((cart, index) => (
            <Fragment key={cart.id}>
              <SingleCartItem cartItems={cart} />
              {index < cartItems!.length - 1 && <Divider width="w-full" />}
            </Fragment>
          ))
        ) : (
          <Title font="font-extrabold" fontSize="text-xl">
            No items in Cart
          </Title>
        )}
      </div>

      {/* Order Summary Section */}
      <div className="w-full md:w-[48%] lg:sticky lg:top-28 lg:self-start">
        <OrderSummary cartItems={cartItems!} />
      </div>
    </div>
  );
}
