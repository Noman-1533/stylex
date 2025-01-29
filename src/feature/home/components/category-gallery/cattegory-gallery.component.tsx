import { useNavigate } from "react-router-dom";
import { CustomImage, Title } from "../../../shared";
import { CategoryGalleryProps } from "../../models";

export default function CategoryGallery({
  galleryItems,
}: CategoryGalleryProps) {
  const navigate = useNavigate();
  const HandleClick = (categoryName: string) => {
    navigate(`/product/category/${categoryName}`);
  };
  const getColSpan = (index: number) => {
    // if (screen == "sm" || screen == "md" || screen == "xl") return "col-span-1";

    const rowNumber = Math.floor(index / 2);
    const colNumber = index % 2;
    // console.log("index", index, "\nrow=>", rowNumber, " ==  col=>", colNumber);
    return rowNumber % 2 !== colNumber % 2
      ? "lg:col-span-2 xl:col-span-1"
      : "col-span-1";
  };

  return (
    <div className="bg-[#F0F0F0] flex flex-col items-center p-10 m-2 md:m-0 rounded-3xl cursor-pointer">
      <Title fontSize="text-5xl" font="font-bold" extraClasses="text-center">
        BROWSE BY CATEGORY
      </Title>
      <div
        className="
        w-full
          grid grid-cols-1 gap-4 m-3
          md:grid-cols-2
          lg:grid-cols-3 lg:gap-6"
      >
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className={`
            ${getColSpan(index)} 
            w-full bg-[#FEFEFE] rounded-xl
          `}
          >
            <CustomImage
              key={item.name}
              imageURL={item.image}
              size="w-full h-60"
              rounded="3XL"
              childTextColor="text-black"
              childrenXPosition="LEFT"
              childTextSize="font-bold text-2xl"
              onClick={() => HandleClick(item.slug as string)}
              extraClasses=""
            >
              <span className="bg-[#FEFEFE] py-1 px-1">{item.name}</span>
            </CustomImage>
          </div>
        ))}
      </div>
    </div>
  );
}
