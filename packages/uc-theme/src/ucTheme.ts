import type { AstroIntegration } from "astro";
import { themePlugin } from "./themePlugin";
import type { ThemeConfig } from "./types";

export const ucTheme = (config: ThemeConfig): AstroIntegration[] => {
  return [themePlugin(config)];
};
