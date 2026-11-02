import { defineConfig } from "vitest/config";

// One Vitest run from the root covers every workspace package.
// Each folder under apps/ and packages/ is its own project; a package can add
// its own vitest.config.ts later (e.g. jsdom for the web app) and it is picked up.
export default defineConfig({
  test: {
    projects: ["apps/*", "packages/*"],
  },
});
