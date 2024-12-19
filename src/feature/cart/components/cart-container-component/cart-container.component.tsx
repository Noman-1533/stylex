import { Fragment } from "react/jsx-runtime";
import { Divider } from "../../../shared";
import { SingleCartItemType } from "../../models";
import SingleCartItem from "../single-cart-component/single-cart-item.component";
import { createContext, useContext, useState } from "react";
import OrderSummary from "../order-summary-component/order-summary.component";
interface CartContextType {
  cartItems: SingleCartItemType[];
  setCartItem: React.Dispatch<React.SetStateAction<SingleCartItemType[]>>;
}
export const CartContext = createContext<CartContextType | undefined>(
  undefined
);
export default function CartContainer() {
  const [cartItems, setCartItem] = useState<SingleCartItemType[]>([
    {
      id: 1,
      name: "Lorem ipsum, dolor sit amet consectetur ",
      price: 145,
      quantity: 1,
      image:
        "https://www.stoneycreekhunting.co.nz/image/cache/catalog/product_images/corporate/mens/shirts/Mens_Corporate_Shirt_Long_Sleeve_Float_Navy-875x1000.jpg",
    },
    {
      id: 2,
      name: "Item",
      price: 145,
      quantity: 1,
      image:
        "https://www.stoneycreekhunting.co.nz/image/cache/catalog/product_images/corporate/mens/shirts/Mens_Corporate_Shirt_Long_Sleeve_Float_Navy-875x1000.jpg",
    },
    {
      id: 3,
      name: "Item",
      price: 145,
      quantity: 1,
      image:
        "https://www.stoneycreekhunting.co.nz/image/cache/catalog/product_images/corporate/mens/shirts/Mens_Corporate_Shirt_Long_Sleeve_Float_Navy-875x1000.jpg",
    },
  ]);
  return (
    <CartContext.Provider value={{ cartItems, setCartItem }}>
      <WrapperContainer />
    </CartContext.Provider>
  );
}
function WrapperContainer() {
  const context = useContext(CartContext);
  if (!context) return;
  const { cartItems } = context;
  return (
    <div className="flex flex-col gap-5 md:flex-row md:gap-2 my-2 md:my-4 mx-2">
      <div className="border border-gray-200 p-2 rounded-xl w-full md:w-[50%] ">
        {cartItems.map((cart, index) => (
          <Fragment key={cart.id}>
            <SingleCartItem cartItems={cart} />
            {index < cartItems.length - 1 && <Divider width="w-full" />}
          </Fragment>
        ))}
      </div>
      <span className="w-full md:w-[50%]">
        <OrderSummary cartItems={cartItems} />
      </span>
    </div>
  );
}
