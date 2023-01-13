import { Router as createRouter } from "express"
import { Router } from "express-serve-static-core"
import UsersListController from "../controllers/UsersListController"

const router: Router = createRouter()
router.get("/allUsers", UsersListController.getAllUsers)
export default router
