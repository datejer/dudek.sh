import Link from "next/link";
import clsx from "clsx";
import { PostTag } from "@/components/blog/PostTag/PostTag";
import { AnimatedArrow } from "@/components/common/AnimatedArrow/AnimatedArrow";
import { formatBlogPostDate, getReadingTimeISODuration } from "@/lib/date";
import { BlogPostPreview } from "@/types/blog";
import styles from "./PostCard.module.scss";

type PostCardProps = {
  post: BlogPostPreview;
};

export const PostCard = ({ post }: PostCardProps) => {
  return (
    <Link href={`/blog/${post.slug}`}>
      <article className={clsx(styles.card, "arrow-hover-trigger")}>
        <div className={styles.summary}>
          <h2 className={styles.title}>{post.frontmatter.title}</h2>
          <div className={styles.extraInfo}>
            <time dateTime={post.frontmatter.date} className={styles.date}>
              {formatBlogPostDate(post.frontmatter.date)}
            </time>
            &nbsp;&nbsp;&middot;&nbsp;&nbsp;
            <time
              dateTime={getReadingTimeISODuration(post.readingTime)}
              className={styles.readingTime}
            >
              {post.readingTime.text}
            </time>
            &nbsp;&nbsp;&middot;&nbsp;&nbsp;
            <ul className={styles.tags}>
              {post.frontmatter.tags?.map((tag) => <PostTag key={tag} tag={tag} size="compact" />)}
            </ul>
          </div>
          <p className={styles.description}>{post.frontmatter.description}</p>
          <div className={styles.readMoreWrapper}>
            <div className={styles.readMore}>Read more</div>
            <AnimatedArrow />
          </div>
        </div>
      </article>
    </Link>
  );
};
