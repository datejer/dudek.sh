import { Metadata } from "next";
import { getMetadata } from "@/app/metadata";
import { PostList } from "@/components/blog/index/PostList/PostList";
import { getAllPosts, getAllTags } from "@/lib/blog";
import styles from "./page.module.scss";

export const metadata: Metadata = getMetadata({
  title: "blog",
  description: "words i write.",
});

export default function BlogIndex() {
  const posts = getAllPosts();
  const tags = getAllTags(posts);

  return (
    <div>
      <h1 className={styles.title}>blog.</h1>

      <p>Read my thoughts.</p>

      <PostList posts={posts} tags={tags} />
    </div>
  );
}
