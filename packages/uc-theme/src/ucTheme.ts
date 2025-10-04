import sitemap from "@astrojs/sitemap";
import type { AstroIntegration } from "astro";
import favicons from "astro-favicons";
import { themePlugin } from "./themePlugin";
import type { ThemeConfig } from "./types";
import { searchPlugin } from "./searchPlugin";

export const ucTheme = (config: ThemeConfig): AstroIntegration[] => {
  return [
    themePlugin(config),
    favicons({
      name: config.siteTitle,
      short_name: config.siteTitle,
    }),
    sitemap(),
    searchPlugin(),
  ];
};
