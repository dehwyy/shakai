import $api from "./httpAxios"
import { postAttrs } from "../store/slices/users-store"

interface postAttrsExtended extends postAttrs {
  userId?: string
  __v?: string
}

const getPosts = async (id: string) => {
  const response = await $api.get(`posts/get?id=${id}`)
  const modifiedPosts = response.data.posts?.map((post: postAttrsExtended) => {
    return {
      id: post.id,
      dateOfCreate: post.dateOfCreate,
      postText: post.postText,
      postImage: post.postImage,
    }
  })
  return modifiedPosts
}

export default getPosts
