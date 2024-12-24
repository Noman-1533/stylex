export interface DoubleRangeSliderProps {
  minValue: number;
  maxValue: number;
  selectedMinimum?: number;
  selectedMaximum?: number;
  step: number;
  leftLabelExtraLeft?: number;
  rightLabelExtraRight?: number;
  // leftLabelGap?: number;
  // rightLabelGap?: number;
  labelMinimumGap?: number;
  onRangeChange?: (min: number, max: number) => void;
}
