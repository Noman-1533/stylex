import { BorderRound } from "../enums";

export interface ButtonProps extends React.PropsWithChildren {
  label: string;
  rounded?: keyof typeof BorderRound;
  width: string;
  backgroundColor?: string;
  color?: string;
  customStyles?: string;
  onClick: () => void;
}
