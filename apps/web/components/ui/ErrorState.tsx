import type { ReactNode } from "react";
import { cx } from "./cx";
import { AlertIcon } from "./icons";

export interface ErrorStateProps {
  /** Defaults to "Something went wrong". */
  title?: string;
  message: string;
  /** Usually a Button, e.g. "Try again". */
  action?: ReactNode;
  className?: string;
}

/** Shown when a screen or section failed to load or save. */
export function ErrorState({
  title = "Something went wrong",
  message,
  action,
  className,
}: ErrorStateProps) {
  return (
    <div
      role="alert"
      className={cx(
        "flex flex-col items-center justify-center gap-4 px-6 py-12 text-center",
        className,
      )}
    >
      <div className="flex size-12 items-center justify-center rounded-full border border-line-strong bg-glass text-fg">
        <AlertIcon className="size-6" />
      </div>
      <div className="flex max-w-sm flex-col gap-1">
        <h3 className="text-base font-semibold text-fg">{title}</h3>
        <p className="text-sm text-fg-muted">{message}</p>
      </div>
      {action ? <div className="flex flex-wrap justify-center gap-2">{action}</div> : null}
    </div>
  );
}
