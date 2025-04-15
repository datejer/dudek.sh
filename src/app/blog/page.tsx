import Link from "next/link";
import { format } from "date-fns";
import { getAllPosts } from "@/lib/blog";

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="space-y-16">
      <h1 className="text-3xl font-bold">Blog</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="block space-y-2">
              <h2 className="text-2xl font-semibold hover:text-blue-500">
                {post.frontmatter.title}
              </h2>
              <time className="text-sm text-zinc-600 dark:text-zinc-400">
                {format(new Date(post.frontmatter.date), "MMMM d, yyyy")}
              </time>
              <p className="text-zinc-600 dark:text-zinc-400">{post.frontmatter.description}</p>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
