export default {
  input: 'src/index.js',
  output: [
    {
      file: 'lib/bundle.umd.js',
      format: 'umd',
      name: 'rollupModule',
    },
    {
      file: 'lib/bundle.esm.js',
      format: 'esm',
    },
  ],
}
