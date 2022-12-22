import express from "express"
import {Request, Express, Response} from "express-serve-static-core";


const app: Express = express()
app.use(express.json())
app.get("/", (req: Request, res: Response) => {
    res.send("ABOBA")
})

export default app

