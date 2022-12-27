import { ChangeHandler, FieldErrors, RegisterOptions } from "react-hook-form"
import { Ref, SyntheticEvent } from "react"

interface AuthButtonProps {
  onClick: () => void
}

interface InputProps<T extends Record<string, string | number>> {
  register: (name: keyof T, options?: RegisterOptions<T>) => ReturnInputRegister
  errors: FieldErrors<TInputValues>
  name: string
  customKey: number
  validation?: RegisterOptions
  inputType: string
}

interface ReturnInputRegister {
  onChange: ChangeHandler
  onBlur: ChangeHandler
  ref: Ref<HTMLFormElement>
  name: string
}

interface inLoginRef {
  reset: () => void
  submit: (data: SyntheticEvent) => void
}

interface inLoginForm {
  values: {
    name: string
    validation?: RegisterOptions
    inputType?: string
  }[]
  nextButtonNavigation?: string
}
