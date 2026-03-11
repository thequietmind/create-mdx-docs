import { createApp } from "@quietmind/mdx-docs";
import "@quietmind/mdx-docs/index.css";
import { pages } from "../config/pages.js";
import { site } from "../config/site.js";

createApp({ pages, site });
