import { ButtonRound } from "../enums";

export interface ButtonProps extends React.PropsWithChildren {
  label: string;
  rounded: keyof typeof ButtonRound;
  width: string;
  backgroundColor: string;
  color: string;
  customStyle?: string;
  onClick: () => void;
}
