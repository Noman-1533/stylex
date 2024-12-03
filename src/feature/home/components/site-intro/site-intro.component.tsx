import { useState, useEffect } from "react";
import { Button, CustomImage, Title } from "../../../shared";
import { BRAND, CUSTOMERS, PRODUCTS } from "../../enums";
import staticImage from "../../../../assets/static-image.png";

import parda from "../../../../assets/parda_logo.png";
import zara from "../../../../assets/zara_logo.png";
import gucci from "../../../../assets/gucci_logo.png";
import ck from "../../../../assets/ck_logo.png";
import versace from "../../../../assets/versace_logo.png";

const logos = [versace, zara, gucci, parda, ck];

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
    <div className="mx-2 flex flex-col bg-[#F2F0F1] ">
      <div className="flex flex-col md:flex-row pt-4 pl-4 lg:pt-16 lg:pl-16 sm:pl-2 ">
        <div className="flex flex-col lg:w-1/2 pt-2 md:pt-4 lg:pt-6 ">
          <Title
            font="font-extrabold font-sans"
            fontSize="text-[2.5rem] leading-[2.75rem] md:text-5xl lg:text-7xl"
          >
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </Title>
          <Title
            color="text-[#616060]"
            font="lg:text-lg"
            extraClasses="mt-2 mb-2"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero dicta
            nisi consequuntur atque ipsa non possimus tempora deserunt, enim ex?
          </Title>
          <Button
            label="Shop Now"
            color="text-white"
            backgroundColor="bg-black"
            width="w-full md:w-44 lg:w-56"
            onClick={handleShopNow}
            rounded="FULL"
            extraClasses=" py-4 mt-3 md:mt-6"
          />
          <div className="flex flex-wrap justify-evenly items-center mt-8 pt-4">
            <Chips value={BRAND.value} text={BRAND.text} />
            <div className="border-l border-gray-300 h-12 mx-4 lg:mx-3"></div>
            <Chips value={PRODUCTS.value} text={PRODUCTS.text} />
            {((windowWidth > 572 && windowWidth <= 767) ||
              windowWidth > 992) && (
              <div className="border-l border-gray-300 h-12 mx-4 lg:mx-3"></div>
            )}
            {((windowWidth > 510 && windowWidth <= 572) ||
              (windowWidth > 767 && windowWidth < 992)) && (
              <div className="border-1 h-12 mx-4 border-white"></div>
            )}
            <Chips value={CUSTOMERS.value} text={CUSTOMERS.text} />
          </div>
        </div>
        <CustomImage imageURL={staticImage} size="w-full " />
      </div>
      <LogoGallery logos={logos} />
    </div>
  );
}

function Chips({ value, text }: { value: number; text: string }) {
  return (
    <div className="text-center">
      <Title font="font-semibold" fontSize="text-2xl   lg:text-5xl">
        {value.toLocaleString() + "+"}
      </Title>
      <Title color="text-[#616060]" font="font-normal">
        {text}
      </Title>
    </div>
  );
}

function LogoGallery({ logos }: { logos: string[] }) {
  console.log(logos[0]);
  return (
    <div className="flex flex-wrap gap-3 items-center justify-around w-full bg-black h-44 md:h-36 lg h:30">
      {logos.map((logo, index) => {
        return (
          <CustomImage
            key={index}
            imageURL={logo}
            size="w-28 md:w-36 lg:w-44 "
          />
        );
      })}
    </div>
  );
}