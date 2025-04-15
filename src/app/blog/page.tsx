import { Metadata } from "next";
import { getMetadata } from "@/app/metadata";
import { BlogCard } from "@/components/blog/BlogCard/BlogCard";
import { getAllPosts } from "@/lib/blog";
import styles from "./page.module.scss";

export const metadata: Metadata = getMetadata({
  title: "blog",
  description: "words i write.",
});

export default function BlogIndex() {
  const posts = getAllPosts();

  console.log(posts);

  return (
    <div>
      <h1 className={styles.title}>blog.</h1>

      <ul className={styles.list}>
        {posts.map((post) => (
          <BlogCard post={post} key={post.slug} />
        ))}
      </ul>
    </div>
  );
}
