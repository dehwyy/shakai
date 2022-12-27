import * as React from "react"
import { PropsWithChildren } from "react"
import { ErrorSpan, AInput, AInputWrapper } from "./AuthInput-style"
import { InputProps, TInputValues } from "../auth"

function AuthInput<T extends TInputValues>({
  register,
  errors,
  name,
  customKey,
  validation,
  inputType,
}: PropsWithChildren<InputProps<T>>) {
  const message = Object.values(errors)[customKey]?.message
  return (
    <AInputWrapper>
      <AInput
        {...register(name, validation)}
        type={inputType}
        data-testid="authInput"
      />
      <ErrorSpan>{message as string}</ErrorSpan>
    </AInputWrapper>
  )
}

export default AuthInput
