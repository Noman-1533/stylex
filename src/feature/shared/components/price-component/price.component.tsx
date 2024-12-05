import { PriceProps } from "../../models";

export default function Price({
  price,
  discount = 0,
  extraClasses,
}: PriceProps) {
  const calculateDiscount = (price: number, discount: number): number => {
    return (price * discount) / 100;
  };

  const newPrice = discount
    ? price - calculateDiscount(price, discount)
    : price;

  return (
    <>
      <div
        className={`flex flex-row gap-2  sm:items-center md:gap-3 ${
          extraClasses ? extraClasses : "text-xl  lg:text-2xl"
        } `}
      >
        {/* New Price */}
        <span className="font-bold">${newPrice.toFixed(2)}</span>

        {/* Discount and Original Price */}
        {discount > 0 && (
          <div className="flex flex-row  sm:items-center gap-2 ">
            {/* Original Price */}
            <del className="text-gray-400 ">
              <b>${price.toFixed(2)}</b>
            </del>
            {/* Discount Badge */}
            <span className="bg-red-100 text-[#FA2A3B] px-1 py-1 md:px-2 lg:px-3 rounded-full text-xs md:text-sm lg:text-md font-semibold">
              -{discount}%
            </span>
          </div>
        )}
      </div>
    </>
  );
}
