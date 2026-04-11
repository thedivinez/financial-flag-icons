import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { transform } from 'esbuild';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const modulesDir = path.resolve(__dirname, '..', 'dist', 'modules');

async function collectJsFiles(dir) {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    const files = await Promise.all(entries.map(async (entry) => {
        const entryPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            return collectJsFiles(entryPath);
        }

        if (entry.isFile() && entry.name.endsWith('.js')) {
            return [entryPath];
        }

        return [];
    }));

    return files.flat();
}

async function minifyFile(filePath) {
    const source = await fs.readFile(filePath, 'utf8');
    const result = await transform(source, {
        format: 'esm',
        loader: 'js',
        minify: true,
        legalComments: 'none',
        target: 'es2017',
    });

    await fs.writeFile(filePath, result.code, 'utf8');
}

async function main() {
    const files = await collectJsFiles(modulesDir);
    await Promise.all(files.map(minifyFile));
    console.log(`Minified ${files.length} module files.`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});