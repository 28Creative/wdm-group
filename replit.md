# Why Design Matters

The marketing and portfolio site for WDM, an architecture firm whose work demonstrates why design matters for human experience.

## Run & Operate

- `pnpm --filter @workspace/wdm run dev` — run the WDM web app (port assigned by workflow)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite + Tailwind CSS (`artifacts/wdm`)
- Router: wouter (centralized in `artifacts/wdm/src/App.tsx` — do not scatter routes)
- API: Express 5 (`artifacts/api-server`)

## Where things live

- Design tokens (colors, type scale): `artifacts/wdm/src/index.css`
- All routes: `artifacts/wdm/src/App.tsx`
- Shared components: `artifacts/wdm/src/components/ui/`
- Page stubs: `artifacts/wdm/src/pages/`
- Brand rhombus: `artifacts/wdm/src/components/brand/Rhombus.tsx`

## Architecture decisions

- **Design tokens as CSS custom properties** — all colors and typography use `var(--color-*)` and `var(--font-*)`. No hardcoded hex/font values in component code.
- **Wouter for routing** — lightweight alternative to React Router; all routes live in a single `App.tsx` file for manageability.
- **Image components are the single source of truth for image rendering** — all `<img>` tags flow through shared components (Card, ImageBand, TeamCard, SectorCard, InsightCard). Add image-related changes there, not inline.

## User preferences

- No emojis in the UI. Use lucide-react for icons.
- No heavy scroll animations, no parallax, no elements moving without user interaction.
- Routing stays in wouter (confirmed decision — not switching to React Router).

## Gotchas

- **Images require manual lazy loading** — there is no Next.js `<Image>` component in Vite. Every `<img>` must include `loading="lazy"` and `decoding="async"`. Both are already defaulted in all shared image components. Use `loading="eager"` only for the primary above-the-fold image on a page.
- Do not run `pnpm dev` at the workspace root — individual artifacts run via workflows.
- Do not add new routes as standalone files; wire them in `App.tsx`.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
