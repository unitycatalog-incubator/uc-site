import type { AstroIntegration } from "astro";
import tailwindcss from "@tailwindcss/vite";
import type { ThemeConfig } from "./types";
import { makeViteVirtualImportPlugin } from "./utils/makeViteVirtualImportPlugin";

export const themePlugin = (config: ThemeConfig): AstroIntegration => {
  return {
    name: "uc-theme",
    hooks: {
      "astro:config:setup": ({ updateConfig }) => {
        // Expose theme config as a virtual import via vite plugin
        updateConfig({
          vite: {
            plugins: [
              makeViteVirtualImportPlugin(
                "uc-theme-config",
                "virtual:uc-theme/config",
                `export const config = ${JSON.stringify(config)}`,
              ),
              // @ts-expect-error -- Astro plugin config doesn't seem right
              tailwindcss(),
            ],
          },
        });
      },
    },
  };
};
