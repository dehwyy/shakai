import $api from "./httpAxios"

const getUser = async (id: string) => {
  const response = await $api.get(`/user/get?id=${id}`)
  return response
}

export default getUser
