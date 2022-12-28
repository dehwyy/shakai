import { configureStore } from "@reduxjs/toolkit"
import UsersStore from "./slices/users-store"
import FormStore from "./slices/form-store"
const store = configureStore({
  reducer: {
    UsersStore,
    FormStore,
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
