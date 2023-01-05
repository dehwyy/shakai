import $api from "./httpAxios"

const deletePost = async (postId: string) => {
  const response = await $api.delete(`/posts/delete?id=${postId}`)
  return response
}

export default deletePost
