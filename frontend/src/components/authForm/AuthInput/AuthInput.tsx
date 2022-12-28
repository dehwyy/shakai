import * as React from "react"
import { PropsWithChildren } from "react"
import { ErrorSpan, AInput, AInputWrapper } from "./AuthInput-style"
import { InputProps } from "../auth"

function AuthInput<T extends Record<string, string | number>>({
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
        placeholder={name}
        data-testid="authInput"
      />
      <ErrorSpan>{message as string}</ErrorSpan>
    </AInputWrapper>
  )
}

export default AuthInput
