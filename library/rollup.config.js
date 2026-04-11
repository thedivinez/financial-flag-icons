import dts from "rollup-plugin-dts";

// DTS bundle only — JS is handled by rspack
export default [
  {
    input: "dist/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts()],
  },
];