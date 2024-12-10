// import { useState } from "react";
// import "./range-slider.css";
// import { DoubleRangeSliderProps } from "../../models";

// export default function DoubleRangeSlider({
//   minValue,
//   maxValue,
//   step,
//   leftLabelExtraLeft = 0.5,
//   rightLabelExtraRight = 1,
//   leftLabelGap = 5,
//   rightLabelGap = 5,
// }: DoubleRangeSliderProps) {
//   const [min, setMin] = useState(minValue);
//   const [max, setMax] = useState(maxValue);

//   const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = parseInt(e.target.value, 10);
//     if (value <= max - step) {
//       setMin(value);
//     }
//   };

//   const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = parseInt(e.target.value, 10);
//     if (value >= min + step) {
//       setMax(value);
//     }
//   };

//   const constrainedRange = maxValue - minValue;
//   const leftPercentage = ((min - minValue) / constrainedRange) * 100;
//   const rightPercentage = 100 - ((max - minValue) / constrainedRange) * 100;
//   const areLabelsTooClose =
//     Math.abs(leftPercentage - (100 - rightPercentage)) <
//     Math.max(leftLabelGap, rightLabelGap);

//   return (
//     <div className="h-10">
//       <div className="h-1 relative rounded-sm bg-[#e1e9f6]">
//         <span
//           className="h-[100%] absolute rounded-md bg-blue-500"
//           style={{
//             left: `${leftPercentage}%`,
//             right: `${rightPercentage}%`,
//           }}
//         ></span>
//       </div>

//       <div className="range-input">
//         <input
//           type="range"
//           value={min}
//           min={minValue}
//           max={maxValue}
//           step={step}
//           onChange={handleMinChange}
//         />

//         <input
//           type="range"
//           value={max}
//           min={minValue}
//           max={maxValue}
//           step={step}
//           onChange={handleMaxChange}
//         />
//       </div>
//       {/* Labels for min and max */}
//       <div className="relative w-full -mt-6">
//         <div
//           className="absolute top-8  text-lg font-bold text-center px-2 py-1 transform -translate-x-1/2"
//           style={{
//             left: `${
//               areLabelsTooClose
//                 ? `${Math.abs(leftPercentage - leftLabelGap)}`
//                 : `${leftPercentage + leftLabelExtraLeft}%`
//             }`,
//           }} // Dynamic positioning
//         >
//           {min}
//         </div>

//         <div
//           className="absolute font-bold top-8 text-lg text-center px-2 py-1 transform -translate-x-1/2"
//           style={{
//             right: `${
//               areLabelsTooClose
//                 ? `${Math.abs(rightPercentage - rightLabelGap)}`
//                 : `${rightPercentage - rightLabelExtraRight}%`
//             } `,
//           }} // Dynamic positioning
//         >
//           {max}
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import "./range-slider.css";
import { DoubleRangeSliderProps } from "../../models";

export default function DoubleRangeSlider({
  minValue,
  maxValue,
  step,
  leftLabelExtraLeft = 0.5,
  rightLabelExtraRight = 1,
  labelMinimumGap = 10,
}: DoubleRangeSliderProps) {
  const [min, setMin] = useState(minValue);
  const [max, setMax] = useState(maxValue);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (value <= max - step) {
      setMin(value);
    }
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (value >= min + step) {
      setMax(value);
    }
  };

  const constrainedRange = maxValue - minValue;
  const leftPercentage = ((min - minValue) / constrainedRange) * 100;
  const rightPercentage = 100 - ((max - minValue) / constrainedRange) * 100;

  // Check if labels are too close
  const areLabelsTooClose =
    Math.abs(leftPercentage - (100 - rightPercentage)) < labelMinimumGap; // Adjust threshold as needed

  return (
    <div className="h-10">
      <div className="h-1 relative rounded-sm bg-[#e1e9f6]">
        <span
          className="h-[100%] absolute rounded-md bg-blue-500"
          style={{
            left: `${leftPercentage}%`,
            right: `${rightPercentage}%`,
          }}
        ></span>
      </div>

      <div className="range-input">
        <input
          type="range"
          value={min}
          min={minValue}
          max={maxValue}
          step={step}
          onChange={handleMinChange}
        />

        <input
          type="range"
          value={max}
          min={minValue}
          max={maxValue}
          step={step}
          onChange={handleMaxChange}
        />
      </div>

      {/* Labels for min and max */}
      <div className="relative w-full -mt-6">
        <div
          className={`absolute text-lg font-bold text-center px-2 py-1 transform -translate-x-1/2 ${
            areLabelsTooClose ? "top-6" : "top-8" // Move up if labels are close
          }`}
          style={{
            left: `${Math.min(leftPercentage + leftLabelExtraLeft, 90)}%`,
          }}
        >
          {min}
        </div>

        <div
          className={`absolute text-lg font-bold text-center px-2 py-1 transform -translate-x-1/2 ${
            areLabelsTooClose ? "top-10" : "top-8" // Move down if labels are close
          }`}
          style={{
            right: `${Math.min(rightPercentage - rightLabelExtraRight, 70)}%`,
          }}
        >
          {max}
        </div>
      </div>
    </div>
  );
}
