# uc-site

Unity Catalog website

## Getting started

Install dependencies with [pnpm](https://pnpm.io/) and start the [Astro](https://astro.build) site in development mode:

```sh
pnpm install
pnpm --filter uc-site dev
```

### Building for production

You can run `build` then run `preview` to build and serve a production build of the site locally:

```sh
pnpm --filter uc-site build
pnpm --filter uc-site preview
```

### Updating production

Changes merged to the `main` git branch automatically deploy to https://uc-site-beta.netlify.app/
