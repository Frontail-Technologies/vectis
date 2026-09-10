"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight, Clock, User } from "lucide-react";
import { BlogPost } from "@/types";
import { Badge } from "@/components/ui/badge";

const categories = [
  "All",
  "Research Strategy",
  "Thesis Writing",
  "Simulation & Modeling",
  "AI & Software",
];

interface BlogsDirectoryClientProps {
  initialBlogs: BlogPost[];
  featuredBlog: BlogPost;
}

export function BlogsDirectoryClient({ initialBlogs, featuredBlog }: BlogsDirectoryClientProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredBlogs = useMemo(() => {
    if (selectedCategory === "All") return initialBlogs;
    return initialBlogs.filter((b) => b.category === selectedCategory);
  }, [initialBlogs, selectedCategory]);

  return (
    <div className="space-y-12">
      {/* Featured Article Spotlight */}
      <div className="p-6 sm:p-8 lg:p-10 rounded-2xl border border-border bg-surface-soft">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2.5">
            <Badge variant="default" className="text-[10px] font-mono uppercase tracking-wider">
              Featured Article
            </Badge>
            <span className="text-xs font-mono text-primary font-semibold">
              {featuredBlog.category}
            </span>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl lg:text-[34px] font-semibold text-foreground tracking-tight leading-snug">
            <Link href={`/blogs/${featuredBlog.slug}`} className="hover:text-primary transition-colors">
              {featuredBlog.title}
            </Link>
          </h2>

          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {featuredBlog.excerpt}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <div className="flex items-center gap-4 text-xs text-muted-foreground font-mono">
              <span className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-primary" />
                {featuredBlog.author.name}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-primary" />
                {featuredBlog.readTime}
              </span>
            </div>

            <Link
              href={`/blogs/${featuredBlog.slug}`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
            >
              <span>Read Full Article</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-border">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                isActive
                  ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                  : "bg-surface hover:bg-secondary text-muted-foreground hover:text-foreground border border-border"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBlogs.map((blog) => (
          <article
            key={blog.slug}
            className="group flex flex-col justify-between p-6 rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-md transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[11px] font-mono text-primary font-bold uppercase tracking-wider">
                  {blog.category}
                </span>
                <span className="text-[11px] font-mono text-muted-foreground">
                  {blog.readTime}
                </span>
              </div>

              <h3 className="font-heading text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors leading-snug mb-2.5">
                <Link href={`/blogs/${blog.slug}`}>
                  {blog.title}
                </Link>
              </h3>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-6">
                {blog.excerpt}
              </p>
            </div>

            <div className="pt-4 border-t border-border flex items-center justify-between">
              <span className="text-xs text-muted-foreground font-mono truncate max-w-40">
                {blog.author.name}
              </span>
              <Link
                href={`/blogs/${blog.slug}`}
                className="inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:translate-x-1 transition-transform shrink-0"
              >
                <span>Read</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
