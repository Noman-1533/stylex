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
  extraClasses = "",
  disabled = false,
  iconPosition = "right",
  type = "button",
  children,
}: ButtonProps) {
  // return <button className="bg-black text-white ">Button</button>;
  return (
    <>
      <button
        type={type}
        disabled={disabled}
        className={`flex items-center gap-1 justify-center px-2 py-2 md:px-4 md:py-3 ${backgroundColor} ${color} ${
          BorderRound[rounded as keyof typeof BorderRound]
        } ${width} ${customStyles} text-sm  transition-all sm:text-base  ${extraClasses} ${
          disabled ? "cursor-not-allowed text-gray-500" : "cursor-pointer"
        }`}
        onClick={onClick}
      >
        {iconPosition === "left" && children}
        {label}
        {iconPosition === "right" && children}
      </button>
    </>
  );
}
export default Button;
