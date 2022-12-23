import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import {Express} from "express-serve-static-core";
import authRouter from "./routers/AuthRouter";


const app: Express = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use("/users", authRouter)

export default app

