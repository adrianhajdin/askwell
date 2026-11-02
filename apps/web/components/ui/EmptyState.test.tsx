import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { EmptyState } from "./EmptyState";

describe("EmptyState", () => {
  it("renders title, description and action", () => {
    const html = renderToStaticMarkup(
      <EmptyState
        title="No bots yet"
        description="Create your first bot."
        action={<button type="button">Create</button>}
      />,
    );
    expect(html).toContain("No bots yet");
    expect(html).toContain("Create your first bot.");
    expect(html).toContain("<button");
    expect(html).toContain("<svg");
  });

  it("renders without description or action", () => {
    const html = renderToStaticMarkup(<EmptyState title="Nothing here" />);
    expect(html).toContain("Nothing here");
    expect(html).not.toContain("<p ");
    expect(html).not.toContain("<button");
  });
});
