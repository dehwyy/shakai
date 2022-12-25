import React, {FC, forwardRef, RefObject, useEffect, useImperativeHandle, useRef} from 'react';
import {useForm} from "react-hook-form";
import {ErrorSpan, FlexBlock} from "../LoginForm-style";

export enum etp {
    "email",
    "username"
}

interface inLoginForm {
    tp: etp.email | etp.username,
}

interface inLoginRef {
    reset: () => void
}

const LoginForm = forwardRef<inLoginRef, inLoginForm>(({tp}, ref) => {
    const {handleSubmit, register, formState: {isValid, errors}, reset, clearErrors} = useForm<{
        usernameOrEmail: string
    }>({
        mode: "onBlur",
    })
    const formRef = useRef<HTMLFormElement>() as RefObject<HTMLFormElement>
    useImperativeHandle(ref, () => ({
        reset: () => {
            formRef.current?.reset()
            clearErrors()
        }
    }))

    const pattern = tp === etp.email ?
              {
                  value: /^[a-z0-9_-]+@[a-z_-]+.[a-z]+$/i,
                  message: "invalid email"
              } :
              {
                  value: /^[a-z0-9_-]+$/i,
                  message: "should not contain spaces"
              }
    const submitForm = (data: any) => {
        console.log(data)
        reset()
    }
    return (
        <form ref={formRef} onSubmit={handleSubmit(submitForm)}>
            <input {...register("usernameOrEmail", {
                pattern
            })} />
            <ErrorSpan>{errors?.usernameOrEmail && errors.usernameOrEmail?.message}</ErrorSpan>
            <FlexBlock>
                <span>Don't have account yet?<br/>Register now!</span>
                <button type="submit">Next</button>
            </FlexBlock>
        </form>
    );
});

export default LoginForm;