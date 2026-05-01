# Muhoko

A modern web application built with React, TypeScript, and Vite — deployed at [muhoko.org](https://muhoko.org) via cPanel.

## Tech Stack

- **React 18** — UI component library
- **TypeScript** — Type-safe JavaScript
- **Vite** — Fast build tool with Hot Module Replacement (HMR)

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

The output will be in the `dist/` folder, ready for deployment.

## Deployment

This site is hosted on a **cPanel server** at [muhoko.org](https://muhoko.org).

To deploy a new build:

1. Run `npm run build` to generate the `dist/` folder.
2. Log in to cPanel and open **File Manager**.
3. Navigate to `public_html/` (or your target subdirectory).
4. Upload the contents of `dist/` — **not the folder itself, just its contents**.
5. Ensure `index.html` is at the root of `public_html/`.

> **Note:** If you're using client-side routing (e.g. React Router), add a `.htaccess` file to `public_html/` with the following content to handle SPA routing:
>
> ```apache
> Options -MultiViews
> RewriteEngine On
> RewriteCond %{REQUEST_FILENAME} !-f
> RewriteRule ^ index.html [QSA,L]
> ```

## ESLint Configuration

For production-grade type-aware linting, update `eslint.config.js`:

```js
import react from 'eslint-plugin-react'
import tseslint from 'typescript-eslint'

export default tseslint.config({
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
  settings: { react: { version: '18.3' } },
  plugins: { react },
  extends: [
    ...tseslint.configs.recommendedTypeChecked,
  ],
  rules: {
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

## Vite Plugins

Two official React plugins are available — pick one:

| Plugin | Transpiler | Notes |
|---|---|---|
| `@vitejs/plugin-react` | Babel | Default, widely compatible |
| `@vitejs/plugin-react-swc` | SWC | Faster builds |

## License

© Muhoko. All rights reserved.
