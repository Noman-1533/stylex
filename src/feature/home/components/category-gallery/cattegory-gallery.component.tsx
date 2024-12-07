import { CustomImage, Title } from "../../../shared";
import { CategoryGalleryProps } from "../../models";

export default function CategoryGallery({
  galleryItems,
}: CategoryGalleryProps) {
  const HandleClick = (item: string) => {
    console.log("navigate url", item);
  };

  return (
    <div className="bg-[#F0F0F0] flex flex-col items-center p-4 m-6 rounded-3xl">
      <Title fontSize="text-5xl" font="font-bold" extraClasses="text-center">
        BROWSE BY CATEGORY
      </Title>
      <div
        className="
          grid grid-cols-1 gap-4 m-3
          md:grid-cols-2
          lg:grid-cols-3 lg:gap-6"
      >
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className={`
            ${index === 1 || index === 2 ? "lg:col-span-2" : "col-span-1"}
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
              onClick={() => HandleClick(item.url as string)}
              extraClasses=""
            >
              <span>{item.name}</span>
            </CustomImage>
          </div>
        ))}
      </div>
    </div>
  );
}
