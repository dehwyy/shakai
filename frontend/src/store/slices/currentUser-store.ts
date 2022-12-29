import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const user = {
  username: "",
  isAuth: false,
}

const currentUserStore = createSlice({
  name: "currentUserStore",
  initialState: { user },
  reducers: {
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.user.isAuth = action.payload
    },
  },
})

export const { setAuth } = currentUserStore.actions
export default currentUserStore.reducer
