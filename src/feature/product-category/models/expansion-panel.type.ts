import { PropsWithChildren, ReactNode } from "react";

export interface ExpansionPanelProps extends PropsWithChildren {
  panelName: string;
  panelNameStyle?: string;
  childJustify?: "center" | "start" | "end";
  toggleIcon: ReactNode;
  nonToggleIcon: ReactNode;
}
