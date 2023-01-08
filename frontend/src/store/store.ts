import { configureStore } from "@reduxjs/toolkit"
import PostsApi from "./req/posts-slice.api"
import UserPageApi from "./req/userPage-slice-api"

const store = configureStore({
  reducer: {
    [PostsApi.reducerPath]: PostsApi.reducer,
    [UserPageApi.reducerPath]: UserPageApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(PostsApi.middleware, UserPageApi.middleware),
})

export default store
