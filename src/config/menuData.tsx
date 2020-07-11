import Main from "../pages/main";
import Stats from "../pages/stats";

import { iRoutesData } from "../types";

const routesData: iRoutesData[] = [
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
