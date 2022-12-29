import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const formState = {
  username: "",
  email: "",
  password: "",
}

const formStore = createSlice({
  name: "loginFormStore",
  initialState: { formState },
  reducers: {
    updateUsername: (state, action: PayloadAction<string>) => {
      state.formState.username = action.payload
    },
    updateEmail: (state, action: PayloadAction<string>) => {
      state.formState.username = action.payload
    },
    resetFormState: (state) => {
      state.formState = {
        username: "",
        email: "",
        password: "",
      }
    },
  },
})

export const { updateUsername, updateEmail, resetFormState } = formStore.actions
export default formStore.reducer
