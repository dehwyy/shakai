import $api from "./httpAxios"

const getUserFullInfo = async (id: string) => {
  const response = await $api.get(`/user/userInfo?id=${id}`)
  return response
}

export default getUserFullInfo
