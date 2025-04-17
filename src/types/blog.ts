/**
 * Represents the frontmatter structure for a blog post.
 *
 * @interface BlogPostFrontmatter
 * @property {string} title - The title of the blog post
 * @property {string} date - The publication date in ISO 8601 format (e.g., "2023-04-21")
 * @property {string} description - A brief description or summary of the blog post
 * @property {string[]} [tags] - Optional array of tags associated with the blog post
 */
export type BlogPostFrontmatter = {
  title: string;
  // ISO 8601 date format
  date: string;
  description: string;
  tags?: string[];
};

/**
 * Represents the estimated reading time for a blog post.
 * @interface ReadingTime
 * @property {string} text - Human-readable representation of the reading time (e.g., "3 min read").
 * @property {number} ms - Reading time in milliseconds.
 */
export type ReadingTime = {
  text: string;
  ms: number;
};

export type BlogPost = {
  slug: string;
  content: string;
  readingTime: ReadingTime;
  frontmatter: BlogPostFrontmatter;
};

export type BlogPostPreview = Omit<BlogPost, "content">;
