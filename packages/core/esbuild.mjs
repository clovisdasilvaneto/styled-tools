import * as esbuild from "esbuild";
import { typecheckPlugin } from "@jgoz/esbuild-plugin-typecheck";

const IS_DEV = process.env.NODE_ENV === "development";

const sharedConfig = {
  entryPoints: ["src/index.ts"],
  bundle: true,
  format: "esm",
  outfile: "dist/lib.js",
  plugins: [typecheckPlugin()],
};

if (IS_DEV) {
  let ctx = await esbuild.context({ ...sharedConfig, sourcemap: true });

  await ctx.watch();
  let { port } = await ctx.serve();

  console.log(`The bunle is being served in http://localhost:${port}`);
} else {
  await esbuild.build({ ...sharedConfig, minify: true });
}
