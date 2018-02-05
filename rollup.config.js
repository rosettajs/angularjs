import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';

export default [
  {
    input: 'index.js',
    output: [
      {
        file: 'dist/rosetta-angularjs.es.js',
        format: 'es',
      },
      {
        file: 'dist/rosetta-angularjs.umd.js',
        format: 'umd',
        name: 'RosettaAngularjs',
      },
    ],
    plugins: [
      babel({
        exclude: 'node_modules/**',
        plugins: ['angularjs-annotate'],
        presets: 'es2015-rollup',
      }),
      commonjs(),
      resolve(),
      uglify(),
    ],
  },
  {
    input: 'index.js',
    output: {
      file: 'examples/rosetta-angularjs.umd.js',
      format: 'umd',
      name: 'RosettaAngularjs',
    },
    plugins: [
      babel({
        exclude: 'node_modules/**',
        plugins: ['angularjs-annotate'],
        presets: 'es2015-rollup',
      }),
      commonjs(),
      resolve(),
    ],
  },
];
