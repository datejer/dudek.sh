import type { ReactNode } from "react";
import { PostTag } from "@/components/blog/PostTag/PostTag";
import { formatBlogPostDate, getReadingTimeISODuration } from "@/lib/date";
import { BlogPostFrontmatter, ReadingTime } from "@/types/blog";
import styles from "./PostLayout.module.scss";

type PostLayoutProps = {
  frontmatter: BlogPostFrontmatter;
  readingTime: ReadingTime;
  children: ReactNode;
};

export const PostLayout = ({ frontmatter, readingTime, children }: PostLayoutProps) => {
  return (
    <article className={styles.article}>
      <h1 className={styles.title}>{frontmatter.title}</h1>

      <p className={styles.meta}>
        <time dateTime={frontmatter.date} className={styles.date}>
          {formatBlogPostDate(frontmatter.date)}
        </time>
        &nbsp;&nbsp;&middot;&nbsp;&nbsp;
        <time dateTime={getReadingTimeISODuration(readingTime)} className={styles.readingTime}>
          {readingTime.text}
        </time>
      </p>

      <ul className={styles.tags}>
        {frontmatter.tags?.map((tag) => (
          <PostTag key={tag} tag={tag} size="compact" interactive asLink />
        ))}
      </ul>

      <p className={styles.description}>{frontmatter.description}</p>

      <div className={styles.content}>{children}</div>
    </article>
  );
};
