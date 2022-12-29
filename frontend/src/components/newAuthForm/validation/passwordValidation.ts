import { RegisterOptions } from "react-hook-form"

export default {
  required: {
    value: true,
    message: "field is required",
  },
  minLength: {
    value: 4,
    message: "min length is 4",
  },
} as RegisterOptions
