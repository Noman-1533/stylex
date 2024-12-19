import { PropsWithChildren, ReactNode } from "react";

export interface ExpansionPanelProps extends PropsWithChildren {
  panelName: string;
  panelNameStyle?: string;
  toggleIcon: ReactNode;
  nonToggleIcon: ReactNode;
}
