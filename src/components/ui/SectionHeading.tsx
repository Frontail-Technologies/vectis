import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlightPhrase?: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
  children?: React.ReactNode;
}

export function SectionHeading({
  eyebrow,
  title,
  highlightPhrase,
  description,
  align = "left",
  theme = "light",
  className,
  children,
}: SectionHeadingProps) {
  const isDark = theme === "dark";

  let titleContent: React.ReactNode = title;
  if (highlightPhrase && title.includes(highlightPhrase)) {
    const parts = title.split(highlightPhrase);
    titleContent = (
      <>
        {parts[0]}
        <span className={isDark ? "text-highlight" : "text-primary"}>
          {highlightPhrase}
        </span>
        {parts.slice(1).join(highlightPhrase)}
      </>
    );
  }

  return (
    <div
      className={cn(
        "flex flex-col gap-3 max-w-2xl",
        align === "center" && "mx-auto text-center items-center",
        align === "left" && "text-left items-start",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "text-xs font-semibold tracking-widest uppercase",
            isDark ? "text-highlight" : "text-primary"
          )}
        >
          {eyebrow}
        </span>
      )}

      <h2
        className={cn(
          "font-heading font-semibold tracking-tight leading-[1.1] text-balance-editorial",
          "text-3xl sm:text-[38px] md:text-[42px]",
          isDark ? "text-surface-brand-foreground" : "text-foreground"
        )}
      >
        {titleContent}
      </h2>

      {description && (
        <p
          className={cn(
            "text-base sm:text-lg leading-relaxed max-w-xl font-normal",
            isDark ? "text-surface-brand-muted" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      )}

      {children}
    </div>
  );
}
