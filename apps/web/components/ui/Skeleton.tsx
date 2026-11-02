import type { HTMLAttributes } from "react";
import { cx } from "./cx";

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  /** `text` is a single line, `circle` is round, `rect` is a block. Size it with className. */
  shape?: "rect" | "text" | "circle";
}

const shapeClasses: Record<NonNullable<SkeletonProps["shape"]>, string> = {
  rect: "rounded-control",
  text: "h-4 rounded-full",
  circle: "rounded-full",
};

/** A pulsing placeholder for content that is loading. Hidden from screen readers. */
export function Skeleton({ shape = "rect", className, ...props }: SkeletonProps) {
  return (
    <div
      aria-hidden="true"
      className={cx("bg-skeleton motion-safe:animate-pulse", shapeClasses[shape], className)}
      {...props}
    />
  );
}
