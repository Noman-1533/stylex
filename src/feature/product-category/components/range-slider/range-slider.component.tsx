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

// import { useState } from "react";
// import "./range-slider.css";
// import { DoubleRangeSliderProps } from "../../models";

// export default function DoubleRangeSlider({
//   minValue,
//   maxValue,
//   step,
//   leftLabelExtraLeft = 0.5,
//   rightLabelExtraRight = 1,
//   labelMinimumGap = 10,
// }: DoubleRangeSliderProps) {
//   const [min, setMin] = useState(minValue);
//   const [max, setMax] = useState(maxValue);

//   const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = parseInt(e.target.value);
//     if (value <= max - step) {
//       setMin(value);
//     }
//   };

//   const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = parseInt(e.target.value);
//     if (value >= min + step) {
//       setMax(value);
//     }
//   };

//   const constrainedRange = maxValue - minValue;
//   const leftPercentage = ((min - minValue) / constrainedRange) * 100;
//   const rightPercentage = 100 - ((max - minValue) / constrainedRange) * 100;

//   // Check if labels are too close
//   const areLabelsTooClose =
//     Math.abs(leftPercentage - (100 - rightPercentage)) < labelMinimumGap;

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
//           className={`absolute text-lg font-bold text-center px-2 py-1 transform -translate-x-1/2 ${
//             areLabelsTooClose ? "top-6" : "top-8"
//           }`}
//           style={{
//             left: `${Math.min(leftPercentage + leftLabelExtraLeft, 90)}%`,
//           }}
//         >
//           {min}
//         </div>

//         <div
//           className={`absolute text-lg font-bold text-center px-2 py-1 transform -translate-x-1/2 ${
//             areLabelsTooClose ? "top-10" : "top-8"
//           }`}
//           style={{
//             right: `${Math.min(rightPercentage - rightLabelExtraRight, 70)}%`,
//           }}
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
  selectedMaximum,
  selectedMinimum,
  step,
  labelMinimumGap = 30, // Minimum gap between labels in pixels
  onRangeChange

}: DoubleRangeSliderProps) {
  const [min, setMin] = useState(selectedMinimum?selectedMinimum:minValue);
  const [max, setMax] = useState(selectedMaximum?selectedMaximum:maxValue);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (value <= max - step) {
      setMin(value);
      onRangeChange?.(value,max);
    }
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (value >= min + step) {
      setMax(value);
      onRangeChange?.(min,value);
    }
  };

  const constrainedRange = maxValue - minValue;
  const leftPercentage = ((min - minValue) / constrainedRange) * 100;
  const rightPercentage = ((max - minValue) / constrainedRange) * 100;

  // Calculate label positions in pixels
  const trackWidth = 300; // Assume the slider track width is 300px
  const leftLabelPos = (leftPercentage / 100) * trackWidth;
  const rightLabelPos = (rightPercentage / 100) * trackWidth;

  // Ensure labels maintain the minimum gap
  const adjustedRightLabelPos = Math.max(
    rightLabelPos,
    leftLabelPos + labelMinimumGap
  );

  return (
    <div className="h-10 w-[320px]">
      <div className="h-1 relative rounded-sm bg-[#e1e9f6]">
        <span
          className="h-[100%] absolute rounded-md bg-blue-500"
          style={{
            left: `${leftPercentage}%`,
            right: `${100 - rightPercentage}%`,
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
      <div className="relative w-full -mt-6 top-6">
        <div
          className="absolute text-lg font-bold text-center px-2 py-1 transform -translate-x-1/2"
          style={{
            left: `${Math.min(leftLabelPos, trackWidth - labelMinimumGap)}px`,
          }}
        >
          {min}
        </div>

        <div
          className="absolute text-lg font-bold text-center px-2 py-1 transform -translate-x-1/2"
          style={{
            left: `${Math.min(adjustedRightLabelPos, trackWidth)}px`,
          }}
        >
          {max}
        </div>
      </div>
    </div>
  );
}
