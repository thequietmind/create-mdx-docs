import { defineConfig } from "vite";
import { createMdxDocsConfig } from "@quietmind/mdx-docs/vite";
import { site } from "./config/site.js";

export default defineConfig(
  createMdxDocsConfig({ rootDir: import.meta.dirname, site })
);
