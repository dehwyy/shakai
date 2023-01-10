interface userUpdateFieldRequest {
  userId: string
  userData: { field: userPageFullInfoKeysT; fieldNewValue: string }
}

interface userMainDataResponse {
  _id: string
  email: string
  username: string
}

interface verifyToken {
  accessToken: string
}

interface inLoginData {
  password: string
  email?: string
  username?: string
}

interface inLoginResponse {
  user: userMainDataResponse
}

type userFullInfoT = { [key in userPageFullInfoKeysT]: string } & { userId: userMainDataResponse }
