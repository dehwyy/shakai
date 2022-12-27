import React, { RefObject, useMemo, useRef, useState } from "react"
import {
  FlexBlock,
  FormCentered,
  FormWrapper,
  LoginOption,
  OptionsWrapper,
  Options,
  OptionalText,
} from "../LoginForm-style"
import AuthForm from "../AuthForm"
import AuthSign from "../AuthSign/AuthSign"
import AuthButton from "../AuthButton/AuthButton"

function LoginFormRouter() {
  const [isEmail, setEmail] = useState<boolean>(true)
  const ref = useRef<HTMLFormElement>() as RefObject<HTMLFormElement>
  const ref2 = useRef<HTMLFormElement>() as RefObject<HTMLFormElement>
  const data = useMemo(() => {
    return [
      {
        name: "email",
        validation: {
          pattern: {
            value: /[a-z0-9_-]+@[a-z]+.[a-z]/i,
            message: "invalid email",
          },
          required: "row is required",
        },
      },
    ]
  }, []) // redux soon
  const data2 = useMemo(() => {
    return [
      {
        name: "username",
        validation: {
          required: "row is required",
        },
      },
    ]
  }, []) // redux soon
  const nextButtonNavigation = "registration"

  return (
    <FormWrapper>
      <FormCentered>
        <OptionalText>Choose method of authorization</OptionalText>
        <OptionsWrapper>
          <Options>
            <LoginOption
              onClick={() => {
                setEmail(true)
                ref2.current?.reset()
              }}
              isChosen={isEmail}
            >
              Email
            </LoginOption>
            <LoginOption
              onClick={() => {
                setEmail(false)
                ref.current?.reset()
              }}
              isChosen={!isEmail}
            >
              Username
            </LoginOption>
          </Options>
        </OptionsWrapper>
        {isEmail ? (
          <AuthForm
            values={data}
            ref={ref}
            nextButtonNavigation={nextButtonNavigation}
          />
        ) : (
          <AuthForm
            values={data2}
            ref={ref2}
            nextButtonNavigation={nextButtonNavigation}
          />
        )}
        <FlexBlock>
          <AuthSign />
          <AuthButton
            onClick={() => {
              isEmail ? ref.current?.submit() : ref2.current?.submit()
            }}
          />
        </FlexBlock>
      </FormCentered>
    </FormWrapper>
  )
}

export default LoginFormRouter
