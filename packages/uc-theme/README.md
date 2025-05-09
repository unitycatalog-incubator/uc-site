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

## Configuration

| Property           | Type       | Required | Description                                                   |
| ------------------ | ---------- | -------- | ------------------------------------------------------------- |
| `siteTitle`        | `string`   | Yes      | Site title                                                    |
| `defaultImage`     | `string`   | Yes      | Default image to display on pages which don't have an `image` |
| `menus`            | `object[]` | Yes      | Site menus                                                    |
| `menus.header`     | `object[]` | Yes      | Header menu                                                   |
| `menus.headerCtas` | `object[]` | Yes      | Header menu - CTAs                                            |
| `menus.footer`     | `object[]` | Yes      | Footer menu                                                   |

## Modules

The `uc-theme` package exports multiple modules.

### Components

The `uc-theme/components` module includes different components for your pages.

```astro
---
import { PageLayout } from "uc-theme/components";
---

<PageLayout title="My awesome page!">
  <h1>My awesome page!</h1>
  <p>Lorem ipsum dolor sit amet...</p>
</PageLayout>
```

### Blogs

The `uc-theme/blogs` module includes utilities for working with blogs.

We expect blogs to follow the file naming convention: `YYYY-MM-DD-*`. This gives us two benefits:

1. The published date is built into the filename.
2. This format allows us to keep the blogs directory organized by publish date.

#### How to use

In your `content.config.ts` file:

```ts
import { blogLoader } from "uc-theme/blog";

const blog = defineCollection({
  loader: blogLoader({
    pattern: "**/index.md",
    base: "./src/content/blog",
  }),
});

export const collections = { blog };
```

This will ensure that blogs are imported properly using the proper naming convention.

Then, in your pages:

```ts
import { getBlogPublishedAt } from "uc-theme/blog";

// Look up post named 2025-05-08-hello-world
const post = await getEntry("blog", "hello-world");

// this will be "hello-world"
console.log(post.id);

// this will be a Date set to 2025-05-08
const publishedAt = getBlogPublishedAt(post);
```
