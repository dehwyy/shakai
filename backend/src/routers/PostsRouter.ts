import { Router as CreateRouter } from "express"
import { Router } from "express-serve-static-core"
import PostsController from "../controllers/PostsController"

const router: Router = CreateRouter()

router.post("/createPost", PostsController.createPost)
router.get("/getPostsByUserId?:userId", PostsController.getPostsByUserId)
router.delete("/deletePost?:postId", PostsController.deletePostByPostId)
export default router
