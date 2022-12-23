import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import {Express} from "express";
import authRouter from "./routers/AuthRouter";
import errorMiddleware from "./middlewares/errorMiddleware";

const app: Express = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use("/users", authRouter)
app.use(errorMiddleware)
app.get("/", (req, res) => {
    res.send({message: "yes"})
})
export default app

