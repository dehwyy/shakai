import app from "./app"
import mongoose from "mongoose"
mongoose.set("strictQuery", true)
import * as dotenv from "dotenv"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = fileURLToPath(new URL(".", import.meta.url))
dotenv.config({ path: path.resolve(__dirname, "..", ".env") })

const PORT = 727
const DB = process.env.DATABASE || ""
const startServer = async () => {
  try {
    await mongoose.connect(DB)
    app.listen(PORT, () => console.log(`server started in port ${PORT}`))
  } catch (e) {
    console.log(e)
  }
}
startServer().then(() => console.log("SUCCESS"))
