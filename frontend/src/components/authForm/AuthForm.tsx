import * as React from "react"
import {
  forwardRef,
  RefObject,
  useImperativeHandle,
  useRef,
  SyntheticEvent,
} from "react"
import { useForm } from "react-hook-form"
import AuthInput from "./AuthInput/AuthInput"
import { Form } from "./LoginForm-style"
import { inLoginForm, inLoginRef } from "./auth"
import { useNavigate } from "react-router-dom"

const AuthForm = forwardRef<inLoginRef, inLoginForm>(
  ({ values, nextButtonNavigation }, ref) => {
    const navigate = useNavigate()
    const {
      handleSubmit,
      register,
      formState: { errors },
      reset,
      clearErrors,
    } = useForm({
      mode: "onBlur",
    })
    const formRef = useRef() as RefObject<HTMLFormElement>
    useImperativeHandle(ref, () => ({
      reset: () => {
        reset()
        clearErrors()
      },
      submit: (e: SyntheticEvent) => {
        handleSubmit((data) => {
          console.log(data)
          reset()
          {
            nextButtonNavigation && navigate(nextButtonNavigation)
          }
        })(e)
      },
    }))
    const names = [...values.map((value) => value.name)] as const
    type TValues = typeof names[number]
    return (
      <Form ref={formRef}>
        {values.map((value, index) => {
          return (
            <AuthInput<Record<TValues, string>>
              name={value.name}
              validation={value.validation}
              inputType={value.inputType || "text"}
              register={register}
              errors={errors}
              key={index}
              customKey={index}
            />
          )
        })}
      </Form>
    )
  },
)
AuthForm.displayName = "AuthForm"

export default AuthForm
