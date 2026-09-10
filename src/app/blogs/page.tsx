import React from "react";
import type { Metadata } from "next";
import { getAllBlogs, getFeaturedBlog } from "@/data/blogs";
import { Container } from "@/components/ui/Container";
import { BlogsDirectoryClient } from "./BlogsDirectoryClient";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Engineering & Research Blog | Vectis Studio",
  description: "Academic research strategies, IEEE base paper replication guides, simulation best practices, and thesis formatting insights.",
};

export default function BlogsPage() {
  const allBlogs = getAllBlogs();
  const featuredBlog = getFeaturedBlog();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Blog Hero */}
      <section className="py-12 sm:py-16 bg-surface border-b border-border">
        <Container>
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary block mb-3">
              Research &amp; Engineering Insights
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-semibold text-foreground tracking-tight leading-[1.1] mb-3 text-balance-editorial">
              Technical Guides &amp;<br />Academic Strategies
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Curated articles on thesis structuring, IEEE benchmark reproduction, simulation validation, and postgraduate defense preparation.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Articles Directory */}
      <section className="py-12 sm:py-16 bg-background border-b border-border">
        <Container>
          <BlogsDirectoryClient initialBlogs={allBlogs} featuredBlog={featuredBlog} />
        </Container>
      </section>

      {/* Final CTA */}
      <CtaBanner />
    </div>
  );
}
