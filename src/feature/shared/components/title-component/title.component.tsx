import { TitleProps } from "../../models/title.type";

export default function Title({
  font = "",
  fontSize = "",
  color = "",
  extraClasses = "",
  children,
}: TitleProps) {
  return (
    <>
      <div className={`${font} ${fontSize} ${color} ${extraClasses}`}>
        {children}
      </div>
    </>
  );
}
