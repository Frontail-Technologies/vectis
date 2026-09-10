import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { getAllBlogs, getBlogBySlug, getRelatedBlogs } from "@/data/blogs";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/sections/CtaBanner";

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const blogs = getAllBlogs();
  return blogs.map((b) => ({
    slug: b.slug,
  }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Article Not Found | Vectis Studio",
    };
  }

  return {
    title: `${blog.title} | Vectis Research Insights`,
    description: blog.excerpt,
  };
}

export default async function BlogDetailPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const relatedBlogs = getRelatedBlogs(slug, 2);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Back Navigation Strip */}
      <div className="bg-surface border-b border-border py-3">
        <Container>
          <Link
            href="/blogs"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Articles</span>
          </Link>
        </Container>
      </div>

      {/* Article Header */}
      <article className="py-12 sm:py-16 lg:py-20 bg-surface border-b border-border">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="default" className="text-[11px] font-mono uppercase tracking-wider">
                {blog.category}
              </Badge>
              <span className="text-xs font-mono text-muted-foreground flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-primary" />
                {blog.readTime}
              </span>
            </div>

            <h1 className="font-heading text-2xl sm:text-3xl lg:text-[40px] font-semibold text-foreground tracking-tight leading-[1.15] mb-6 text-balance-editorial">
              {blog.title}
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
              {blog.excerpt}
            </p>

            {/* Author Metadata Strip */}
            <div className="flex items-center justify-between p-4 rounded-xl border border-border bg-background">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary font-bold font-mono">
                  {blog.author.name[0]}
                </div>
                <div>
                  <span className="text-sm font-semibold text-foreground block leading-tight">
                    {blog.author.name}
                  </span>
                  <span className="text-xs text-muted-foreground font-mono">
                    {blog.author.role} · {blog.publishedAt}
                  </span>
                </div>
              </div>

              <Button asChild variant="outline" size="sm">
                <Link href="/contact">
                  Consult Author
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </article>

      {/* Article Body Content */}
      <section className="py-14 sm:py-18 bg-background border-b border-border">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-10">
              {blog.content.sections.map((sec, idx) => (
                <div key={idx} className="space-y-4">
                  {sec.heading && (
                    <h2 className="font-heading text-xl sm:text-2xl font-semibold text-foreground tracking-tight pt-2">
                      {sec.heading}
                    </h2>
                  )}

                  <div className="space-y-4 text-sm sm:text-base text-foreground/85 leading-relaxed">
                    {sec.body.map((para, pIdx) => (
                      <p key={pIdx}>{para}</p>
                    ))}
                  </div>

                  {sec.keyTakeaway && (
                    <div className="p-4 rounded-xl border border-primary/30 bg-surface-soft text-sm text-foreground">
                      <span className="font-mono text-xs font-bold text-primary uppercase tracking-wider block mb-1">
                        Key Takeaway
                      </span>
                      <p className="leading-relaxed text-xs sm:text-sm font-medium">
                        {sec.keyTakeaway}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="pt-10 mt-10 border-t border-border flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-muted-foreground mr-1">Tags:</span>
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-md bg-secondary text-xs font-mono text-secondary-foreground"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Related Articles */}
      {relatedBlogs.length > 0 && (
        <section className="py-14 sm:py-18 bg-surface-soft border-b border-border">
          <Container>
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-heading text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
                Related Research Guides
              </h2>
              <Button asChild variant="outline" size="sm">
                <Link href="/blogs">
                  View All Guides
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedBlogs.map((b) => (
                <div
                  key={b.slug}
                  className="p-6 rounded-2xl border border-border bg-background hover:border-primary/40 hover:shadow-card transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-mono text-primary font-bold uppercase tracking-wider block mb-2">
                      {b.category}
                    </span>
                    <h3 className="font-heading text-lg font-semibold text-foreground hover:text-primary transition-colors mb-2">
                      <Link href={`/blogs/${b.slug}`}>
                        {b.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                      {b.excerpt}
                    </p>
                  </div>

                  <Link
                    href={`/blogs/${b.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary mt-5 hover:underline"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Final CTA */}
      <CtaBanner />
    </div>
  );
}
