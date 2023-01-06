import $api from "./httpAxios"

const getUserImageById = async (id: string) => {
  const img = await $api.get(`/user/userImage?id=${id}`)
  console.log(img.data.profileImg)
  return img.data.profileImg
}

export default getUserImageById
