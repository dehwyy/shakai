import sendRegistration from "./sendRegistration"

interface inDataForm {
  username: string
  email: string
  password: string
}

const regUser = async (data: inDataForm): Promise<boolean> => {
  const response = await sendRegistration(data)
  localStorage.setItem("accessToken", response.data.accessToken)
  return Boolean(response.data.accessToken)
}

export default regUser
