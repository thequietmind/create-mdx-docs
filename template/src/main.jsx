import { createApp } from "@quietmind/mdx-docs";
// import { themes } from "@quietmind/mdx-docs";
import "@quietmind/mdx-docs/index.css";
import { pages } from "../config/pages.js";
import { site } from "../config/site.js";

// Optional: customize your site's theme
//
// Simple — set a brand color and font:
//   createApp({ pages, site, theme: { primaryColor: '#6200ea', fontFamily: '"Inter", sans-serif' } });
//
// Use a built-in preset:
//   createApp({ pages, site, theme: themes.ocean });
//   Available presets: themes.ocean, themes.forest, themes.rose
//
// Advanced — per-mode MUI palette overrides:
//   createApp({ pages, site, theme: {
//     primaryColor: '#6200ea',
//     light: { palette: { background: { default: '#f0f4f8' } } },
//     dark: { palette: { primary: { main: '#bb86fc' } } },
//   }});

createApp({ pages, site });
