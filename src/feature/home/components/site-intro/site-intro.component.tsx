import { useState, useEffect } from "react";
import { Button, CustomImage, Title } from "../../../shared";
import { BRAND, CUSTOMERS, PRODUCTS } from "../../enums";
import staticImage from "../../../../assets/static-image.png";
export default function SiteIntro() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update state on window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleShopNow = () => {
    console.log("clicked");
  };

  return (
    <div className="mx-2 flex flex-col">
      <Title
        font="font-extrabold font-sans"
        fontSize="text-[2.5rem] leading-[2.75rem]"
      >
        FIND CLOTHES THAT MATCHES YOUR STYLE
      </Title>
      <Title>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero dicta
        nisi consequuntur atque ipsa non possimus tempora deserunt, enim ex?
      </Title>
      <Button
        label="Shop Now"
        color="text-white"
        backgroundColor="bg-black"
        width="w-full"
        onClick={handleShopNow}
        rounded="FULL"
        extraClasses=" py-4"
      />
      <div className="flex flex-wrap justify-evenly items-center mt-8 pt-4">
        <Chips value={BRAND.value} text={BRAND.text} />
        <div className="border-l border-gray-300 h-12 mx-4"></div>
        <Chips value={PRODUCTS.value} text={PRODUCTS.text} />
        {windowWidth > 545 && (
          <div className="border-l border-gray-300 h-12 mx-4"></div>
        )}
        {windowWidth > 510 && windowWidth <= 545 && (
          <div className="border-1 h-12 mx-4 border-white"></div>
        )}
        <Chips value={CUSTOMERS.value} text={CUSTOMERS.text} />
      </div>
      <CustomImage imageURL={staticImage} size="w-full " />
    </div>
  );
}

function Chips({ value, text }: { value: number; text: string }) {
  return (
    <div className="text-center">
      <Title font="font-extrabold" fontSize="text-3xl">
        {value.toLocaleString() + "+"}
      </Title>
      <Title color="text-[#616060]" font="font-normal">
        {text}
      </Title>
    </div>
  );
}
