import { Request, Response, NextFunction } from "express-serve-static-core"
import PostsService, { postAttrs } from "../services/PostsService"

class PostsController {
  async createPost(req: Request<object, object, postAttrs>, res: Response, next: NextFunction) {
    try {
      const postData = req.body
      const response = await PostsService.createPost(postData)
      res.json({ message: "success in post creation" })
    } catch (e) {
      next(e)
    }
  }
  async getPostsByUserId(req: Request<object, object, object, { userId: string }>, res: Response, next: NextFunction) {
    try {
      const { userId } = req.query
      const posts = await PostsService.getUserById(userId)
      res.json({ posts })
    } catch (e) {
      next(e)
    }
  }
  async deletePostByPostId(
    req: Request<object, object, object, { postId: string }>,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { postId } = req.query
      const deletedPost = await PostsService.deleteUserById(postId)
      res.json({ message: "Success" })
    } catch (e) {
      next(e)
    }
  }
}

export default new PostsController()
