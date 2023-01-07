import $api from "./httpAxios"

class UserPostData {
  async deletePost(postId: string) {
    const response = await $api.delete(`/posts/delete?id=${postId}`)
    return response
  }
  async sendPost(data: inDataPost) {
    await $api.post("/posts/create", data)
  }
}

export default new UserPostData()
