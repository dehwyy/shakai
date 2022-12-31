import sendRegistration from "./sendRegistration"

interface inDataForm {
  username: string
  email: string
  password: string
}

const regUser = async (data: inDataForm): Promise<any> => {
  const response = await sendRegistration(data)
  localStorage.setItem("accessToken", response.data.accessToken)
  localStorage.setItem("userId", response.data.userId)
  return response.data
}

export default regUser
