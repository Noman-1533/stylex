import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { ShimmerDiv } from "shimmer-effects-react";
import {
  BorderRound,
  TextHorizontalAlignment,
  TextVerticalAlignment,
} from "../../enums";
import { ImageProps } from "../../models/image.type";
import { useState } from "react";

export default function Image({
  imageURL,
  altText = "",
  size,
  rounded = "SM",
  cursor = "",
  customStyles,
  childrenXPosition = "LEFT",
  childrenYPosition = "TOP",
  childTextColor = "",
  childBackground = "",
  onClick,
  children,
}: ImageProps) {
  const [loading, setLoading] = useState(true);
  return (
    <>
      <div className={`relative inline-block ${cursor}`} onClick={onClick}>
        <div
          className={`absolute ${TextVerticalAlignment[childrenYPosition]} ${TextHorizontalAlignment[childrenXPosition]} p-2 m-2  ${childBackground} ${childTextColor} rounded`}
        >
          {children}
        </div>
        <div
          className={`relative ${size} ${BorderRound[rounded]} ${customStyles}`}
        >
          {loading && (
            // Shimmer effect matches the image's size and border
            <div className="absolute top-0 left-0 w-full h-full">
              <ShimmerDiv mode="light" height="100%" width="100%" />
            </div>
          )}

          {/* Lazy-loaded image */}
          <LazyLoadImage
            src={imageURL}
            alt={altText}
            className={`w-full h-full ${BorderRound[rounded]}`}
            effect="opacity"
            onLoad={() => setLoading(false)}
          />
        </div>
      </div>
    </>
  );
}
