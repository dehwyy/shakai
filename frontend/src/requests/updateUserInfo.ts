import $api from "./httpAxios"
import { user } from "../store/slices/users-store"

interface userField {
  field: keyof user
  fieldNewValue: string
}

const updateUserInfo = async (id: string, userData: userField[]) => {
  const response = await $api.put(`/user/editUser`, {
    userId: id,
    userData,
  })
  return response
}

export default updateUserInfo
