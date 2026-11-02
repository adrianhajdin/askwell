import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { ErrorState } from "./ErrorState";

describe("ErrorState", () => {
  it("renders an alert with a default title", () => {
    const html = renderToStaticMarkup(<ErrorState message="Could not load." />);
    expect(html).toContain('role="alert"');
    expect(html).toContain("Something went wrong");
    expect(html).toContain("Could not load.");
  });

  it("renders a custom title and action", () => {
    const html = renderToStaticMarkup(
      <ErrorState
        title="Upload failed"
        message="The file is too large."
        action={<button type="button">Try again</button>}
      />,
    );
    expect(html).toContain("Upload failed");
    expect(html).toContain("Try again");
  });

  it("renders the message as text, not HTML", () => {
    const html = renderToStaticMarkup(<ErrorState message="<b>x</b>" />);
    expect(html).toContain("&lt;b&gt;x&lt;/b&gt;");
  });
});
