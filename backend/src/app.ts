import express, { Express, json } from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import authRouter from "./routers/AuthRouter"
import errorMiddleware from "./middlewares/errorMiddleware"

const app: Express = express()
app.use(json())
app.use(cors())
app.use(cookieParser())
app.use("/users", authRouter)
app.use(errorMiddleware)
export default app
