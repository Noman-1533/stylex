import { BrandLogoProps } from "../../models";

export default function BrandLogo({
  brandName,
  width = "200",
  height = "50",
  fontColor = "#000",
  fontWeight = "900",
  viewBox = "0 0 200 50",
}: BrandLogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      width={width}
      height={height}
    >
      <text
        x="8"
        y="35"
        font-family="Roboto ,Arial, sans-serif"
        font-size="30"
        font-weight={fontWeight}
        fill={fontColor}
      >
        {brandName}
      </text>
    </svg>
  );
}
