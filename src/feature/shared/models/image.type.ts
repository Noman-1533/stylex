import {
  BorderRound,
  TextHorizontalAlignment,
  TextVerticalAlignment,
} from "../enums";

export interface ImageProps extends React.PropsWithChildren {
  imageURL: string;
  altText?: string;
  size: string;
  rounded?: keyof typeof BorderRound;
  cursor?: string;
  customStyles?: string;
  childrenXPosition?: keyof typeof TextHorizontalAlignment;
  childrenYPosition?: keyof typeof TextVerticalAlignment;
  childTextColor?: string;
  childBackground?: string;

  onClick?: () => void;
}
