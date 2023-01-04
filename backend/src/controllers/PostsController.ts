import { Request, Response, NextFunction } from "express-serve-static-core"
import PostsService, { postAttrs } from "../services/PostsService"

class PostsController {
  async createPost(req: Request<object, object, { postData: postAttrs }>, res: Response, next: NextFunction) {
    try {
      const { postData } = req.body
      const response = await PostsService.createPost(postData)
      res.json({ message: "success in post creation" })
    } catch (e) {
      next(e)
    }
  }
  async getPostsByUserId(req: Request<object, object, object, { id: string }>, res: Response, next: NextFunction) {
    try {
      const { id } = req.query
      const posts = await PostsService.getUserById(id)
      res.json({ posts })
    } catch (e) {
      next(e)
    }
  }
}

export default new PostsController()
