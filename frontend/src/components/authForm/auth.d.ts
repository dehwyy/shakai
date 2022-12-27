import { ChangeHandler, FieldErrors, RegisterOptions } from "react-hook-form"
import { Ref } from "react"

interface AuthButtonProps {
  onClick: () => void
}

type TInputValues = {
  [key: string]: any
}

interface InputProps<T extends TInputValues> {
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
  ref: Ref<any>
  name: string
}

interface inLoginRef {
  reset: () => void
  submit: (data: any) => void
}

interface inLoginForm {
  values: {
    name: string
    validation?: RegisterOptions
    inputType?: string
  }[]
  nextButtonNavigation?: string
}
