import { ReactNode } from "react";

export interface iRoutesData {
  to: string;
  title?: string;
  element: ReactNode;
  exact?: boolean;
  theme_changer?: any;
}

export type tPropTypes = {
  routesData: iRoutesData[];
  theme_changer?: any;
};
