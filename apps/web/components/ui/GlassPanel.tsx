import type { HTMLAttributes } from "react";
import { cx } from "./cx";

type GlassPanelElement = "div" | "section" | "article" | "aside" | "header" | "footer";

export interface GlassPanelProps extends HTMLAttributes<HTMLElement> {
  /** HTML element to render. Defaults to `div`. */
  as?: GlassPanelElement;
  /** `strong` is more opaque and blurred, for panels that sit on busy backgrounds. */
  variant?: "default" | "strong";
  padding?: "none" | "sm" | "md" | "lg";
}

const variantClasses: Record<NonNullable<GlassPanelProps["variant"]>, string> = {
  default: "bg-glass backdrop-blur-glass shadow-glass",
  strong: "bg-glass-strong backdrop-blur-glass-lg shadow-glass-lg",
};

const paddingClasses: Record<NonNullable<GlassPanelProps["padding"]>, string> = {
  none: "",
  sm: "p-3",
  md: "p-5",
  lg: "p-6 sm:p-8",
};

/** A blurred, translucent panel. Works on both surfaces. */
export function GlassPanel({
  as: Element = "div",
  variant = "default",
  padding = "md",
  className,
  ...props
}: GlassPanelProps) {
  return (
    <Element
      className={cx(
        "rounded-panel border border-line",
        variantClasses[variant],
        paddingClasses[padding],
        className,
      )}
      {...props}
    />
  );
}
