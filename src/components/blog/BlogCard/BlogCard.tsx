import Link from "next/link";
import { format } from "date-fns";
import { BlogPostPreview } from "@/types/blog";
import styles from "./BlogCard.module.scss";

type BlogCardProps = {
  post: BlogPostPreview;
};

{
  /* <article key={post.slug}>
  <Link href={`/blog/${post.slug}`} className="block space-y-2">
    <h2 className="text-2xl font-semibold hover:text-blue-500">{post.frontmatter.title}</h2>
    <time className="text-sm text-zinc-600 dark:text-zinc-400">
      {format(new Date(post.frontmatter.date), "MMMM d, yyyy")}
    </time>
    <p className="text-zinc-600 dark:text-zinc-400">{post.frontmatter.description}</p>
  </Link>
</article>; */
}

export const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Link href={`/blog/${post.slug}`}>
      <article className={styles.card}>
        <div className={styles.summary}>
          <time dateTime={post.frontmatter.date} className={styles.date}>
            {format(new Date(post.frontmatter.date), "MMMM d, yyyy")}
          </time>
          <h2 className={styles.title}>{post.frontmatter.title}</h2>
          <p className={styles.description}>{post.frontmatter.description}</p>
          <p className={styles.readingTime}>{post.readingTime}</p>
          <div className={styles.tags}>
            {post.frontmatter.tags?.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
};
