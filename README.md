# dekthaiinchina personal page

A responsive personal webpage built with React, TypeScript, and Vite. It opens
immediately and includes GitHub and email links, light/dark themes, and locally
hosted fonts.

## Page-loading animation

On first render, the wordmark, notice, section label, contact cards, and footer
fade in with a subtle 12px upward movement. Each entrance lasts 480ms, staggered
60ms apart, so the full sequence finishes in 780ms. The CSS-only animation keeps
space reserved for the content and requires no timers or additional dependencies.
Keyboard focus reveals a card immediately, and reduced-motion preferences disable
the animation entirely. Content remains visible when animations are unavailable.

## Development

```sh
npm ci
npm run dev
```

## Validation and production

```sh
npm run lint
npm run build
npm run preview
```

Deploy the generated `dist/` directory. `preview` serves the production build
locally for inspection.

## Project structure

- `src/app.tsx`: page content and links.
- `src/main.tsx`: React entry point and shared stylesheet import.
- `src/index.css`: responsive layout, themes, typography, entrance animations, and hover styles.
- `public/`: locally hosted fonts and the current favicon.

The Vite configuration uses the React plugin without the optional React Compiler;
the current page has no state updates that would benefit from memoization.
