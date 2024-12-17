# pnpm + no-build libs

A demo to show when we're using Vite, we might not need to build packages to consume within a monorepo.

## Running

First, install the dependencies with `pnpm`:

```bash
pnpm install
```

Now, you can spin the website:

```bash
pnpm run dev
```

The react-router app will be hosted at [http://localhost:5173/](http://localhost:5173/).

If you open, the `apps/website/app/routes/home.tsx` file, you'll see a `Button` component is being imported and rendered with no error:

![rendering](./assets/rendering.png)

This ugly button is coming directly from [`./packages/ui/src/button.tsx`]('packages/ui/src/button.tsx').

Note that there's no build step set. The only requirement is to have an entry point (`packages/ui/src/index.ts`) that exports the entire lib/package code so we can import, in the website, code from this package:

```tsx
import { Button } from "@org/ui";
```

If you change the `Button` code for example, this is automatically taken by Vite and the server is refreshed.
