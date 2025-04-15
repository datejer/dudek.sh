import { Metadata } from "next";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import { getMetadata } from "@/app/metadata";
import { BlogLayout } from "@/components/blog/BlogLayout";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return getMetadata({
      title: "Not Found",
      description: "The page you are looking for does not exist.",
    });
  }

  return getMetadata({
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    openGraph: {
      type: "article",
      publishedTime: post.frontmatter.date,
      tags: post.frontmatter.tags,
    },
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { content } = await compileMDX({
    source: post.content,
  });

  return (
    <BlogLayout frontmatter={post.frontmatter}>
      <div>reading time: {post.readingTime}</div>
      {content}
    </BlogLayout>
  );
}
