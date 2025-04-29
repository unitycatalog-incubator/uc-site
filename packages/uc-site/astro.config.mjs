// @ts-check
import { defineConfig } from "astro/config";
import { ucTheme } from "uc-theme";

export default defineConfig({
  site: "https://uc-site-beta.netlify.app/",
  integrations: [
    ucTheme({
      siteTitle: "Unity Catalog",
      defaultImage: "/images/default-image.jpg",
    }),
  ],
});
