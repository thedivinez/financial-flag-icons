const path = require('path');

/** @type {import('@rspack/core').Configuration[]} */
module.exports = [
    // ── CommonJS bundle ──────────────────────────────────────────────────────
    {
        mode: 'production',
        entry: './src/index.tsx',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'index.js',
            library: { type: 'commonjs2' },
            clean: false,
        },
        externals: {
            react: 'react',
            'react/jsx-runtime': 'react/jsx-runtime',
        },
        module: {
            rules: [{
                test: /\.tsx?$/,
                loader: 'builtin:swc-loader',
                options: {
                    jsc: {
                        parser: { syntax: 'typescript', tsx: true },
                        transform: { react: { runtime: 'automatic' } },
                        target: 'es2017',
                    },
                },
            }],
        },
        resolve: { extensions: ['.tsx', '.ts', '.js'] },
        optimization: { minimize: true },
    },

    // ── ESM bundle (tree-shakeable) ───────────────────────────────────────────
    {
        mode: 'production',
        entry: './src/index.tsx',
        experiments: { outputModule: true },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'index.esm.js',
            library: { type: 'module' },
            clean: false,
        },
        externalsType: 'module',
        externals: ['react', 'react/jsx-runtime'],
        module: {
            rules: [{
                test: /\.tsx?$/,
                loader: 'builtin:swc-loader',
                options: {
                    jsc: {
                        parser: { syntax: 'typescript', tsx: true },
                        transform: { react: { runtime: 'automatic' } },
                        target: 'es2017',
                    },
                },
            }],
        },
        resolve: { extensions: ['.tsx', '.ts', '.js'] },
        optimization: { minimize: true },
    },
];
