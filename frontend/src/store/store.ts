import { configureStore } from "@reduxjs/toolkit"
import PostsApi from "./req/posts-slice.api"

const store = configureStore({
  reducer: {
    [PostsApi.reducerPath]: PostsApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(PostsApi.middleware),
})

export default store
