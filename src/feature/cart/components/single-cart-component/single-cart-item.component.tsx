import { FaTrashAlt } from "react-icons/fa";
import { CustomImage, Price, ProductCounter, Title } from "../../../shared";
import { SingleCartProps } from "../../models";
import { useCartContext } from "../cart-container-component/cart-container.component";

export default function SingleCartItem({ cartItems }: SingleCartProps) {
  const context = useCartContext();
  // const [count, setCount] = useState<number>(1);
  const onDelete = (id: number) => {
    if (context) {
      context.deleteCart(id, context.carts!);
    }
  };
  console.log(
    `cart item price and discount is ${cartItems.id} is => price = ${cartItems.price}  discount= ${cartItems.discountPercentage} discountedTotal= ${cartItems.discountTotal}`
  );
  return (
    <div>
      <div className="flex gap-2">
        <CustomImage
          size="h-32"
          imageURL={cartItems.thumbnail}
          extraClasses={`border border-gray-100 w-[35%] h-32  px-2 rounded-md`}
        />
        <div className="flex flex-col w-[60%]">
          <div className="flex justify-between gap-2">
            <Title>{cartItems.title}</Title>
            <FaTrashAlt
              className="text-[#FA2A3B] text-xl cursor-pointer"
              onClick={() => onDelete(cartItems.id)}
            />
          </div>
          <div className="text-gray-400">dummy</div>
          <div className="text-gray-400">dummy</div>
          <div className="flex gap-2 justify-between items-center">
            <Price price={cartItems.price} extraClasses="text-xl " />
            {/* <Title extraClasses="text-xl font-bold"> X</Title> */}
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
