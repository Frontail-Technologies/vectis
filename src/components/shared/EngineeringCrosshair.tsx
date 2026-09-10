import React from "react";
import { cn } from "@/lib/utils";

interface EngineeringCrosshairProps {
  className?: string;
  label?: string;
  theme?: "light" | "dark";
}

export function EngineeringCrosshair({
  className,
  label,
  theme = "light",
}: EngineeringCrosshairProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 font-mono text-[10px] tracking-wider select-none pointer-events-none",
        isDark ? "text-section-dark-muted" : "text-muted-foreground/70",
        className
      )}
      aria-hidden="true"
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        className="shrink-0"
        stroke="currentColor"
        strokeWidth="1"
      >
        <line x1="7" y1="0" x2="7" y2="14" />
        <line x1="0" y1="7" x2="14" y2="7" />
        <circle cx="7" cy="7" r="3" fill="none" />
      </svg>
      {label && <span className="uppercase">{label}</span>}
    </div>
  );
}
