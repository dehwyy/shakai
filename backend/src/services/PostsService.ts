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
  async deleteUserById(id: string) {
    const deletedPosts = await Posts.findOneAndDelete({ _id: id })
    return deletedPosts
  }
}

export default new PostsService()
