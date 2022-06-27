export default {
  input: 'src/index.js',
  output: [
    {
      file: 'lib/bundle.iife.js',
      format: 'iife',
      name: 'rollupModule',
    },
    {
      file: 'lib/bundle.cjs.js',
      format: 'cjs',
    },
    {
      file: 'lib/bundle.esm.js',
      format: 'esm',
    },
  ],
}
