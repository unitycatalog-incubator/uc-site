declare module "virtual:config" {
  import type { SiteConfig } from "./lib/SiteConfig.ts";
  export const config: SiteConfig;
}
