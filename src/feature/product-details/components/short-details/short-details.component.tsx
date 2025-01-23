import { useState } from "react";
import {
  Button,
  Divider,
  Price,
  ProductCounter,
  Rating,
  Title,
} from "../../../shared";
import { ShortDetailsProps } from "../../models/short-details.type";
import { SingleCartItemType } from "../../../cart";
import { useAuthedUser } from "../../../../provider";
import { useCartContext } from "../../../cart/components/cart-container-component/cart-container.component";
import { useNavigate } from "react-router-dom";

export default function ShortDetails({ product }: ShortDetailsProps) {
  const [count, setCount] = useState(1);
  const { authenticated } = useAuthedUser();
  const { carts: currentCartItems, addToCart } = useCartContext();
  const navigate = useNavigate();
  const newCartItem: SingleCartItemType = {
    id: product.id,
    title: product.title,
    price: product.price,
    quantity: count,
    total: parseFloat((product.price * count).toFixed(2)),
    discountPercentage: product.discountPercentage,
    discountTotal: parseFloat(
      ((product.price * count * product.discountPercentage) / 100).toFixed(2)
    ),
    thumbnail: product.thumbnail,
  };
  const handleAddToCart = () => {
    if (authenticated) {
      addToCart(newCartItem, currentCartItems!);
    } else navigate("/login");
  };
  return (
    <div className="p-3 w-full md:w-4/5 lg:w-auto xl:w-[44rem] flex flex-col gap-4 lg:gap-6">
      <Title font="font-extrabold" fontSize="text-3xl md:text-xl lg:text-4xl">
        {product.title}
      </Title>
      <Rating
        rating={product.rating}
        maxRating={5}
        extraClasses="text-lg md:text-xl lg:text-2xl"
      />
      <Price
        price={product.price}
        discount={product.discountPercentage}
        extraClasses="text-2xl md:text-3xl"
      />
      <Title extraClasses="text-gray-500 w-full ">{product.description}</Title>
      <Divider width="w-[100%]" />
      <div className="flex gap-3">
        <ProductCounter count={count} setCount={setCount} />
        <Button
          label="Add to Cart"
          width="w-3/5"
          onClick={handleAddToCart}
          backgroundColor="bg-black text-white"
          rounded="FULL"
        />
      </div>
    </div>
  );
}
