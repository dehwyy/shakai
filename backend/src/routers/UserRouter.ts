import { Router as createRouter } from "express"
import { Router } from "express-serve-static-core"
import userController from "../controllers/UserController"

const router: Router = createRouter()
router.put("/editUser", userController.editUserInfo)
router.get("/get?:id", userController.getUserById)
router.get("/userInfo?:id", userController.getUserInfo)
export default router
