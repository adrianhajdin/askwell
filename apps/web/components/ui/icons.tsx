import type { SVGProps } from "react";

const iconProps: SVGProps<SVGSVGElement> = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

/** An empty inbox tray. */
export function EmptyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M3 13h5l1.5 2.5h5L16 13h5" />
      <path d="M5.5 5.5 3 13v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5l-2.5-7.5A2 2 0 0 0 16.6 4H7.4a2 2 0 0 0-1.9 1.5Z" />
    </svg>
  );
}

/** A warning triangle. */
export function AlertIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M10.3 3.9 2.4 17.5A2 2 0 0 0 4.1 20.5h15.8a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  );
}
