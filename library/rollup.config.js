import dts from "rollup-plugin-dts";
import del from "rollup-plugin-delete";

// DTS bundle only — JS is handled by rspack
export default [
  {
    input: "dist/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [
      dts(),
      del({ targets: "dist/types", hook: "buildEnd" }),
    ],
  },
];