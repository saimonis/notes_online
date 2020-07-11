import { ReactNode } from "react";

export interface iRoutesData {
  to: string;
  title?: string;
  element: ReactNode;
  exact?: boolean;
}

export type tPropTypes = {
  routesData: iRoutesData[];
  children?: never;
};
