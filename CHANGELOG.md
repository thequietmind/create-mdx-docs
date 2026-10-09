# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.0] - 2026-10-09

### Fixed

- New projects install with npm again. The template's `vite` and
  `@vitejs/plugin-react` ranges were older than what `@quietmind/mdx-docs`
  requires, so `npm install` failed with ERESOLVE. The template's dependencies
  now match its peer ranges
- New projects build again. The prerender step looks for `main.jsx` at the
  project root, but the template keeps it in `src/`, so `vite.config.js` now
  passes `entry: "src/main.jsx"`

### Changed

- New projects start on Material UI 9
- create-mdx-docs and the projects it generates now require Node
  `^20.19.0 || >=22.12.0`, matching Vite 8. Projects generated on older Node
  versions already failed to build; this states the requirement up front
- Template code and the README's code samples no longer use semicolons

### Notes

- 1.1.1 was tagged but never published to npm. 1.2.0 includes its changes

## [1.1.1] - 2026-06-22

### Fixed

- Getting Started guide incorrectly stated that Material UI components could be
  used without importing. The MDX provider only maps HTML elements, so an
  un-imported component fails to render; the guide now shows importing MUI
  components from `@mui/material`

### Added

- Example in the Getting Started guide showing how to import your own components
  into an MDX page with a relative path

## [1.1.0] - 2026-06-19

### Added

- Open Graph (`og:title`, `og:description`, `og:type`) and Twitter
  (`twitter:card`, `twitter:title`, `twitter:description`) metadata to the
  default `index.html` for richer link previews when a generated site is shared.
  Titles and descriptions reuse the existing `%SITE_NAME%` / `%SITE_DESCRIPTION%`
  placeholders, which `@quietmind/mdx-docs` resolves at build time and refines
  per page during prerendering
- `theme-color` meta tag set to `#121212`, matching the framework's default dark
  theme background

### Removed

- Default Vite favicon (`vite.svg`) link from `index.html`, so generated sites no
  longer ship with Vite branding

### Notes

- The `generator` meta tag and framework version are injected automatically by
  `@quietmind/mdx-docs` at build time, so they are intentionally not duplicated
  in the template
- Requires `@quietmind/mdx-docs` >= 1.4.1 for the new `og:` / `twitter:`
  placeholders to resolve in the dev server and in `prerender: false` builds; the
  template pins `latest`, so a fresh install picks this up automatically
