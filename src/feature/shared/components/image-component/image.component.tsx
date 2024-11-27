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
    <div className={`relative inline-block ${cursor}`} onClick={onClick}>
      {/* Children container */}
      <div
        className={`absolute ${TextVerticalAlignment[childrenYPosition]} ${TextHorizontalAlignment[childrenXPosition]} p-2 m-2 ${childBackground} ${childTextColor} rounded z-10 pointer-events-none`}
      >
        {children}
      </div>

      <div
        className={`relative ${size} ${BorderRound[rounded]} ${customStyles}`}
        style={{ overflow: "hidden" }}
      >
        {loading && (
          <div className="absolute top-0 left-0 w-full h-full z-0">
            <ShimmerDiv mode="light" height="100%" width="100%" />
          </div>
        )}

        {/* Lazy-loaded image */}
        <LazyLoadImage
          src={imageURL}
          alt={altText}
          className={`w-full h-full ${BorderRound[rounded]}`}
          effect={imageURL.startsWith("http") ? "opacity" : undefined}
          onLoad={() => setLoading(false)}
          style={{ zIndex: 1 }}
        />
      </div>
    </div>
  );
}
