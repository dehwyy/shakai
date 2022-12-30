import sendRegistration from "./sendRegistration"
import { AxiosResponse } from "axios"

interface inDataForm {
  username: string
  email: string
  password: string
}

const regUser = async (data: inDataForm): Promise<any> => {
  const response = await sendRegistration(data)
  localStorage.setItem("accessToken", response.data.accessToken)
  return response.data
}

export default regUser
