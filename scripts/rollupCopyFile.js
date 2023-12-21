import path from 'path'
import fs from 'fs'

export const rollupCopyFile = (filename) => {
  return {
    name: 'copy-file',
    generateBundle: () => {
      filename = filename.replace(/^\.\//, '')
      const dest = path.resolve(`./dist/${filename}`)
      const source = path.resolve(`./${filename}`)
      fs.copyFileSync(source, dest)
    },
  }
}
