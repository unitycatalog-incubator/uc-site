// @ts-check
import netlify from "@astrojs/netlify";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import { astroConfig } from "astro-config";
import { plugin as astroOrbit } from "astro-orbit";
import favicons from "astro-favicons";
import { searchPlugin } from "./src/lib/searchPlugin";

const config = {
  site: "https://uc-site-beta.netlify.app/",
  redirects: {
    "/blog": "/blogs",
  },
  integrations: [
    astroOrbit(),
    astroConfig({
      name: "config",
      config: {
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
              color: "white",
            },
            {
              label: "Join Slack",
              href: "https://go.unitycatalog.io/slack",
              color: "secondary",
            },
            {
              label: "Join LinkedIn",
              href: "https://www.linkedin.com/company/unitycatalog/",
              color: "primary",
            },
          ],
          footer: [
            { label: "Features", href: "/#features" },
            { label: "Partner Ecosystem", href: "/#partner-ecosystem" },
            { label: "API", href: "https://go.unitycatalog.io/apidocs" },
            { label: "Documentation", href: "https://go.unitycatalog.io/docs" },
          ],
        },
      },
    }),
    favicons({
      name: "Unity Catalog",
      short_name: "Unity Catalog",
    }),
    sitemap(),
    searchPlugin(),
  ],
};

export default defineConfig(
  import.meta.env.NETLIFY === "true"
    ? { ...config, adapter: netlify() }
    : config,
);
