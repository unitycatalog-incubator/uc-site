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

export interface Logo {
  src: string;
  alt: string;
}

export interface Link {
  label: string;
  url: string;
}

export interface Copyright {
  text: string;
}

export interface ButtonType {
  label: string;
  url: string;
  style?: string;
}

export interface Benefit {
  title: string;
  body: string;
  icon?: string;
}

export interface Endorsement {
  testimonial: string;
  name: string;
  title: string;
  icon?: string;
}

export interface Feature {
  title: string;
  body: string;
  icon: string;
  image: string;
}

export interface Author {
  name: string;
  title?: string;
  image?: string;
}

export interface BlogPost {
  title: string;
  authors: Author[];
  thumbnail?: unknown;
  raw?: string;
  postId?: string;
}

export interface RelatedBlogPosts {
  currentPostId: string;
}
