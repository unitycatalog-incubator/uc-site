import { z } from "astro/zod";

const singleMenuItem = z.object({
  label: z.string(),
  url: z.string(),
});

const groupedMenuItem = z.object({
  label: z.string(),
  items: z.array(singleMenuItem),
});

const menuItem = z.union([singleMenuItem, groupedMenuItem]);

export const themeConfigSchema = z.object({
  /** Site title */
  siteTitle: z.string(),
  /** Default image to display on pages which don't have an `image` */
  defaultImage: z.string(),
  /** Site menus */
  menus: z.object({
    /** Header menu */
    header: z.array(menuItem),
    /** Header menu - CTAs */
    headerCtas: z.array(menuItem),
    /** Footer menu */
    footer: z.array(menuItem),
  }),
});

export type ThemeConfig = z.infer<typeof themeConfigSchema>;
