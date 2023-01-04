import Posts from "../models/Posts"
export interface postAttrs {
  userId: string
  dateOfCreate: string
  postText?: string
  postImage?: string
}

class PostsService {
  async createPost(data: postAttrs) {
    const newPost = await Posts.create(data)
    return newPost
  }
  async getUserById(id: string) {
    const userPosts = await Posts.find({ userId: id })
    return userPosts
  }
}

export default new PostsService()
