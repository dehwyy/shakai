import { RegisterOptions } from "react-hook-form"

export default {
  pattern: {
    value: /[a-z0-9_-]*@[a-z]*\.[a-z]*/i,
    message: "invalid email",
  },
} as RegisterOptions
