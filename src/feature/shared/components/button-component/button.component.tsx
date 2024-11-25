import { BorderRound } from "../../enums";
import { ButtonProps } from "../../models";

function Button({
  label,
  rounded,
  width,
  customStyles = "",
  backgroundColor,
  color,
  onClick,
  children,
}: ButtonProps) {
  // return <button className="bg-black text-white ">Button</button>;
  return (
    <>
      <button
        className={`flex items-center gap-2 justify-center px-4 py-2 ${backgroundColor} ${color} ${
          BorderRound[rounded as keyof typeof BorderRound]
        } ${width} ${customStyles} text-sm  transition-all sm:text-base   `}
        onClick={onClick}
      >
        {label}
        {children}
      </button>
    </>
  );
}
export default Button;
