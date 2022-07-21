import { lazy } from "react";

const Index = lazy(() => import("../pages/index"));

const routers = [
  {
    path: "/",
    component: Index,
  },
];

export default routers;
