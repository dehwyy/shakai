import $api from "./httpAxios"

class AuthReq {
  async login(data: Partial<inDataForm>) {
    const response = await $api.post("/users/login", data)
    localStorage.setItem("accessToken", response.data.data.tokens.accessToken)
    localStorage.setItem("userId", response.data.data.user._id)
    return response
  }
  async logout() {
    localStorage.removeItem("accessToken")
    localStorage.removeItem("currentUsername")
    localStorage.removeItem("userId")
    await $api.delete("users/logout")
  }
  async regUser(data: inDataForm): Promise<{ userId: string }> {
    const response = await $api.post<inRegResponse>("/users/registration", data)
    const { accessToken, userId, username } = response.data
    localStorage.setItem("accessToken", accessToken)
    localStorage.setItem("userId", userId)
    localStorage.setItem("currentUsername", username)
    return {
      userId,
    }
  }
}

export default new AuthReq()
