import type { ReactNode } from "react";
import { cx } from "./cx";
import { EmptyIcon } from "./icons";

export interface EmptyStateProps {
  title: string;
  description?: string;
  /** Replaces the default icon. */
  icon?: ReactNode;
  /** Usually a Button, e.g. "Add your first bot". */
  action?: ReactNode;
  className?: string;
}

/** Shown when a list or screen has nothing to display yet. */
export function EmptyState({ title, description, icon, action, className }: EmptyStateProps) {
  return (
    <div
      className={cx(
        "flex flex-col items-center justify-center gap-4 px-6 py-12 text-center",
        className,
      )}
    >
      <div className="flex size-12 items-center justify-center rounded-full border border-line bg-glass text-fg-muted">
        {icon ?? <EmptyIcon className="size-6" />}
      </div>
      <div className="flex max-w-sm flex-col gap-1">
        <h3 className="text-base font-semibold text-fg">{title}</h3>
        {description ? <p className="text-sm text-fg-muted">{description}</p> : null}
      </div>
      {action ? <div className="flex flex-wrap justify-center gap-2">{action}</div> : null}
    </div>
  );
}
