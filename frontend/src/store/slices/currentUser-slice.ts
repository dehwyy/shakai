import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import currentUserApi from "../req/currentUser-slice-api"

const state = {
  isAuth: false,
  username: "user",
  email: "user's email",
  _id: "",
}

const currentUserStore = createSlice({
  name: "currentUserStore",
  initialState: state,
  reducers: {
    changeAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload
    },
  },
  extraReducers: builder => {
    builder.addMatcher(currentUserApi.endpoints.verifyToken.matchFulfilled, (state, { payload }) => {
      state.email = payload.email
      state._id = payload._id
      state.username = payload.username
      state.isAuth = true
    })
    builder.addMatcher(currentUserApi.endpoints.logout.matchFulfilled, state => {
      localStorage.removeItem("accessToken")
      state.email = ""
      state._id = ""
      state.username = ""
      state.isAuth = false
    })
  },
})

export const { changeAuth } = currentUserStore.actions
export default currentUserStore.reducer
