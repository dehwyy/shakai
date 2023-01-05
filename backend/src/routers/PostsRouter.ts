import { Router as CreateRouter } from "express"
import { Router } from "express-serve-static-core"
import PostsController from "../controllers/PostsController"

const router: Router = CreateRouter()

router.post("/create", PostsController.createPost)
router.get("/get?:id", PostsController.getPostsByUserId)
router.delete("/delete?:id", PostsController.deletePostByPostId)
export default router
