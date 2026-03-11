import { lazy } from "react";

const HomeMDX = lazy(() => import("@pages/index.mdx"));
const GettingStartedMDX = lazy(() => import("@pages/getting-started.mdx"));

export const pages = [
  {
    name: "Home",
    route: "/",
    component: HomeMDX,
    isDefault: true,
  },
  {
    name: "Getting Started",
    route: "/getting-started",
    component: GettingStartedMDX,
  },
];
