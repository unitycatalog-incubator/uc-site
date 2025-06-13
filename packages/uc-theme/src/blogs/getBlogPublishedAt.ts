interface AnyPost {
  filePath?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export const getBlogPublishedAt = (post: AnyPost): Date => {
  const { filePath } = post;

  if (!filePath) {
    throw new Error("Please provide a valid Blog post");
  }

  const dateMatch = filePath.match(/(\d{4}-\d{2}-\d{2})-./);

  if (dateMatch === null || dateMatch[1] === undefined) {
    throw new Error("Blog file path must include format: YYYY-MM-DD-*.");
  }

  return new Date(`${dateMatch[1]}T00:00:00Z`);
};
