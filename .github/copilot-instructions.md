# Repo Guide for AI Coding Agents

This file contains concise, repo-specific guidance to help AI coding agents be immediately productive.

High level
- **Monorepo fullstack**: `server/` (Express + Drizzle ORM + build-bundled server), `client/` (React + Vite), and `shared/` (zod schemas, route definitions). The server serves the client in production from the built `dist` folder.
- **Dev vs Prod**: `npm run dev` runs `tsx server/index.ts` which mounts Vite in middleware mode (see `server/vite.ts`) for HMR. `npm run build` runs `script/build.ts` which runs `vite build` then `esbuild` to produce `dist/index.cjs` and client assets in `dist/public`.

Key files & patterns
- `server/index.ts`: Express entrypoint. Uses `setupVite` in development and `serveStatic` in production. Listens on `process.env.PORT || 5000` on `0.0.0.0`.
- `server/vite.ts`: Vite middlewareMode setup; HMR path `/vite-hmr`. In dev the server returns transformed `index.html` from `client/index.html`.
- `server/routes.ts` and `server/storage.ts`: API routes and storage implementation. Routes use route descriptors from `shared/routes.ts` and validate with zod schemas from `shared/schema.ts`.
- `shared/routes.ts` & `shared/schema.ts`: canonical API shapes. Use these files when adding routes or modifying contracts between client & server.
- `client/src/lib/queryClient.ts`: central `fetch` wrapper and `react-query` defaults. Many components rely on `queryClient`'s `getQueryFn` conventions (queryKey is a URL string or array joined into a URL).
- `script/build.ts`: orchestrates production build. Important: it bundles server with `esbuild` and treats many deps as externals except an allowlist—if you add a new native dependency required at runtime, ensure the bundle/external strategy still works.

Environment & deployment
- Required for runtime: `PORT` (defaults to `5000`), `DATABASE_URL` (required by `server/db.ts`), SMTP: `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, and optionally `EMAIL_TO` (used in `server/routes.ts`).
- Dockerfile + `start.sh`: production image runs `npm run build` in builder stage and copies `dist` into the final image. `start.sh` runs `npm run db:push` (drizzle-kit) before starting `npm start`.
- DB migrations: use `npm run db:push` (drizzle-kit). The code expects `DATABASE_URL` to be set when running migrations.

Coding conventions & small rules
- Use `@` alias to import client code (maps to `client/src`) and `@shared` to import shared code. See `vite.config.ts` resolve.alias.
- API routes should be defined in `shared/routes.ts` (path, method, input zod schema) and implemented in `server/routes.ts` using `api.*` descriptors. When adding a new endpoint, add the zod schema to `shared/schema.ts` and a route descriptor to `shared/routes.ts`.
- Server uses `express.json({ verify: ... })` to capture `rawBody` for potential signing/validation. Preserve that middleware when changing JSON handling.
- Client `fetch` usage often relies on `credentials: 'include'` (see `client/src/lib/queryClient.ts`)—beware CORS and session behavior if you change auth.

Troubleshooting tips (practical, reproducible)
- Local dev: `npm run dev` starts the server and mounts Vite. Open http://localhost:5000. If HMR fails, confirm `NODE_ENV` is not `production` and `/vite-hmr` path is reachable.
- Production build: `npm run build` → the client is emitted to `dist/public` and server bundle to `dist/index.cjs`. The Dockerfile copies `/app/dist` into container; production runtime expects static files to be available in the same `dist` tree.
- Database missing: server startup throws if `DATABASE_URL` is not set. For local testing you can set a local Postgres URL or mock storage (the storage abstraction is `IStorage` in `server/storage.ts`).

Where to look when changing things
- UI/routing: `client/src/App.tsx`, `client/src/pages/*`, `client/src/components/*`.
- API contract: `shared/routes.ts`, `shared/schema.ts`.
- Server behavior and middleware: `server/index.ts`, `server/vite.ts`, `server/static.ts`.
- Build & deployment: `script/build.ts`, `Dockerfile`, `start.sh`.

Examples (copyable)
- Run dev server: `npm run dev` (root)
- Build for production: `npm run build` then `npm start` or use Dockerfile
- Run migrations: `npm run db:push` (ensure `DATABASE_URL` is set)

Notes for AI agents
- Prefer modifying or extending `shared/schema.ts` + `shared/routes.ts` for new endpoints so client/server remain in sync.
- When editing server code, be mindful of bundling: `script/build.ts` creates a production bundle; file system paths and `__dirname` resolve differently once bundled (server expects static assets under the bundle's `public` directory).
- Avoid changing the Vite middleware setup unless you understand `middlewareMode` and HMR wiring in `server/vite.ts`.

If anything here is unclear or you'd like this expanded (examples, more file cross-references, or a check-list for common PRs), tell me which section to refine.
