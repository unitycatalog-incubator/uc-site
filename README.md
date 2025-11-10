# uc-site

Unity Catalog website

## Getting started

Install dependencies with [pnpm](https://pnpm.io/) and start the [Astro](https://astro.build) site in development mode:

```sh
pnpm install
pnpm dev
```

### Building for production

You can run `build` then run `preview` to build and serve a production build of the site locally:

```sh
pnpm build
pnpm preview
```

### Updating production

Changes merged to the `main` git branch automatically deploy to https://uc-site-beta.netlify.app/

## Upgrading dependencies

It's a best practice to make sure that our dependencies are always up to date. You can run `scripts/upgrade-dependencies` to automatically install upgrades across all packages.

Do note that you will still need to verify that things work as expected.
