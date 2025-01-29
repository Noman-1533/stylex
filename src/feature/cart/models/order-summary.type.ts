import { ReactNode } from "react";
import { SingleCartItemType } from "./single-cart.type";

export interface OrderSummaryProps {
  cartItems: SingleCartItemType[];
}

export interface SingleSummaryProps {
  summaryName: string;
  nameColor?: string;
  value: number;
  valueColor?: string;
  icon?: ReactNode;
  iconPlacement?: "left" | "right";
}
