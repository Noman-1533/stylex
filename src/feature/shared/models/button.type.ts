import { BorderRound } from "../enums";

export interface ButtonProps extends React.PropsWithChildren {
  label: string;
  rounded?: keyof typeof BorderRound;
  width: string;
  backgroundColor?: string;
  color?: string;
  customStyles?: string;
  extraClasses?: string;
  disabled?: boolean;
  onClick: () => void;
  iconPosition?: "left" | "right";
  type?: "button" | "submit" | "reset";
}
