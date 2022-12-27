import * as React from "react"
import { FC } from "react"
import { Button } from "./AuthButton-style"
import { AuthButtonProps } from "../auth"

const AuthButton: FC<AuthButtonProps> = ({ onClick }) => {
  return (
    <Button
      type="submit"
      onClick={onClick}
    >
      Next
    </Button>
  )
}

export default AuthButton
