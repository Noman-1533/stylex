import React from "react";

export interface ProductCounterProps {
  padding?: string;
  count: number;
  setCount?: React.Dispatch<React.SetStateAction<number>>;
  onUpdate?: (id: number, value: number) => void;
  id?: number;
}
