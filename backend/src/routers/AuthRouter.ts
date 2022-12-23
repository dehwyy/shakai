import {Router as CreateRouter} from "express";
import {Router} from "express-serve-static-core";
import AuthController from "../controllers/AuthController";


const authRouter: Router = new (CreateRouter as any)()
authRouter.get("/", AuthController.TESTgetUsers)
authRouter.post("/test", AuthController.TESTgetUser)
authRouter.post("/reg", AuthController.registration)
authRouter.post("/login", AuthController.login)
authRouter.delete("/test", AuthController.TESTdeleteUser)

export default authRouter