export interface SingleCartItemType {
  id: number;
  name: string;
  image: string;
  price: number;
  discount?: number;
  quantity: number;
}

export interface SingleCartProps {
  cartItems: SingleCartItemType;
  // onDelete: (id: number) => void;
  // onUpdate: (id: number, value: number) => void;
}
