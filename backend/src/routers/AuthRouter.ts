import { Router as CreateRouter } from "express"
import { Router } from "express-serve-static-core"
import AuthController from "../controllers/AuthController"
import AuthMiddlware from "../middlewares/AuthMiddlware"
import { body } from "express-validator"

const authRouter: Router = CreateRouter()
authRouter.get("/getAllUsers", AuthMiddlware, AuthController.getUsers)
authRouter.post("/registration", body("username").isLength({ max: 14 }), AuthController.registration)
authRouter.post("/login", AuthController.login)
authRouter.delete("/logout", AuthController.logout)

export default authRouter
