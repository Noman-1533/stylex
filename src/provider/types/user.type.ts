import { LoginResponse } from "../../feature/auth";

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: HairType;
  ip: string;
  address: AddressType;
  bank: BankType;
  company: CompanyType;
}
export type HairType = {
  color: string;
  type: string;
};
export type AddressType = {
  address: string;
  city: string;
  state: string;
  stateCode: string;
  postalCode: string;
  coordinates: CoordinatesType;
  country: string;
};
export type CoordinatesType = {
  lat: number;
  lan: number;
};
export type BankType = {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
};
export type CompanyType = {
  department: string;
  name: string;
  title: string;
  address: AddressType;
};

export type LoggedInUser = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  accessToken: string;
  refreshToken: string;
};

export type UserProviderType = {
  user: AuthUserType;
  loading: boolean;
  authenticated: boolean;

  login: (username: string, password: string) => Promise<LoginResponse>;
  logout: () => void;
};

export type AuthUserType = null | User | LoggedInUserType;

export type AuthUserStateType = {
  user: AuthUserType | null;
  status?: string;
  loading: boolean;
};
export interface LoggedInUserType {
  accessToken: string;
  refreshToken: string;
  isValid: boolean;
}
export type ActionMapType<
  M extends {
    [index: string]: { user: AuthUserType } | undefined;
  }
> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};
