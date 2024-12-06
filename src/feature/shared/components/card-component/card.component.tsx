import { CustomImage, Price, Rating, Title, Button } from "..";
import { CardProps } from "../../models/card.type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
export default function Card({
  id,
  title,
  rating = 0,
  imageURL,
  price = 0,
  discount = 0,
  customStyles = "",
  onClick = (id: string) => console.log(id),
}: CardProps) {
  const navigate = useNavigate();
  const handleDetailsClick = (id: string) => {
    navigate(`/details/${id}`);
  };
  return (
    <>
      <div
        className={`relative ${customStyles} group bg-white p-4 
        ${/*shadow-md*/ ""} rounded-lg w-48 md:w-72 lg:w-80 `}
      >
        {/* Image Section */}
        <div className="relative">
          <CustomImage
            imageURL={imageURL as string}
            size="w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72"
            altText="Product Image"
            rounded="LG"
            onClick={() => handleDetailsClick(id)}
            cursor="cursor-pointer"
          />

          {/* Add to Cart Button (visible on large screens on hover) */}
          <div className="absolute bottom-0 left-0  opacity-0 group-hover:opacity-100 transition-opacity duration-300 lg:inline-block hidden w-48 md:w-60 lg:w-72">
            <Button
              width="w-full"
              label="Add to Cart"
              backgroundColor="bg-black"
              color="text-white"
              rounded="LG"
              customStyles="px-6 py-2"
              onClick={() => onClick(`from cart ${id}`)}
            >
              <FontAwesomeIcon icon={faCartShopping} className="text-2xl" />
            </Button>
          </div>

          {/* Add to Cart Button (always visible on mobile and takes full width) */}
          <div className=" absolute bottom-0 left-0 mt-4 lg:hidden w-48 md:w-60 lg:w-72">
            <Button
              width="w-full"
              label="Add to Cart"
              backgroundColor="bg-black"
              color="text-white"
              rounded="LG"
              customStyles="w-full px-4 py-2"
              onClick={() => onClick(id)}
            >
              <FontAwesomeIcon icon={faCartShopping} className="text-2xl" />
            </Button>
          </div>
        </div>

        {/* Title */}
        <Title>
          <a
            className="cursor-pointer font-semibold text-md md:text-lg lg:text-xl mt-2 block"
            onClick={() => handleDetailsClick(id)}
          >
            {title}
          </a>
        </Title>

        <Rating rating={rating as number} maxRating={5} />

        <Price price={price as number} discount={discount} />
      </div>
    </>
  );
}
