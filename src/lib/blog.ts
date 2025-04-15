import fs from "fs";
import matter from "gray-matter";
import path from "path";
import readingTime from "reading-time";
import type { BlogPost, BlogPostFrontmatter } from "@/types/blog";

const POSTS_PATH = path.join(process.cwd(), "src/content");
const POST_FILE_EXT_REGEX = /\.mdx$/;

const getPostFromFile = (file: string): BlogPost => {
  const source = fs.readFileSync(path.join(POSTS_PATH, file), "utf8");
  const slug = file.replace(POST_FILE_EXT_REGEX, "");
  const { data, content } = matter(source);
  const rt = readingTime(content);

  return {
    slug,
    content,
    readingTime: rt.text,
    frontmatter: data as BlogPostFrontmatter,
  };
};

const sortByDateDesc = (a: BlogPost, b: BlogPost) => {
  return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
};

export function getAllPosts(): BlogPost[] {
  try {
    const files = fs.readdirSync(POSTS_PATH);
    const mdxFiles = files.filter((file) => POST_FILE_EXT_REGEX.test(file));
    const posts = mdxFiles.map((file) => getPostFromFile(file));
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
    return getPostFromFile(`${slug}.mdx`);
  } catch {
    return null;
  }
}
