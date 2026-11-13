# Site

Use the Node.js version in `website/.node-version` and the Yarn version in
`website/package.json`. From `website/`:

```sh
yarn install --frozen-lockfile --ignore-scripts
yarn prepare
cp .env.example .env.local
yarn dev
```

Open <http://localhost:3000>. Set the Contentful space, environment and Delivery
API token in `.env.local` to display camera images. These values are embedded in
the public static site. Never use a Contentful Management API token here.
Without this configuration, the site builds and displays its image placeholder.
It refreshes the last available image every five minutes.

`@ts-dev-tools/react` supplies Biome, Vitest, commitlint and the React types.
The existing root Biome configuration and site Vitest configuration keep
the project settings. `yarn prepare` installs the development tools and Git
hooks for the site. Next.js still owns the build and development server.

Run `yarn lint:ci`, `yarn test:ci` and `yarn build` before opening a pull request.
CI uses the shared HoverKraft Node.js workflow for lint, tests, coverage and the
production build. The shared linter checks repository automation and site
files; it excludes the separately deployed Raspberry program.

`yarn build` exports the site to `out/`. Deploy that directory to a static host.
For Netlify, use `website` as the base directory, `yarn build` as the build command
and `out` as the publish directory. Keep the Netlify Runtime setting empty: this
static export does not need a Next.js runtime or a Next.js cache build plugin.
GitHub CI uploads the same output for review.
The frontend uses the current Next.js and Material UI browser targets.

The Raspberry capture program and its device configuration are independent of
the site build. Frontend CI does not operate the camera or upload real images.
