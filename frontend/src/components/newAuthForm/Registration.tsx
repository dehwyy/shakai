import * as React from "react"
import {
  FlexBlock,
  FormCentered,
  FormWrapper,
  LoginOption,
  OptionsWrapper,
  OptionalText,
  Options,
  Form,
} from "./authComponents/AuthGlobal-styles"
import { Sign } from "./authComponents/Sign.style"
import { Button } from "./authComponents/Button-style"
import { AInputWrapper, AInput, ErrorSpan } from "./authComponents/Input-style"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import regUser from "../../requests/regUser"
import { useTypedDispatch } from "../../store/typed-hooks"
import { setAuth, setUserId, setUsername } from "../../store/slices/currentUser-store"
import emailValidation from "./validation/emailValidation"
import usernameValidation from "./validation/usernameValidation"
import passwordValidation from "./validation/passwordValidation"

interface inDataForm {
  username: string
  email: string
  password: string
}

const Registration = () => {
  //prettier-ignore
  const {register, formState: {errors, isValid}, reset, handleSubmit, getValues} = useForm<inDataForm>({
    mode: "onBlur",
  })
  const navigate = useNavigate()
  const dispatch = useTypedDispatch()
  const submitHandler = async (data: inDataForm) => {
    const response = await regUser(data)
    if (response) {
      dispatch({ type: setAuth, payload: true })
      localStorage.setItem("currentUsername", response.username)
      dispatch({ type: setUserId, payload: response.userId })
      navigate(`/content/profile/${response.userId}`)
    }
    reset()
  }
  const required = { required: { value: true, message: "field is required" } }
  return (
    <FormWrapper>
      <FormCentered>
        <OptionsWrapper>
          <OptionalText>TEXT</OptionalText>
        </OptionsWrapper>
        <Form onSubmit={handleSubmit(submitHandler)}>
          <AInputWrapper>
            <AInput {...register("email", { ...emailValidation, ...required })} placeholder="email" />
            {errors.email && <ErrorSpan>{errors.email.message as string}</ErrorSpan>}
          </AInputWrapper>
          <AInputWrapper>
            <AInput {...register("username", { ...usernameValidation, ...required })} placeholder="username" />
            {errors.username && <ErrorSpan>{errors.username.message as string}</ErrorSpan>}
          </AInputWrapper>
          <AInputWrapper>
            <AInput {...register("password", passwordValidation)} type="password" placeholder="password" />
            {errors.password && <ErrorSpan>{errors.password.message as string}</ErrorSpan>}
          </AInputWrapper>
          <FlexBlock>
            <Sign onClick={() => navigate("/")}>
              Already have an account? <br />
              Login now !
            </Sign>
            <Button type="submit">Next</Button>
          </FlexBlock>
        </Form>
      </FormCentered>
    </FormWrapper>
  )
}

export default Registration
