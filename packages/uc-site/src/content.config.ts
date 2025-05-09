import { defineCollection, z, reference } from "astro:content";
import { file } from "astro/loaders";
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
    }),
});

const profiles = defineCollection({
  loader: file("./src/content/profiles/profiles.json"),
  schema: ({ image }) =>
    z.object({
      id: z.string(),
      name: z.string(),
      title: z.string().optional(),
      photo: image().optional(),
    }),
});

export const collections = {
  blog,
  profiles,
};
