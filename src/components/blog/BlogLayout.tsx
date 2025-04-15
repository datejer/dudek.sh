import type { ReactNode } from "react";
import { format } from "date-fns";
import { BlogPostFrontmatter } from "@/types/blog";

interface BlogLayoutProps {
  frontmatter: BlogPostFrontmatter;
  children: ReactNode;
}

export function BlogLayout({ frontmatter, children }: BlogLayoutProps) {
  return (
    <article className="prose prose-zinc dark:prose-invert max-w-none">
      <header className="mb-8">
        <h1 className="mb-2">{frontmatter.title}</h1>
        <time dateTime={frontmatter.date} className="text-zinc-600 dark:text-zinc-400">
          {format(new Date(frontmatter.date), "MMMM d, yyyy")}
        </time>
        <p className="text-lg mt-4">{frontmatter.description}</p>
      </header>
      {children}
    </article>
  );
}
