import $api from "./httpAxios"

class AuthReq {
  async login(data: Partial<inDataForm>) {
    const response = await $api.post("/users/login", data)
    localStorage.setItem("accessToken", response.data.data.tokens.accessToken)
    return response
  }
  async logout() {
    localStorage.removeItem("accessToken")
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
