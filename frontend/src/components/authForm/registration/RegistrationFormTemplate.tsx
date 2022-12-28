import * as React from "react"
import { RefObject, useMemo, useRef } from "react"
import {
  FlexBlock,
  FormCentered,
  FormWrapper,
  OptionsWrapper,
  OptionalText,
} from "../LoginForm-style"
import AuthForm from "../AuthForm"
import AuthSign from "../AuthSign/AuthSign"
import AuthButton from "../AuthButton/AuthButton"
import { RegisterOptions } from "react-hook-form"

const RegistrationTemplate = () => {
  const ref3 = useRef<HTMLFormElement>() as RefObject<HTMLFormElement>
  const data2 = useMemo(() => {
    return [
      {
        name: "email",
        validation: {
          minLength: {
            value: 4,
            message: "Minimal length of password is 4",
          },
        } as RegisterOptions,
      },
      {
        name: "username",
        validation: {
          maxLength: {
            value: 14,
            message: "Max length is 14 chars",
          },
        },
      },
      {
        name: "password",
        validation: {
          maxLength: {
            value: 14,
            message: "Max length is 14 chars",
          },
        },
        inputType: "current-password",
      },
    ]
  }, []) // redux soon
  return (
    <FormWrapper>
      <FormCentered>
        <OptionsWrapper>
          <OptionalText>Registration</OptionalText>
        </OptionsWrapper>
        <AuthForm
          values={data2}
          ref={ref3}
        />
        <FlexBlock>
          <AuthSign />
          <AuthButton
            onClick={() => {
              ref3.current?.submit()
            }}
          />
        </FlexBlock>
      </FormCentered>
    </FormWrapper>
  )
}

export default RegistrationTemplate
