import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { GlassPanel } from "./GlassPanel";

describe("GlassPanel", () => {
  it("renders children with glass tokens", () => {
    const html = renderToStaticMarkup(<GlassPanel>Hello</GlassPanel>);
    expect(html).toMatch(/^<div /);
    expect(html).toContain("Hello");
    expect(html).toContain("bg-glass");
    expect(html).toContain("backdrop-blur-glass");
    expect(html).toContain("border-line");
  });

  it("renders the strong variant as another element", () => {
    const html = renderToStaticMarkup(
      <GlassPanel as="section" variant="strong" padding="none" aria-label="Stats" />,
    );
    expect(html).toMatch(/^<section /);
    expect(html).toContain("bg-glass-strong");
    expect(html).toContain('aria-label="Stats"');
  });
});
