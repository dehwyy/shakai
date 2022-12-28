import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const formState = {
  username: "",
  email: "",
  password: "",
}

const formStore = createSlice({
  name: "formStore",
  initialState: { formState },
  reducers: {
    updateUsername: (state, action: PayloadAction<string>) => {
      state.formState.username = action.payload
    },
    updateEmail: (state, action: PayloadAction<string>) => {
      state.formState.username = action.payload
    },
    resetFormState: (state) => {
      console.log(state, "form was reset")
      state.formState = { ...formState }
    },
  },
})

export const { resetFormState } = formStore.actions
export default formStore.reducer
