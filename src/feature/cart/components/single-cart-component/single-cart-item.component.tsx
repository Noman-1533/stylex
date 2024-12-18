import { FaTrashAlt } from "react-icons/fa";
import { CustomImage, Price, ProductCounter, Title } from "../../../shared";
import { SingleCartProps } from "../../models";
import { useContext } from "react";
import { CartContext } from "../cart-container-component/cart-container.component";

export default function SingleCartItem({ cartItems }: SingleCartProps) {
  const context = useContext(CartContext);
  // const [count, setCount] = useState<number>(1);
  const onDelete = (id: number) => {
    if (context) {
      context.setCartItem((pre) => pre.filter((item) => item.id !== id));
    }
  };
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
            <ProductCounter
              padding="px-3 "
              count={cartItems.quantity}
              // setCount={setCount}
              id={cartItems.id}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

