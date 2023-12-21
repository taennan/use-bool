import typescript from 'rollup-plugin-typescript2'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/es/index.js',
      format: 'es',
      exports: 'named',
      sourcemap: true,
      strict: false
    },
    {
      file: 'dist/cjs/index.cjs',
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      strict: false
    }
  ],
  plugins: [typescript()],
  external: ['react', 'react-dom']
}
