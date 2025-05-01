import { defineConfig } from 'tsdown'
import * as fs from 'fs'
import * as path from 'path'
import LightningCSS from 'unplugin-lightningcss/rolldown'


export default defineConfig({
  plugins: [
    LightningCSS({
      options: {
        minify: true,
      }
    })
  ],
  entry: [
    './src/index.ts',
  ],
  target: 'node20.18',
  clean: true,
  dts: true,
  platform: 'neutral',
})
