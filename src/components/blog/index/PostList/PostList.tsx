"use client";

import { useState } from "react";
import clsx from "clsx";
import { PostCard } from "@/components/blog/index/PostCard/PostCard";
import { PostTag } from "@/components/blog/PostTag/PostTag";
import { BlogPostPreview } from "@/types/blog";
import styles from "./PostList.module.scss";

type PostListProps = {
  posts: BlogPostPreview[];
  tags: string[];
};

export const PostList = ({ posts, tags }: PostListProps) => {
  const [tagFilter, setTagFilter] = useState<string[]>([]);

  const filteredPosts = posts.filter((post) => {
    if (!tagFilter || tagFilter.length === 0) return true;
    return tagFilter.every((tag) => post.frontmatter.tags?.includes(tag) ?? false);
  });

  const handleTagClick = (tag: string) => {
    if (tagFilter?.includes(tag)) {
      setTagFilter(tagFilter.filter((t) => t !== tag));
    } else {
      setTagFilter([...(tagFilter ?? []), tag]);
    }
  };

  return (
    <div className={styles.postListContainer}>
      <ul className={styles.tagList}>
        {tags.map((tag) => (
          <PostTag
            className={clsx(tagFilter?.includes(tag) && styles.activeTag)}
            tag={tag}
            key={tag}
            onClick={() => handleTagClick(tag)}
            interactive
          />
        ))}
      </ul>

      <ul className={styles.postList}>
        {filteredPosts.map((post) => (
          <PostCard post={post} key={post.slug} />
        ))}
      </ul>
    </div>
  );
};
