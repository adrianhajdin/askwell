# Askwell

An AI support chat widget for any website. See `docs/project.md` for what we build and `docs/plan.md` for the build order.

## Layout

| Path | What |
| --- | --- |
| `apps/web` | Next.js app: landing, dashboard, `/embed`, `/api` |
| `apps/widget` | Vanilla TS loader, bundled to `apps/widget/dist/widget.js` (esbuild, 5 kb budget) |
| `packages/shared` | The contract: types, API shapes, plan limits |
| `packages/db` | Generated Supabase types + pglite test helper (Phase 1) |

## Setup

Node 24 (`.nvmrc`) and pnpm (version pinned in `package.json` `packageManager`).

```bash
pnpm install
cp .env.example .env   # fill in values; never commit .env
pnpm dev               # http://localhost:3000
```

## Commands

| Command | Does |
| --- | --- |
| `pnpm dev` | Run the web app and rebuild the widget on change |
| `pnpm typecheck` | TypeScript across the workspace |
| `pnpm lint` | ESLint across the workspace |
| `pnpm test` | Vitest across the workspace |
| `pnpm build` | Build the widget and the web app |
| `pnpm db:types` | Regenerate `packages/db/types.ts` (added in Phase 1) |

## Vercel

| Setting | Value |
| --- | --- |
| Root Directory | `apps/web` ("Include files outside the root directory" on) |
| Framework | Next.js |
| Install Command | default (`pnpm install`, run at the repo root) |
| Build Command | default (`next build`) |
| Node.js | 24.x (from `engines`) |
| Production | Automatic promotion off |
