// @ts-check
import { defineConfig } from "astro/config";
import { ucTheme } from "uc-theme";

export default defineConfig({
  integrations: [ucTheme()],
});
