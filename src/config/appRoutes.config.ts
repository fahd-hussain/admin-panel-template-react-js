import { lazy } from "react";
import { RouteType } from "../type/route.types";

const appRoutes: Array<RouteType> = [

  {
    id: "dashboard",
    title: "Dashboard",
    type: "item",
    path: "/dashboard",
    Component: lazy(() => import('../page/Dashboard').then()),
  },
];

export default appRoutes;
