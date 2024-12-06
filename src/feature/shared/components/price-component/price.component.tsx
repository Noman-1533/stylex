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
        className={`flex flex-row gap-1  sm:items-center md:gap-3 ${
          extraClasses ? extraClasses : "text-base md:text-lg  lg:text-2xl"
        } `}
      >
        <span className="font-bold">${newPrice.toFixed(2)}</span>

        {discount > 0 && (
          <div className="flex flex-row  sm:items-start gap-1 ">
            <del className="text-gray-400 ">
              <b>${price.toFixed(2)}</b>
            </del>
            <span className="bg-red-100 text-[#FA2A3B]  px-0.5 py-2 md:px-2 lg:px-3 rounded-full text-xs md:text-sm lg:text-md md:font-semibold">
              -{(Math.round(discount * 100) / 100).toFixed(1)}%
            </span>
          </div>
        )}
      </div>
    </>
  );
}
