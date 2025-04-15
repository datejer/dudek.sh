import fs from "fs";
import matter from "gray-matter";
import path from "path";
import readingTime from "reading-time";
import type { BlogPost, BlogPostFrontmatter, BlogPostPreview } from "@/types/blog";

const POSTS_PATH = path.join(process.cwd(), "src/content");
const POST_FILE_EXT_REGEX = /\.mdx$/;

const getPostFromFile = <T extends boolean>(
  file: string,
  preview: T,
): T extends true ? BlogPostPreview : BlogPost => {
  const source = fs.readFileSync(path.join(POSTS_PATH, file), "utf8");
  const slug = file.replace(POST_FILE_EXT_REGEX, "");
  const { data, content } = matter(source);
  const rt = readingTime(content);

  return {
    slug,
    readingTime: rt.text,
    frontmatter: data as BlogPostFrontmatter,
    ...(preview ? {} : { content }),
  } as T extends true ? BlogPostPreview : BlogPost;
};

const sortByDateDesc = (a: BlogPostPreview, b: BlogPostPreview) => {
  return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
};

export function getAllPosts(): BlogPostPreview[] {
  try {
    const files = fs.readdirSync(POSTS_PATH);
    const mdxFiles = files.filter((file) => POST_FILE_EXT_REGEX.test(file));
    const posts = mdxFiles.map((file) => getPostFromFile(file, true));
    const postsSorted = posts.sort(sortByDateDesc);

    return postsSorted;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Error reading posts:", error);
    return [];
  }
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    return getPostFromFile(`${slug}.mdx`, false);
  } catch {
    return null;
  }
}
