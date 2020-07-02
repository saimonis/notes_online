import { ReactNode } from "react";

import Main from "../pages/main";
import Stats from "../pages/stats";

interface Obj {
  to: string;
  title: string;
  element: ReactNode;
  exact?: boolean;
}

const routesData: Obj[] = [
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
  },
];

export default routesData;
