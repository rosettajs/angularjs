import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

export default {
  input: 'index.js',
  output: [
    {
      file: 'dist/rosetta-angularjs.es.js',
      format: 'es',
    },
    {
      file: 'dist/rosetta-angularjs.umd.js',
      format: 'umd',
    },
    {
      file: 'examples/rosetta-angularjs.umd.js',
      format: 'umd',
    },
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**',
      plugins: ['angularjs-annotate'],
      presets: 'es2015-rollup',
    }),
    uglify(),
  ],
};
