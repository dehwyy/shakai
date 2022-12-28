import express, { Express, json } from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import authRouter from "./routers/AuthRouter"
import errorMiddleware from "./middlewares/errorMiddleware"
import userRouter from "./routers/UserRouter"

const app: Express = express()
app.use(json())
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:1727",
  }),
)
app.use(cookieParser())
app.use("/users", authRouter)
app.use("/user", userRouter)
app.use(errorMiddleware)
export default app
