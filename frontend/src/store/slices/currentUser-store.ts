import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const user = {
  username: "username123",
  isAuth: false,
  userId: "",
}

const currentUserStore = createSlice({
  name: "currentUserStore",
  initialState: { user },
  reducers: {
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.user.isAuth = action.payload
    },
    setUsername: (state, action: PayloadAction<string>) => {
      state.user.username = action.payload
    },
    setUserId: (state, action: PayloadAction<string>) => {
      state.user.userId = action.payload
    },
  },
})

export const { setAuth, setUsername, setUserId } = currentUserStore.actions
export default currentUserStore.reducer
