import { Router as CreateRouter } from "express"
import { Router } from "express-serve-static-core"
import AuthController from "../controllers/AuthController"

const authRouter: Router = CreateRouter()
authRouter.get("/getAllUsers", AuthController.getUsers)
authRouter.post("/getOneUser", AuthController.getUser)
authRouter.delete("/deleteOneUser", AuthController.deleteUser)
authRouter.post("/reg", AuthController.registration)
authRouter.post("/login", AuthController.login)
authRouter.post("/token/getById", AuthController.getToken)

export default authRouter
