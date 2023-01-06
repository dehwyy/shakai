import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import post from "../../components/profile/Posts/Post"

export interface user {
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
export interface postAttrs {
  id?: string
  dateOfCreate?: string
  postText?: string
  postImage?: string
}
type userAdd = Omit<user, "email" | "username">
const users = [] as user[]

const usersStore = createSlice({
  name: "usersStore",
  initialState: { users },
  reducers: {
    uploadUser: (state, action: PayloadAction<user>) => {
      if (!state.users.find(user => user.id === action.payload.id)) {
        state.users.push(action.payload)
      }
    },
    updateUserInfo: (state, action: PayloadAction<userAdd>) => {
      const idx = state.users.findIndex(user => user.id === action.payload.id)
      if (~idx) {
        state.users[idx] = { ...state.users[idx], ...action.payload }
      }
    },
  },
})

export const { uploadUser, updateUserInfo } = usersStore.actions
export default usersStore.reducer
