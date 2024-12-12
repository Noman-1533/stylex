import { FaTrashAlt } from "react-icons/fa";
import { CustomImage, Price, ProductCounter, Title } from "../../../shared";
import { SingleCartProps } from "../../models";

export default function SingleCartItem({
  cartItems,
  onDelete,
}: SingleCartProps) {
  return (
    <div>
      <div className="flex gap-2">
        <CustomImage
          size="h-32"
          imageURL={cartItems.image}
          extraClasses={`border border-gray-100 w-[35%] h-32  px-2 rounded-md`}
        />
        <div className="flex flex-col w-[60%]">
          <div className="flex justify-between gap-2">
            <Title>{cartItems.name}</Title>
            <FaTrashAlt
              className="text-[#FA2A3B] text-xl cursor-pointer"
              onClick={() => onDelete(cartItems.id)}
            />
          </div>
          <div className="text-gray-400">dummy</div>
          <div className="text-gray-400">dummy</div>
          <div className="flex gap-2 justify-between">
            <Price price={cartItems.price} extraClasses="text-xl" />
            <ProductCounter padding="px-3 " />
          </div>
        </div>
      </div>
    </div>
  );
}
