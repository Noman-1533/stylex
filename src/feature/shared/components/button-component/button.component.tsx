import { ButtonRound } from "../../enums";
import { ButtonProps } from "../../models";

export default function Button({
  label,
  rounded,
  width,
  customStyle = "",
  backgroundColor,
  color,
  onClick,
  children,
}: ButtonProps) {
  // return <button className="bg-black text-white ">Button</button>;
  return (
    <>
      <button
        className={`flex items-center gap-2 justify-center px-4 py-2 ${backgroundColor} ${color} ${ButtonRound[rounded]} ${width} ${customStyle} text-sm  transition-all sm:text-base `}
        onClick={onClick}
      >
        {label}
        {children}
      </button>
    </>
  );
}
