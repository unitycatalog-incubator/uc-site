import { defineCollection, z, reference } from "astro:content";
import { glob } from "astro/loaders";
import { blogLoader } from "./lib/blogLoader";

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

export const collections = {
  blog,
  profiles,
};
