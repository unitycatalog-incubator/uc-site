declare module "virtual:config" {
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
      headerCtas: (MenuItem & { color: string })[];
      /** Footer menu */
      footer: MenuItem[];
    };
  }

  export const config: SiteConfig;
}
