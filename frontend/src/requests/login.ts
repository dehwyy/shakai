import $api from "./httpAxios"
import Login from "../components/newAuthForm/Login"

interface inSubmitLoginData {
  username?: string
  email?: string
  password?: string
}

const login = async (data: inSubmitLoginData) => {
  const response = await $api.post("/users/login", data)
  localStorage.setItem("accessToken", response.data.data.tokens.accessToken)
  return response
}

export default login
