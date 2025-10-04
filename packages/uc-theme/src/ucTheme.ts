import sitemap from "@astrojs/sitemap";
import type { AstroIntegration } from "astro";
import { themePlugin } from "./themePlugin";
import type { ThemeConfig } from "./types";
import { searchPlugin } from "./searchPlugin";

export const ucTheme = (config: ThemeConfig): AstroIntegration[] => {
  return [themePlugin(config), sitemap(), searchPlugin()];
};
