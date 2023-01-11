import * as ESBuild from "esbuild"
import * as path from "path"
import { Plugin } from "esbuild"
import { rm } from "fs/promises"
const myCleanPlugin: Plugin = {
  name: "CleanPlugin",
  setup: build => {
    build.onStart(async () => {
      try {
        const outdir = build.initialOptions.outdir
        if (outdir) await rm(outdir, { recursive: true })
      } catch (e) {
        console.log(e, "failed to clean dir")
      }
    })
  },
}

const dev = process.env.MODE === "dev"

ESBuild.build({
  platform: "node",
  outdir: path.resolve(__dirname, "dist"),
  entryPoints: [path.resolve(__dirname, "src", "app.ts")],
  bundle: true,
  tsconfig: path.resolve(__dirname, "tsconfig.json"),
  minify: !dev,
  format: "esm",
  entryNames: "[dir]/bundle.[name]-[hash]",
  plugins: [myCleanPlugin],
})
