import { PriceProps } from "../../models";

export default function Price({ price, discount = 0 }: PriceProps) {
  const calculateDiscount = (price: number, discount: number): number => {
    return (price * discount) / 100;
  };

  const newPrice = discount
    ? price - calculateDiscount(price, discount)
    : price;

  return (
    <>
      <div className="flex flex-row gap-2  sm:items-center sm:gap-4 text-xl  lg:text-2xl">
        {/* New Price */}
        <span className="font-bold text-xl   lg:text-2xl ">
          ${newPrice.toFixed(2)}
        </span>

        {/* Discount and Original Price */}
        {discount > 0 && (
          <div className="flex flex-row  sm:items-center gap-2 ">
            {/* Original Price */}
            <del className="text-gray-400 text-xl  lg:text-2xl">
              <b>${price.toFixed(2)}</b>
            </del>
            {/* Discount Badge */}
            <span className="bg-red-100 text-[#FA2A3B] px-3 py-1 rounded-full text-xs md:text-sm lg:text-md font-semibold">
              -{discount}%
            </span>
          </div>
        )}
      </div>
    </>
  );
}
