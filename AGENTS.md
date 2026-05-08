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

Copy `.env.local` (not committed) and set:
```
GEMINI_API_KEY=<google-gemini-api-key>
```
Without it the `/api/translate` route falls back gracefully — the app still runs.

## Architecture

Single Next.js 15+ App Router app (no monorepo, no sub-packages).

Key boundaries:
- `app/` — routes, layout, API route (`app/api/translate/route.ts` → Google Gemini)
- `components/` — React client components; `components/ui/` is shadcn/ui (generated, avoid manual edits)
- `lib/` — pure utilities, constants, types, quiz data, translation map
- `@/*` path alias maps to repo root (e.g. `@/lib/utils`, `@/components/navbar`)

**Translation strategy (3-tier, in `components/translation-context.tsx`):**
1. French — default, hardcoded inline
2. en / es / de / ja — static map in `lib/translations.ts` (instant, no network)
3. Any other language — POST `/api/translate` → Gemini; result cached in `localStorage`

## Conventions

- **Types** — centralized in `lib/types.ts`; do not scatter type declarations across components.
- **Constants** — magic strings (section IDs, storage keys, language codes, API routes) live in `lib/constants.ts`.
- **Storage** — always use the `SafeStorage` wrapper from `lib/storage.ts`; never access `localStorage` directly.
- **Language guard** — use `isStaticLanguage(lang)` before indexing `STATIC_TRANSLATIONS`; accessing it with an arbitrary string will crash.
- **Animations** — define Framer Motion animations as named `Variants` in `lib/animations.ts`, never inline. Never use `transition` props directly in JSX; embed transitions inside variant definitions.
- **Server/Client split** — `app/page.tsx` is a thin Server Component wrapper; keep client logic in `components/home-content.tsx`.

## Tooling quirks

- **Tailwind v4** — uses `@theme`/`@utility` at-rules in CSS. VSCode suppresses the false lint warnings via `.vscode/settings.json`. No `tailwind.config.*` file exists; config lives in `app/globals.css`.
- **shadcn/ui** — add components with `npx shadcn add <component>`, **never hand-edit** `components/ui/`. Config in `components.json` (style: "luma").
- `tsconfig.tsbuildinfo` is gitignored; incremental TS builds are local only.
- `next.config.ts` is essentially empty — no custom webpack or image domains.

## Gotchas

- Missing `GEMINI_API_KEY` causes non-static language translations to silently fall back to French — check server logs for API errors.
- Quiz difficulty and progress are intentionally not persisted; `localStorage` is only used for language preference and theme.
- `canvas-confetti` fires on correct quiz answers and perfect scores — this is intentional, not a bug.
- Dark mode is handled by `next-themes` via a `data-theme` attribute; do not implement a manual theme toggle.
