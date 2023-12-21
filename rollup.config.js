import typescript from 'rollup-plugin-typescript2'
import { rollupCopyFile } from './scripts/rollupCopyFile.js'

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
  plugins: [
    typescript(),
    rollupCopyFile('LICENCE'),
    rollupCopyFile('README.md'),
    rollupCopyFile('package.json'),
  ],
  external: ['react', 'react-dom']
}
