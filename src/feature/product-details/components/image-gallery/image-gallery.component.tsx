import { useState } from "react";
import { CustomImage } from "../../../shared";

export default function ImageGallery({ images }: { images: string[] }) {
  const [selectedImage, setSelectedImage] = useState<number>(0);
  return (
    <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] md:grid-rows-[1fr] gap-4 md:gap-6 lg:gap-8 p-4">
      <div className="rounded-lg overflow-hidden border border-gray-200 md:col-start-2 md:row-start-1 w-full md:w-72 lg:w-[30rem]">
        <CustomImage
          imageURL={images[selectedImage]}
          size="w-full  object-cover"
        />
      </div>
      <div className="flex flex-row md:flex-col gap-4 md:gap-6 justify-center md:justify-start md:col-start-1 md:row-start-1">
        {images.map((image, index) => (
          <CustomImage
            imageURL={image}
            key={`image-${index}`}
            size={`w-24 h-24 lg:w-32 lg:h-32 object-cover rounded-lg border-2 ${
              selectedImage === index ? "border-black" : "border-gray-300"
            } cursor-pointer`}
            onClick={() => {
              setSelectedImage(index);
            }}
          />
        ))}
      </div>
    </div>
  );
}
