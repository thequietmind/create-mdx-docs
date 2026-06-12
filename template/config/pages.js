import { lazy } from "react";

const HomeMDX = lazy(() => import("@pages/index.mdx"));
const GettingStartedMDX = lazy(() => import("@pages/getting-started.mdx"));

export const pages = [
  {
    name: "Home",
    route: "/",
    component: HomeMDX,
    title: "My Docs — Documentation powered by MDX Docs",
    description: "Documentation site built with MDX Docs",
  },
  {
    name: "Getting Started",
    route: "/getting-started",
    component: GettingStartedMDX,
    title: "Getting Started — My Docs",
    description: "How to create pages and configure your MDX Docs site",
  },
];
