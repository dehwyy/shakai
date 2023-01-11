import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { chunkSplitPlugin } from "vite-plugin-chunk-split"
import { ViteMinifyPlugin } from "vite-plugin-minify"
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-styled-components", { displayName: true, fileName: false }]],
      },
    }),
    chunkSplitPlugin({ strategy: "default" }),
    ViteMinifyPlugin(),
  ],
  server: {
    port: 1727,
  },
})
