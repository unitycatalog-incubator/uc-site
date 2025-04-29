import type { AstroIntegration } from "astro";
import { themePlugin } from "./themePlugin";

export const ucTheme = (): AstroIntegration[] => {
  return [themePlugin()];
};
