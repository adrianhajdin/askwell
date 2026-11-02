import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { Skeleton } from "./Skeleton";

describe("Skeleton", () => {
  it("renders a hidden placeholder", () => {
    const html = renderToStaticMarkup(<Skeleton className="h-8 w-20" />);
    expect(html).toContain('aria-hidden="true"');
    expect(html).toContain("bg-skeleton");
    expect(html).toContain("h-8 w-20");
  });

  it("renders the circle shape", () => {
    expect(renderToStaticMarkup(<Skeleton shape="circle" />)).toContain("rounded-full");
  });
});
