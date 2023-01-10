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

interface registrationResponse {
  _id: string
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

interface user {
  id: string
  email: string
  username: string
  profileImg?: string
  backgroundImg?: string
  info?: string
  briefInfo?: string
  location?: string
  education?: string
  dateOfBirth?: string
  interests?: string
  activity?: string
  favouriteMusic?: string
  favouriteBooks?: string
  favouriteGames?: string
  friends?: string[]
  posts?: postAttrs[]
}
interface postAttrs {
  id?: string
  dateOfCreate?: string
  postText?: string
  postImage?: string
}
interface inDataForm {
  username: string
  email: string
  password: string
}
interface inRegResponse {
  userId: string
  username: string
  message: string
  accessToken: string
}

interface inErrorResponse {
  error: { status: number; data: { statusCode: number; message: string } }
}
