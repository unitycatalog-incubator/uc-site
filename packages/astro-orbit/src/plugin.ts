import type { AstroIntegration } from "astro";
import tailwindcss from "@tailwindcss/vite";

export const plugin = (): AstroIntegration => {
  return {
    name: "astro-orbit",
    hooks: {
      "astro:config:setup": ({ updateConfig }) => {
        updateConfig({
          vite: {
            plugins: [tailwindcss()],
          },
        });
      },
    },
  };
};
