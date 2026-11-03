import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { Spinner } from "./Spinner";

describe("Spinner", () => {
  it("renders an accessible status with a default label", () => {
    const html = renderToStaticMarkup(<Spinner />);
    expect(html).toContain('role="status"');
    expect(html).toContain("Loading");
    expect(html).toContain("animate-spin");
  });

  it("uses a custom label and size", () => {
    const html = renderToStaticMarkup(<Spinner size="lg" label="Sending" />);
    expect(html).toContain("Sending");
    expect(html).toContain("size-10");
  });
});
