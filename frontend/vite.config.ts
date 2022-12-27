import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import {ViteMinifyPlugin} from "vite-plugin-minify"
import babelPlugin from "vite-plugin-babel"

export default defineConfig({
  plugins: [react(), ViteMinifyPlugin({}), babelPlugin({
    filter: /\.[tj]sx?$/
  })],
  server: {
    port: 1727,
  },
})
