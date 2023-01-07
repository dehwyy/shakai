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
interface inDataPost extends Omit<postAttrs, "id"> {
  userId?: string
}

interface postAttrsExtended extends postAttrs {
  userId?: string
  _id: string
  __v?: string
}

interface userField {
  field: keyof user
  fieldNewValue: string
}
