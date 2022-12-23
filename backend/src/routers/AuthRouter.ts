import {Router as CreateRouter} from "express";
import {Router} from "express-serve-static-core";
import AuthController from "../controllers/AuthController";


const authRouter: Router = new (CreateRouter as any)()
authRouter.get("/", AuthController.getUsers)
authRouter.post("/reg", AuthController.registration)
authRouter.post("/login", AuthController.login)

export default authRouter