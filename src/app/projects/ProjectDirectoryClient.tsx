"use client";

import React, { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { ProjectItem } from "@/types";
import { ProjectCard } from "@/components/project/ProjectCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const categories = [
  "All",
  "AI & ML",
  "CSE / IT",
  "Embedded / IoT",
  "ECE",
  "EEE",
  "Mechanical",
  "Civil",
  "Power Systems",
];

interface ProjectDirectoryClientProps {
  initialProjects: ProjectItem[];
}

export function ProjectDirectoryClient({ initialProjects }: ProjectDirectoryClientProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(9);

  const filteredProjects = useMemo(() => {
    return initialProjects.filter((project) => {
      // Category match
      const matchesCategory =
        selectedCategory === "All" ||
        project.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        project.branchCode.toLowerCase().includes(selectedCategory.toLowerCase());

      // Search match
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.summary.toLowerCase().includes(q) ||
        project.technology.some((t) => t.toLowerCase().includes(q)) ||
        project.branchCode.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [initialProjects, selectedCategory, searchQuery]);

  const displayedProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  return (
    <div className="space-y-10">
      {/* Search & Category Filter Controls */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-6 border-b border-border">
        {/* Category Pills — Horizontal Scroll on mobile */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat);
                  setVisibleCount(9);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  isActive
                    ? "bg-primary text-primary-foreground font-semibold"
                    : "bg-surface hover:bg-secondary text-muted-foreground hover:text-foreground border border-border"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Compact Search Field */}
        <div className="relative w-full md:w-72 shrink-0">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search by topic, tech, branch..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setVisibleCount(9);
            }}
            className="pl-9 h-10 text-xs bg-background"
          />
        </div>
      </div>

      {/* Results Count Summary */}
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>
          Showing {displayedProjects.length} of {filteredProjects.length} engineering projects
        </span>
        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchQuery("")}
            className="text-primary hover:underline"
          >
            Clear search
          </button>
        )}
      </div>

      {/* Project Grid */}
      {displayedProjects.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 px-4 rounded-2xl border border-dashed border-border bg-surface">
          <p className="text-base font-semibold text-foreground mb-1">
            No projects matched your criteria
          </p>
          <p className="text-xs text-muted-foreground max-w-sm mx-auto mb-5">
            Try adjusting your search query or select another engineering category.
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
          >
            Reset All Filters
          </Button>
        </div>
      )}

      {/* Load More Button */}
      {hasMore && (
        <div className="flex justify-center pt-6">
          <Button
            variant="outline"
            size="default"
            onClick={() => setVisibleCount((prev) => prev + 6)}
            className="h-11 px-8"
          >
            Load More Projects
          </Button>
        </div>
      )}
    </div>
  );
}
