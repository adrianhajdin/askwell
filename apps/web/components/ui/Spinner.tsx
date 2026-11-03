import { cx } from "./cx";

export interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  /** Read by screen readers. Defaults to "Loading". */
  label?: string;
  className?: string;
}

const sizeClasses: Record<NonNullable<SpinnerProps["size"]>, string> = {
  sm: "size-4",
  md: "size-6",
  lg: "size-10",
};

/** A spinning ring in the current text color. */
export function Spinner({ size = "md", label = "Loading", className }: SpinnerProps) {
  return (
    <span role="status" className={cx("inline-flex shrink-0", className)}>
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        className={cx("animate-spin", sizeClasses[size])}
      >
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.2" strokeWidth="2.5" />
        <path
          d="M21 12a9 9 0 0 0-9-9"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
      <span className="sr-only">{label}</span>
    </span>
  );
}
