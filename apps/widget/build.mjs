// Bundles src/index.ts into one file: dist/widget.js.
// Fails the build if the bundle goes over the 5 kb budget.
import { statSync } from "node:fs";
import * as esbuild from "esbuild";

const MAX_BYTES = 5 * 1024;
const outfile = "dist/widget.js";

/** @type {import("esbuild").BuildOptions} */
const options = {
  entryPoints: ["src/index.ts"],
  outfile,
  bundle: true,
  minify: true,
  format: "iife",
  target: "es2018",
  legalComments: "none",
};

if (process.argv.includes("--watch")) {
  const ctx = await esbuild.context(options);
  await ctx.watch();
  console.log(`widget: watching, writing ${outfile}`);
} else {
  await esbuild.build(options);
  const { size } = statSync(outfile);
  if (size > MAX_BYTES) {
    console.error(`widget: ${outfile} is ${size} bytes, over the ${MAX_BYTES} byte budget`);
    process.exit(1);
  }
  console.log(`widget: ${outfile} ${size} bytes`);
}
