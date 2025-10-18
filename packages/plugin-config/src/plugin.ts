import type { AstroIntegration } from "astro";
import { makeVirtualImportVitePlugin } from "./makeVirtualImportVitePlugin";

interface PluginOptions {
  /** Module name (will be prefixed with "virtual:") */
  name: string;
  /** Configuration */
  config: object;
}

export const plugin = (options: PluginOptions): AstroIntegration => {
  const { name, config } = options;
  return {
    name: "plugin-config",
    hooks: {
      "astro:config:setup": ({ updateConfig }) => {
        // Expose theme config as a virtual import via vite plugin
        updateConfig({
          vite: {
            plugins: [
              makeVirtualImportVitePlugin(
                `virtual-${name.toLowerCase().replace(/\W/g, "-")}`,
                `virtual:${name}`,
                `export const config = ${JSON.stringify(config)}`,
              ),
            ],
          },
        });
      },
    },
  };
};
