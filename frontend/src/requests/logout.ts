import $api from "./httpAxios"

const logout = async () => {
  localStorage.removeItem("accessToken")
  localStorage.removeItem("currentUsername")
  localStorage.removeItem("userId")
  await $api.delete("users/logout")
}

export default logout
