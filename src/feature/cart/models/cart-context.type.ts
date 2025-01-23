import { CartContextActionType } from "../enums";
import { SingleCartItemType } from "./single-cart.type";

export type Payload = {
  [CartContextActionType.INITIAL]: {
    carts: SingleCartItemType[];
  };
  [CartContextActionType.UPDATE]: {
    carts: SingleCartItemType[];
  };
};
export type CartActionType =
  ActionMapType<Payload>[keyof ActionMapType<Payload>];

export interface CartContextType {
  carts: SingleCartItemType[] | null;
  loading: boolean;
  addToCart: (
    newCartItem: SingleCartItemType,
    currentCartItems: SingleCartItemType[]
  ) => void;
  updateCartQuantity: (
    id: number,
    cartItems: SingleCartItemType[],
    updatedQuantity: number
  ) => void;
  deleteCart: (id: number, cartItems: SingleCartItemType[]) => void;
  handleCartOnLogout: () => void;
}

export interface CartStateType {
  loading: boolean;
  carts: SingleCartItemType[] | null;
}

export type ActionMapType<
  M extends {
    [index: string]: { carts: SingleCartItemType[] };
  }
> = {
  [Key in keyof M]: {
    type: Key;
    payload: M[Key];
  };
};
