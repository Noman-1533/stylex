export interface SingleCartItemType {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage?: number;
  discountTotal?: number;
  thumbnail: string;
}

export interface SingleCartProps {
  cartItems: SingleCartItemType;
  // onDelete: (id: number) => void;
  // onUpdate: (id: number, value: number) => void;
}

export type CartTypeAPIResponse = {
  carts: CartsFromAPI[];
  limit: number;
  skip: number;
  total: number;
};
export type CartsFromAPI = {
  discountedTotal: number;
  id: number;
  products: SingleCartItemType[];
  total: number;
  totalProducts: number;
  totalQuantity: number;
  userId: number;
};
