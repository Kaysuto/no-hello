# AGENTS.md

## Commands

```bash
npm run dev       # dev server at localhost:3000
npm run build     # production build (also type-checks via Next.js)
npm run lint      # ESLint (flat config, eslint.config.mjs)
npx tsc           # standalone type-check (noEmit); no dedicated npm script
```

No test runner is configured. No format script (no Prettier/Biome).

## Environment

No environment variables. The site is fully static (no API routes) and is self-hosted on Coolify (`npm run build` / `npm run start`, port 3000).

## Architecture

Single Next.js 16 App Router app (no monorepo, no sub-packages).

Key boundaries:
- `app/` — routes, layout, robots/sitemap
- `components/` — React client components; `components/ui/` is shadcn/ui (generated, avoid manual edits)
- `lib/` — pure utilities, constants, types, quiz data, translation map
- `@/*` path alias maps to repo root (e.g. `@/lib/utils`, `@/components/navbar`)

**Translation strategy (`components/translation-context.tsx`):**
- fr (default) / en / es / de / ja — static map in `lib/translations.ts` (instant, no network)
- Any other language — not handled by the app: `<html lang>` follows the active language so the browser's built-in page translation takes over

## Conventions

- **Types** — centralized in `lib/types.ts`; do not scatter type declarations across components.
- **Constants** — magic strings (section IDs, storage keys, language codes, external links) live in `lib/constants.ts`.
- **Storage** — always use the `SafeStorage` wrapper from `lib/storage.ts`; never access `localStorage` directly.
- **Language guard** — `setLanguage` ignores codes that fail `isStaticLanguage(lang)`; keep that guard before indexing `STATIC_TRANSLATIONS`.
- **Animations** — define Framer Motion animations as named `Variants` in `lib/animations.ts`, never inline. Never use `transition` props directly in JSX; embed transitions inside variant definitions.
- **Server/Client split** — `app/page.tsx` is a thin Server Component wrapper; keep client logic in `components/home-content.tsx`.

## Tooling quirks

- **Tailwind v4** — uses `@theme`/`@utility` at-rules in CSS. VSCode suppresses the false lint warnings via `.vscode/settings.json`. No `tailwind.config.*` file exists; config lives in `app/globals.css`.
- **shadcn/ui** — add components with `npx shadcn add <component>`, **never hand-edit** `components/ui/`. Config in `components.json` (style: "radix-rhea"). Generated components import `cn` from the `cn` package and primitives from `radix-ui`; `@/lib/utils` re-exports the same `cn`, and `app/globals.css` imports `shadcn/tailwind.css` for the `data-open:`/`data-closed:` variants.
- `tsconfig.tsbuildinfo` is gitignored; incremental TS builds are local only.
- `next.config.ts` is essentially empty — no custom webpack or image domains.

## Gotchas

- `lucide-react` 1.x has no brand icons: the GitHub logo is `components/github-icon.tsx`.
- Quiz difficulty and progress are intentionally not persisted; `localStorage` is only used for language preference and theme.
- `canvas-confetti` fires on correct quiz answers and perfect scores — this is intentional, not a bug.
- Dark mode is handled by `next-themes` via the `class` attribute (`.dark`); do not implement a manual theme toggle.
