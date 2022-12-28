import $api from "./httpAxios"
import { AxiosResponse } from "axios"

interface inRegData {
  email: string
  username: string
  password: string
}

interface inRegResponse {
  message: string
  accessToken: string
}

// prettier-ignore
const sendRegistration = async (data: inRegData): Promise<AxiosResponse<inRegResponse>> => {
  return $api.post<inRegResponse>("/users/registration", { ...data })
}

export default sendRegistration
