const postcss = require('rollup-plugin-postcss');
const nodeResolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const replace = require('@rollup/plugin-replace');
const typescript = require('@rollup/plugin-typescript');

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: 'dist/index.js',
      format: 'umd',
      sourcemap: 'inline',
    },
  ],
  plugins: [
    nodeResolve({
      browser: true,
    }),
    postcss({
      extract: true,
      extensions: [".css"]
    }),
    commonjs({
      include: [
        'node_modules/**',
      ]
    }),
    typescript({ tsconfig: './tsconfig.json' }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
};
