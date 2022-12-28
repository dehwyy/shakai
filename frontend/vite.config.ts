import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { chunkSplitPlugin } from "vite-plugin-chunk-split"
export default defineConfig({
  plugins: [react(), chunkSplitPlugin({ strategy: "default" })],
  server: {
    port: 1727,
  },
})
