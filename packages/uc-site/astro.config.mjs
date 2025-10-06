// @ts-check
import { defineConfig } from "astro/config";
import favicons from "astro-favicons";
import { ucTheme } from "uc-theme";
import netlify from "@astrojs/netlify";

const config = {
  site: "https://uc-site-beta.netlify.app/",
  redirects: {
    "/blog": "/blogs",
  },
  integrations: [
    ucTheme({
      siteTitle: "Unity Catalog",
      defaultImage: "/images/default-image.jpg",
      menus: {
        header: [
          { label: "Features", href: "/#features" },
          { label: "Partner Ecosystem", href: "/#partner-ecosystem" },
          { label: "API", href: "https://go.unitycatalog.io/apidocs" },
          { label: "Documentation", href: "https://go.unitycatalog.io/docs" },
          { label: "Blogs", href: "/blogs" },
        ],
        headerCtas: [
          {
            label: "View GitHub",
            href: "https://github.com/unitycatalog/unitycatalog",
            color: "secondary",
          },
          {
            label: "Join Slack",
            href: "https://go.unitycatalog.io/slack",
            color: "primary",
          },
          {
            label: "Join LinkedIn",
            href: "https://www.linkedin.com/company/unitycatalog/",
            color: "tertiary",
          },
        ],
        footer: [
          { label: "Features", href: "/#features" },
          { label: "Partner Ecosystem", href: "/#partner-ecosystem" },
          { label: "API", href: "https://go.unitycatalog.io/apidocs" },
          { label: "Documentation", href: "https://go.unitycatalog.io/docs" },
        ],
      },
    }),
    favicons({
      name: "Unity Catalog",
      short_name: "Unity Catalog",
    }),
  ],
};

export default defineConfig(
  import.meta.env.NETLIFY === "true"
    ? { ...config, adapter: netlify() }
    : config,
);
