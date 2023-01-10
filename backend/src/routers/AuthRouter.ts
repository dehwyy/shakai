import { Router as CreateRouter } from "express"
import { Router } from "express-serve-static-core"
import AuthController from "../controllers/AuthController"
import { body } from "express-validator"
import authMiddlware from "../middlewares/AuthMiddlware"

const authRouter: Router = CreateRouter()
authRouter.get(
  "/verifyUser",
  (req, res, next) => {
    req.flag = true
    next()
  },
  authMiddlware,
  AuthController.verifyUserLogin,
)
authRouter.post("/registration", body("username").isLength({ max: 14 }), AuthController.registration)
authRouter.post("/login", AuthController.login)
authRouter.delete("/logout", AuthController.logout)

export default authRouter
