import { FaArrowRight, FaMinus } from "react-icons/fa";
import { Button, Divider, Price, Title } from "../../../shared";
import { OrderSummaryProps, SingleSummaryProps } from "../../models";

export default function OrderSummary({ cartItems }: OrderSummaryProps) {
  const subTotalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);
  const totalDiscount = cartItems.reduce((acc, item) => {
    if (item.discount) return acc + item.discount;
    else return acc + 0;
  }, 0);
  const deliveryFee = subTotalPrice + totalDiscount > 0 ? 15 : 0;
  const totalPrice = subTotalPrice - totalDiscount + deliveryFee;
  const handleCheckout = () => {
    console.log("checkoutClicked");
  };
  return (
    <>
      <div className=" p-4 md:p-6 border border-gray-200  rounded-xl">
        <Title font="font-bold" fontSize="text-xl">
          Order Summary
        </Title>
        <SingleSummary summaryName="Subtotal" value={subTotalPrice} />
        <SingleSummary
          summaryName="Discount"
          value={totalDiscount}
          valueColor="text-red-500"
          iconPlacement="left"
          icon={<FaMinus className="text-sm font-normal w-2 text-red-500" />}
        />
        <SingleSummary summaryName="Delivery Fee" value={deliveryFee} />
        <Divider width="w-full" height="h-px" />
        <SingleSummary
          summaryName="Total"
          value={totalPrice}
          nameColor="text-black"
        />
        <Button
          label="Go to Checkout"
          width="w-full"
          onClick={handleCheckout}
          backgroundColor="bg-black"
          color="text-white"
          rounded="FULL"
          extraClasses="py-4"
        >
          <FaArrowRight />
        </Button>
      </div>
    </>
  );
}
function SingleSummary({
  summaryName,
  nameColor,
  value,
  valueColor,
  icon,
  iconPlacement = "left",
}: SingleSummaryProps) {
  return (
    <span className="flex justify-between my-3 md:my-5">
      <Title color={`${nameColor ? nameColor : "text-gray-500"}`}>
        {summaryName}
      </Title>
      <span className="flex items-center">
        {iconPlacement === "left" && icon}{" "}
        <Price
          price={value}
          extraClasses={`${valueColor ? valueColor : ""} text-xl md:text-2xl`}
        />
        {iconPlacement === "right" && icon}
      </span>
    </span>
  );
}
