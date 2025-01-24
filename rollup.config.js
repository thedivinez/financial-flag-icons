import dts from "rollup-plugin-dts";
import del from "rollup-plugin-delete";
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import commonjs from "@rollup/plugin-commonjs";
import resolve from '@rollup/plugin-node-resolve';
import typescript from "rollup-plugin-typescript2";
import external from 'rollup-plugin-peer-deps-external';

const packageJson = require("./package.json")

export default [
  {
    input: './src/index.tsx',
    output: [
      {
        format: "cjs",
        sourcemap: true,
        exports: "default",
        file: packageJson.main
      },
      {
        format: "esm",
        sourcemap: true,
        exports: "default",
        file: packageJson.module
      }
    ],
    plugins: [
      postcss({
        plugins: [],
        minimize: true,
      }),
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/preset-react']
      }),
      external(),
      resolve(),
      terser(),
      commonjs(),
      typescript({
        rollupCommonJSResolveHack: false,
        clean: true, useTsconfigDeclarationDir: true
      }),
    ]
  },
  {
    input: "dist/types/index.d.ts",
    output: [{
      file: "dist/index.d.ts",
      format: "es",
      plugins: []
    }],
    plugins: [
      dts(),
      del({ targets: "dist/types", hook: "buildEnd" })
    ],
  }
];