import $api from "./httpAxios"

class UserData {
  async getUser(id: string) {
    const response = await $api.get(`/user/get?id=${id}`)
    return response
  }
  async getPosts(id: string): Promise<postAttrs[]> {
    const response = await $api.get(`posts/get?id=${id}`)
    const modifiedPosts = response.data.posts?.map((post: postAttrsExtended) => {
      return {
        id: post._id,
        dateOfCreate: post.dateOfCreate,
        postText: post.postText,
        postImage: post.postImage,
      }
    })
    return modifiedPosts.reverse()
  }
  async deletePost(postId: string) {
    const response = await $api.delete(`/posts/delete?id=${postId}`)
    return response
  }
  async getUserFullInfo(id: string) {
    const response = await $api.get(`/user/userInfo?id=${id}`)
    return response
  }
  async getUserImageById(id: string) {
    const img = await $api.get(`/user/userImage?id=${id}`)
    return img.data.profileImg
  }
  async updateUserInfo(id: string, userData: userField[]) {
    const response = await $api.put(`/user/editUser`, {
      userId: id,
      userData,
    })
    return response
  }
}

export default new UserData()
