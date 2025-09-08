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
    headerCtas: MenuItem[];
    /** Footer menu */
    footer: MenuItem[];
  };
}
