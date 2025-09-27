import type { ComponentProps } from "astro/types";
import Button from "./components/Button.astro";

type ButtonProps = ComponentProps<typeof Button>;

export interface MenuItem {
  label: string;
  url: string;
}

export interface ThemeConfig {
  /** Site title */
  siteTitle: string;
  /** Default image to display on pages which don't have an `image` */
  defaultImage: string;
  /** Site menus */
  menus: {
    /** Header menu */
    header: MenuItem[];
    /** Header menu - CTAs */
    headerCtas: (MenuItem & { variant: ButtonProps["variant"] })[];
    /** Footer menu */
    footer: MenuItem[];
  };
}
