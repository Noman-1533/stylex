import Button from "../button-component/button.component";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProductCounterProps } from "../../models";
import { useCartContext } from "../../../cart/components/cart-container-component/cart-container.component";
export default function ProductCounter({
  padding,
  count,
  setCount,
  id,
}: ProductCounterProps) {
  const context = useCartContext();
  const handleDecrease = () => {
    if (context && id) {
      context.updateCartQuantity(id, context.carts!, Math.max(count - 1, 1));
    }
    if (setCount) {
      setCount((prev) => {
        return Math.max(prev - 1, 1);
      });
    }
  };

  const handleIncrease = () => {
    if (context && id) {
      context.updateCartQuantity(id, context.carts!, count + 1);
    }
    if (setCount)
      setCount((prev) => {
        return prev + 1;
      });
  };

  return (
    <div
      className={`flex flex-row items-center bg-[#F0F0F0] rounded-full w-32 md:w-36 ${
        padding ? padding : "p-2"
      }`}
    >
      <Button label="" width="w-6 md:w-8 " onClick={handleDecrease}>
        <FontAwesomeIcon className="text-xl font-bold" icon={faMinus} />
      </Button>
      <input
        type="number"
        value={count}
        onChange={(e) => {
          const newValue = Math.max(1, parseInt(e.target.value) | 1);
          if (setCount) setCount(newValue);
          if (context && id) {
            context.updateCartQuantity(id, context.carts!, newValue);
          }
        }}
        className="w-12 md:w-14 lg:w-16 text-center bg-[#F0F0F0] outline-none font-semibold "
      />
      <Button label="" width="w-6 md:w-8 lg:w-10 " onClick={handleIncrease}>
        <FontAwesomeIcon className="text-xl font-bold" icon={faPlus} />
      </Button>
    </div>
  );
}
