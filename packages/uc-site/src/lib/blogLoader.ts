import type { Loader } from "astro/loaders";
import { glob } from "astro/loaders";

interface BlogLoaderOptions {
  pattern: string | Array<string>;
  base: string | URL;
}

/**
 * Loads blogs from a directory. Requires each blog filepath to match format: YYYY-MM-DD-*
 */
export const blogLoader = (options: BlogLoaderOptions): Loader => {
  const { pattern, base } = options;

  return glob({
    pattern,
    base,
    generateId: ({ entry, data }) => {
      if (data.slug) {
        return data.slug as string;
      }

      const matches = entry.match(/\d{4}-\d{2}-\d{2}-([\w|-]+)/);

      if (!matches || matches[1] === undefined) {
        throw new Error(
          `Blog path must match format: YYYY-MM-DD-*. Provided: ${entry}`,
        );
      }

      return matches[1];
    },
  });
};
