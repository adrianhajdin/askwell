import { defineConfig } from "vitest/config";

// One Vitest run from the root covers every workspace package.
export default defineConfig({
  test: {
    include: ["{apps,packages}/*/**/*.test.{ts,tsx}"],
    exclude: ["**/node_modules/**", "**/.next/**", "**/dist/**"],
  },
});
