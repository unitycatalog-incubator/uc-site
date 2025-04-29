# uc-theme

The Astro theme for unitycatalog.io

## Install

```
$ pnpm install uc-theme
```

Then, add the `ucTheme` plugin to your site's `astro.config.mjs` file:

```ts
import { defineConfig } from "astro/config";
import { ucTheme } from "uc-theme";

export default defineConfig({
  site: "https://example.com",
  integrations: [
    ucTheme({
      siteTitle: "Unity Catalog",
      defaultImage: "/images/default-image.jpg",
    }),
  ],
});
```

## Usage

Import components found in `/src/components`:

```astro
---
import PageLayout from "uc-theme/components/PageLayout.astro";
---

<PageLayout title="My awesome page!">
  <h1>My awesome page!</h1>
  <p>Lorem ipsum dolor sit amet...</p>
</PageLayout>
```

## Configuration

| Property       | Type     | Required | Description                                                    |
| -------------- | -------- | -------- | -------------------------------------------------------------- |
| `siteTitle`    | `string` | Yes      | Site title.                                                    |
| `defaultImage` | `string` | Yes      | Default image to display on pages which don't have an `image`. |
