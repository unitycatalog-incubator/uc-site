// @ts-check
import { defineConfig } from "astro/config";
import favicons from "astro-favicons";
import { ucTheme, searchPlugin } from "uc-theme";

import netlify from "@astrojs/netlify";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://uc-site-beta.netlify.app/",
  redirects: {
    "/blog": "/blogs",
  },
  adapter: netlify(),
  integrations: [
    favicons({
      name: "Unity Catalog",
      short_name: "Unity Catalog",
    }),
    ucTheme({
      siteTitle: "Unity Catalog",
      defaultImage: "/images/default-image.jpg",
      menus: {
        header: [
          { label: "Features", url: "/#features" },
          { label: "Partner Ecosystem", url: "/#partner-ecosystem" },
          { label: "API", url: "https://go.unitycatalog.io/apidocs" },
          { label: "Documentation", url: "https://go.unitycatalog.io/docs" },
          { label: "Blogs", url: "/blogs" },
        ],
        headerCtas: [
          {
            label: "View GitHub",
            url: "https://github.com/unitycatalog/unitycatalog",
            variant: "secondary",
          },
          {
            label: "Join Slack",
            url: "https://go.unitycatalog.io/slack",
            variant: "primary",
          },
          {
            label: "Join LinkedIn",
            url: "https://www.linkedin.com/company/unitycatalog/",
            variant: "tertiary",
          },
        ],
        footer: [
          { label: "Features", url: "/#features" },
          { label: "Partner Ecosystem", url: "/#partner-ecosystem" },
          { label: "API", url: "https://go.unitycatalog.io/apidocs" },
          { label: "Documentation", url: "https://go.unitycatalog.io/docs" },
        ],
      },
    }),
    searchPlugin(),
    sitemap(),
  ],
});
