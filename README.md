# Portfolio

This repository contains a personal portfolio built with modern web technologies.

## Tech Stack

- **Framework:** React 18 (with TypeScript)
- **Bundler / Dev Server:** Vite
- **Styling:** Tailwind CSS (with `@tailwindcss/vite` plugin) and custom utility components
- **Component Library & UI primitives:** Radix UI (various `@radix-ui/react-*` packages)
- **Animation:** `motion` (Motion One) plus CSS transitions
- **Icons:** `lucide-react` and `simple-icons`
- **Routing:** `react-router` (browser router)
- **Forms & utilities:** `react-hook-form`, `clsx`, `class-variance-authority`, etc.
- **Data visualization:** `recharts`, `react-day-picker`, `react-slick`, `embla-carousel-react`
- **Drag & drop:** `react-dnd`
- **Misc:** `next-themes` for theme switching, `vaul` for state management, `sonner` for notifications, `tw-animate-css` for extra animations, `input-otp`, `react-responsive-masonry`, etc.
- **Languages:** TypeScript + JSX/TSX


## Python

A Python virtual environment (`venva/` or `venv/`) is included but ignored by git and not required for the front‑end. Remove it if you don't need it.

## Getting Started

1. **Install dependencies** (npm, pnpm or yarn):
   ```bash
   npm install
   # or pnpm install
   # or yarn
   ```

2. **Development**
   ```bash
   npm run dev
   ```
   Starts the Vite dev server (typically at `http://localhost:5173`).

3. **Build for production**
   ```bash
   npm run build
   ```
   Output goes to `dist/`.

4. **Preview production build**
   ```bash
   npm run preview
   ```

## Environment Variables

- Store sensitive values in a `.env` file at the project root.
- Client-visible variables must be prefixed with `VITE_`.
- `.gitignore` already excludes `.env*` files.

## Project Structure

```
src/
  main.tsx          # entry point
  app/
    components/     # shared UI components
    pages/          # routeable page components (Home, About, Projects, ...)
    styles/         # css/tailwind files
  ...
```

Routing is configured in `src/app/routes.ts`.

## Notes

- Tailwind configuration lives in `src/app/styles/` and the root CSS files (`index.css`, `theme.css`).
- The `guidelines/` directory contains internal documentation and design notes.

## Vercel deployment

https://pangtengg.vercel.app/

