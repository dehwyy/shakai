import $api from "./httpAxios"
import { postAttrs } from "../store/slices/users-store"

interface inDataPost extends Omit<postAttrs, "id"> {
  userId?: string
}
const sendPost = async (data: inDataPost) => {
  console.log(data)
  await $api.post("/posts/create", data)
}

export default sendPost
