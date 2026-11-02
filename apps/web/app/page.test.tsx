import { APP_NAME } from "@askwell/shared";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import Home from "./page";

describe("home page", () => {
  it("renders APP_NAME", () => {
    expect(renderToStaticMarkup(<Home />)).toContain(APP_NAME);
  });
});
