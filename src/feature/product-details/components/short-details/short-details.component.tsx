import {
  Button,
  Divider,
  Price,
  ProductCounter,
  Rating,
  Title,
} from "../../../shared";
import { ShortDetailsProps } from "../../models/short-details.type";

export default function ShortDetails({
  productTitle,
  ProductDetails,
  ProductDiscount,
  ProductPrice,
  ProductRating,
}: ShortDetailsProps) {
  return (
    <div className="p-3 w-full md:w-4/5 lg:w-auto xl:w-[44rem] flex flex-col gap-4 lg:gap-6">
      <Title font="font-extrabold" fontSize="text-3xl md:text-xl lg:text-4xl">
        {productTitle}
      </Title>
      <Rating
        rating={ProductRating}
        maxRating={5}
        extraClasses="text-lg md:text-xl lg:text-2xl"
      />
      <Price
        price={ProductPrice}
        discount={ProductDiscount}
        extraClasses="text-2xl md:text-3xl"
      />
      <Title extraClasses="text-gray-500 w-full ">{ProductDetails}</Title>
      <Divider width="w-[100%]" />
      <div className="flex gap-3">
        <ProductCounter />
        <Button
          label="Add to Cart"
          width="w-3/5"
          onClick={() => console.log("click")}
          backgroundColor="bg-black text-white"
          rounded="FULL"
        />
      </div>
    </div>
  );
}
