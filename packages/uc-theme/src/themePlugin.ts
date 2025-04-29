import type { AstroIntegration } from "astro";

export const themePlugin = (): AstroIntegration => {
  return {
    name: "uc-theme",
    hooks: {
      "astro:config:setup": () => {
        console.log("Hello, world!");
      },
    },
  };
};
