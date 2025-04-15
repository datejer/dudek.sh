export type BlogPostFrontmatter = {
  title: string;
  // ISO 8601 date format
  date: string;
  description: string;
  tags?: string[];
};

export type BlogPost = {
  slug: string;
  content: string;
  readingTime: string;
  frontmatter: BlogPostFrontmatter;
};

export type BlogPostPreview = Omit<BlogPost, "content">;
