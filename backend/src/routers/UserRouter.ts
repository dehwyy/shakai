import { Router as createRouter } from "express"
import { Router } from "express-serve-static-core"
import userController from "../controllers/UserController"

const router: Router = createRouter()
router.put("/editUserPageInfo", userController.editUserInfo)
router.get("/getUserMainInfo?:id", userController.getUserMainInfo)
router.get("/getUserPageInfo?:id", userController.getFullUserInfo)
router.get("/userImage?:id", userController.getImageByUserId)
export default router
