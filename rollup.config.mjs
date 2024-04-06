import postcss from "rollup-plugin-postcss";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";

import pkg from "./package.json" assert { type: "json" };

export default {
  input: "./src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript({ tsconfig: "./tsconfig.json" }),
    postcss({
      config: { path: "./postcss.config.js" },
      extract: true,
      minimize: true,
      sourceMap: true,
    }),
  ],
  external: ["react"],
};
