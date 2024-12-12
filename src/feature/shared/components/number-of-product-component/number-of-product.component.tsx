import { useState } from "react";
import Button from "../button-component/button.component";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function ProductCounter({ padding }: { padding?: string }) {
  const [count, setCount] = useState(1);

  const handleDecrease = () => {
    setCount((prev) => Math.max(prev - 1, 0)); // Prevent negative count
  };

  const handleIncrease = () => {
    setCount((prev) => prev + 1);
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
        onChange={(e) => setCount(parseInt(e.target.value))}
        className="w-12 md:w-14 lg:w-16 text-center bg-[#F0F0F0] outline-none font-semibold "
      />
      <Button label="" width="w-6 md:w-8 lg:w-10 " onClick={handleIncrease}>
        <FontAwesomeIcon className="text-xl font-bold" icon={faPlus} />
      </Button>
    </div>
  );
}
