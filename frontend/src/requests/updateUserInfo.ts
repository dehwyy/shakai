import $api from "./httpAxios"

interface userField {
  field: string
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
