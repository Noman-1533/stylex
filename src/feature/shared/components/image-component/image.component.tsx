import {
  BorderRound,
  TextHorizontalAlignment,
  TextVerticalAlignment,
} from "../../enums";
import { ImageProps } from "../../models/image.type";

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
  return (
    <>
      <div className={`relative inline-block ${cursor}`} onClick={onClick}>
        <div
          className={`absolute ${TextVerticalAlignment[childrenYPosition]} ${TextHorizontalAlignment[childrenXPosition]} p-2 m-2  ${childBackground} ${childTextColor} rounded`}
        >
          {children}
        </div>
        <img
          src={imageURL}
          alt={altText}
          className={`${size} ${BorderRound[rounded]} ${customStyles}`}
        />
      </div>
    </>
  );
}
