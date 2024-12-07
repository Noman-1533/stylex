import { DividerProps } from "../../models";

export default function Divider({
  width,
  height = "h-[.125rem]",
  backgroundColor = "bg-[#E6E6E6]",
}: DividerProps) {
  return (
    <div
      className={` block ${width} ${height} ${backgroundColor} mt-2 mb-2 md:mt-4 md:mb-4 ml-auto mr-auto`}
    ></div>
  );
}
