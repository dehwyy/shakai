import { createSlice } from "@reduxjs/toolkit"

interface user {
  id: string
  email: string
  username: string
  profileImg?: string
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
}
const usersState = {
  users: [
    {
      id: "63aba779a16790341e47d35b",
      username: "stepan",
      location: "usa",
      profileImg: "https://i.redd.it/lznaqsx973b41.jpg",
    },
    {
      id: "63aba779a16790341e47d35b",
      username: "12345678901234",
      location: "russia",
      profileImg: "https://i.redd.it/lznaqsx973b41.jpg",
    },
    {
      id: "63aba779a16790341e47d35b",
      username: "dehwyy",
      location: "jp",
      profileImg: "https://i.redd.it/lznaqsx973b41.jpg",
    },
    {
      id: "63aba779a16790341e47d35b",
      username: "dehwyy",
      location: "かわち野高等学校 (Kawachino High School",
      profileImg: "https://i.redd.it/lznaqsx973b41.jpg",
    },
  ],
} as {
  users: user[]
}
const usersStore = createSlice({
  name: "usersStore",
  initialState: usersState,
  reducers: {
    uploadUsers: (state, action) => {
      state.users = action.payload
    },
  },
})

export const { uploadUsers } = usersStore.actions
export default usersStore.reducer
