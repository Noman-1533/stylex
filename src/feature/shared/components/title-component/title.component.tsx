import { TitleProps } from "../../models/title.type";

export default function Title({ font, fontSize, color, children }: TitleProps) {
  return (
    <>
      <div className={`${font} ${fontSize} ${color}`}>{children}</div>
    </>
  );
}
