import { SingleCartItemType } from "../../cart";

interface ProductCommonType {
  id: number;
  title: string;
  price?: number;
  discountPercentage?: number;
  thumbnail?: string;
}
export interface CardProps extends ProductCommonType {
  rating?: number;
  customStyles?: string;
  onClickAddToCart?: (product: SingleCartItemType) => void;
}

export interface CartTypeProduct extends ProductCommonType {
  quantity: number;
  discountedTotal: number;
  total: number;
}
