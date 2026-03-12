# create-mdx-docs

<p>
  <a href="https://github.com/thequietmind/mdx-docs">
    <img src="https://img.shields.io/badge/GitHub-mdx--docs-black?logo=github" height="28">
  </a>
</p>

Scaffold a new [MDX Docs](https://github.com/thequietmind/mdx-docs) site in seconds.

**Demo:** [https://mdxdocs.com/](https://mdxdocs.com/)

**GitHub:** [https://github.com/thequietmind/mdx-docs](https://github.com/thequietmind/mdx-docs)

## Usage

```sh
npx create-mdx-docs@latest my-docs
cd my-docs
npm install
npm run dev
```

This creates a new directory `my-docs/` with a ready-to-run documentation site powered by [`@quietmind/mdx-docs`](https://www.npmjs.com/package/@quietmind/mdx-docs).

## What's included

```
my-docs/
├── pages/
│   ├── index.mdx
│   └── getting-started.mdx
├── config/
│   ├── pages.js
│   └── site.js
├── src/
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

- **`pages/`** — MDX content files, one per page
- **`config/pages.js`** — registers pages and their routes
- **`config/site.js`** — site name and description
- **`vite.config.js`** — pre-configured Vite setup via `createMdxDocsConfig`

## Adding pages

Create an MDX file in `pages/`:

~~~mdx
# My Page

Write **markdown** and use React components inline.
~~~

Register it in `config/pages.js`:

```js
const MyPageMDX = lazy(() => import("@pages/my-page.mdx"));

export const pages = [
  // ...existing pages
  {
    name: "My Page",
    route: "/my-page",
    component: MyPageMDX,
  },
];
```

## License

MIT
