//carousel

import { ProductCarouselProps } from "../../models";
import Button from "../button-component/button.component";
import Card from "../card-component/card.component";
import Title from "../title-component/title.component";

export default function ProductCarousel({
  products,
  carouselTitle,
  showMoreButton = false,
  buttonText = "",
  onClickButton = () => console.log("clicked"),
}: ProductCarouselProps) {
  const handleClick = (id: string) => console.log("clicked for id ", id);
  return (
    <>
      <div className="flex flex-col gap-5 items-center mt-5 mb-5">
        <Title
          font="font-extrabold"
          fontSize="text-4xl md:text-5xl lg:text-6xl"
        >
          {carouselTitle}
        </Title>
        <div className="flex flex-wrap gap-2 md:gap-3 lg:gap-1 justify-evenly">
          {products.slice(0, 4).map((product) => {
            return (
              <Card
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                imageURL={product.imageURL}
                rating={product.rating}
                discount={product.discount}
                onClick={handleClick}
              />
            );
          })}
        </div>
        {showMoreButton && (
          <Button
            label={buttonText}
            onClick={onClickButton}
            rounded="FULL"
            width="w-full md:w-60 lg:w-48"
            customStyles="border border-[#E1E1E1] mb-4 mt-4"
          />
        )}
      </div>
    </>
  );
}
