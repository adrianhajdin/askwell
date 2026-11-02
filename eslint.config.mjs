// @ts-check
import js from "@eslint/js";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

const WEB = "apps/web/**";

export default defineConfig(
  globalIgnores([
    "**/node_modules/",
    "**/.next/",
    "**/out/",
    "**/dist/",
    "**/coverage/",
    "**/.vercel/",
    "**/next-env.d.ts",
  ]),

  // Everything outside apps/web: plain JS + typescript-eslint.
  {
    ignores: [WEB],
    extends: [js.configs.recommended, tseslint.configs.recommended],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: { ...globals.node },
    },
  },
  {
    files: ["apps/widget/src/**"],
    languageOptions: { globals: { ...globals.browser } },
  },

  // apps/web: Next's own config (core web vitals + TypeScript).
  {
    files: [WEB],
    extends: [nextVitals, nextTs],
    settings: { next: { rootDir: "apps/web" } },
  },

  // Team rules for every TypeScript file.
  {
    files: ["**/*.{ts,tsx,mts}"],
    rules: {
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
    },
  },
);
