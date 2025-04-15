export type BlogPostFrontmatter = {
  title: string;
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
