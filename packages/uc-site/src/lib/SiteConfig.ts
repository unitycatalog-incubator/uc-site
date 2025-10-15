import type { ComponentProps } from "astro/types";
import { Button } from "astro-orbit/components";

type ButtonProps = ComponentProps<typeof Button>;

export interface MenuItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  /** Site title */
  siteTitle: string;
  /** Default image to display on pages which don't have an `image` */
  defaultImage: string;
  /** Site menus */
  menus: {
    /** Header menu */
    header: MenuItem[];
    /** Header menu - CTAs */
    headerCtas: (MenuItem & { color: ButtonProps["color"] })[];
    /** Footer menu */
    footer: MenuItem[];
  };
}
