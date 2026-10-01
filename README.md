# Urology Care Center — Static Website

A modern, responsive static website for a urology practice built with **React 18**, **Vite**, and **React Router**. Performance-first with memoized components, code splitting, and a clean modular architecture.

## Tech Stack

- **Framework:** React 18 (Strict Mode)
- **Build Tool:** Vite 5
- **Routing:** React Router 6
- **Styling:** Hand-crafted CSS Modules + Global CSS (no CSS framework required)
- **Language:** JavaScript (ES Modules)

## Project Structure

```
Urology/
├── public/
│   └── favicon.svg                 # Static assets served as-is
├── src/
│   ├── assets/                     # Images, icons, OG graphics
│   ├── components/
│   │   ├── common/                 # Reusable: Hero, Section, ServiceCard…
│   │   │   ├── Component.jsx
│   │   │   └── Component.css
│   │   └── layout/                 # Navbar, Footer, Layout wrappers
│   │       ├── Component.jsx
│   │       └── Component.css
│   ├── config/
│   │   └── site.js                 # Site metadata, nav, contact info
│   ├── hooks/                      # Custom React hooks
│   │   ├── useMediaQuery.js
│   │   └── useScrollSpy.js
│   ├── pages/                      # Route-level pages
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx
│   ├── styles/
│   │   └── global.css              # Design tokens, resets, utilities
│   ├── utils/
│   │   └── helpers.js              # Pure helpers: cn, validation, format…
│   ├── App.jsx                     # Routes + shell layout
│   └── main.jsx                    # React entry + BrowserRouter
├── .gitignore
├── index.html                      # Vite HTML entry
├── package.json
└── vite.config.js
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the dev server

```bash
npm run dev
```

Opens at http://localhost:3000 with HMR.

### 3. Build for production

```bash
npm run build
```

Outputs a fully static site to `dist/`.

### 4. Preview the production build

```bash
npm run preview
```

## Conventions

- **Component naming:** PascalCase, one component per file, co-located CSS.
- **Memoization:** Export default components wrapped with `memo()` when pure.
- **Styling:** Keep design tokens (colors, spacing, fonts) in `styles/global.css`.
- **Routing:** Add new pages in `src/pages/` and register them in `App.jsx`.
- **Config:** Update site-wide strings in `src/config/site.js`.

## Adding a New Page

1. Create `src/pages/MyPage.jsx`
2. Import `Section` from `../components/common/Section.jsx` for consistent spacing
3. Register the route in `src/App.jsx`
4. Add a nav link entry (if desired) in `src/components/layout/Navbar.jsx` and `src/config/site.js`

## Performance Notes

- Vendor code (`react`, `react-dom`, `react-router-dom`) is split into a separate chunk via `vite.config.js` `manualChunks` for better caching.
- Layout components are memoized to avoid unnecessary re-renders on route changes.
- CSS is small and hand-authored; no runtime styling libraries are used.
- Fonts are preconnected in `index.html` for faster first paint.
