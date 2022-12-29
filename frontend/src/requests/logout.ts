import $api from "./httpAxios"

const logout = async () => {
  localStorage.removeItem("accessToken")
  await $api.delete("users/logout")
}

export default logout
