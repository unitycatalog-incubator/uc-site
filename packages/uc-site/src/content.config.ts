import { defineCollection, z, reference } from "astro:content";
import { glob } from "astro/loaders";
import { blogLoader } from "uc-theme/blog";

const blog = defineCollection({
  loader: blogLoader({
    pattern: "**/index.md",
    base: "./src/content/blog",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      thumbnail: image().optional(),
      authors: z.array(reference("profiles")),
      category: z.enum(["guide"]),
      date: z.string(),
      featured: z.boolean().optional(),
    }),
});

const profiles = defineCollection({
  loader: glob({ pattern: "**/index.md", base: "./src/content/profiles" }),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    title: z.string().optional(),
    image: z.string().optional(),
  }),
});

const home = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/home" }),
  schema: z.object({
    type: z.string().optional(),
    title: z.string().optional(),
    description: z.string().optional(),
    heroTitle: z.string().optional(),
    heroSubtitle: z.string().optional(),
    pageTitle: z.string().optional(),
    body: z.string().optional(),
    icon: z.string().optional(),
    image: z.string().optional(),
    url: z.string().optional(),
    style: z.string().optional(),
    label: z.string().optional(),
    alt: z.string().optional(),
    text: z.string().optional(),
    button: z
      .object({
        label: z.string(),
        url: z.string(),
      })
      .optional(),
    buttons: z
      .array(
        z.object({
          label: z.string(),
          url: z.string(),
          style: z.string().optional(),
        }),
      )
      .optional(),
    logos: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string(),
        }),
      )
      .optional(),
    links: z
      .array(
        z.object({
          label: z.string(),
          url: z.string(),
        }),
      )
      .optional(),
    copyright: z
      .object({
        text: z.string(),
      })
      .optional(),
    items: z
      .array(
        z.object({
          title: z.string().optional(),
          body: z.string().optional(),
          icon: z.string().optional(),
          image: z.string().optional(),
          testimonial: z.string().optional(),
          name: z.string().optional(),
          label: z.string().optional(),
          url: z.string().optional(),
          style: z.string().optional(),
        }),
      )
      .optional(),
  }),
});

export const collections = {
  blog,
  profiles,
  home,
};
