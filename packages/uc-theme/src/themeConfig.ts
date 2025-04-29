import { z } from "astro/zod";

export const themeConfigSchema = z.object({
  /** Site title. */
  siteTitle: z.string(),
  /** Default image to display on pages which don't have an `image` */
  defaultImage: z.string(),
});

export type ThemeConfig = z.infer<typeof themeConfigSchema>;
