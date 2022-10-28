const postcss = require('rollup-plugin-postcss');
const babel = require('@rollup/plugin-babel');
const nodeResolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const replace = require('@rollup/plugin-replace');

export default {
  input: 'src/index.js',
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
    babel({
      // babelrc: false,
      presets: [['@babel/preset-env', { modules: false }], '@babel/preset-react']
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
};
