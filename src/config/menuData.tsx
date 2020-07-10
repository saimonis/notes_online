import { ReactNode } from "react";

import Main from "../pages/main";
import Stats from "../pages/stats";

interface IRoutesData {
  to: string;
  title: string;
  element: ReactNode;
  exact?: boolean;
}

const routesData: IRoutesData[] = [
  {
    to: "/",
    title: "Main",
    element: Main,
    exact: true,
  },
  {
    to: "/stats",
    title: "Stats",
    element: Stats,
    exact: true,
  },
];

export default routesData;
