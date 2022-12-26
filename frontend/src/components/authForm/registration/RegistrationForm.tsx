import React, {RefObject, useMemo, useRef, useState} from 'react';
import {
    FlexBlock,
    FormCentered,
    FormWrapper,
    LoginOption,
    OptionsWrapper,
    Options,
    OptionalText
} from "../LoginForm-style";
import AuthForm from "../AuthForm";
import AuthSign from "../AuthSign/AuthSign";
import AuthButton from "../AuthButton/AuthButton";
import {RegisterOptions} from "react-hook-form";

function LoginFormRouter() {
    const ref = useRef<HTMLFormElement>() as RefObject<HTMLFormElement>
    const data = useMemo(() => {
        return [
            {
                name: "password",
                validation: {
                    required: "password is required",
                    minLength: {
                        value: 4,
                        message: "Minimal length of password is 4"
                    }
                } as RegisterOptions,
                inputType: "password",
            }
        ]
    }, []) // redux soon
    return (
        <FormWrapper>
            <FormCentered>
                <OptionsWrapper>
                    <OptionalText>Login</OptionalText>
                </OptionsWrapper>
               <AuthForm values={data} ref={ref}/>
                <FlexBlock>
                    <AuthSign />
                    <AuthButton onClick={() => {
                        ref.current?.submit()
                    }}/>
                </FlexBlock>
            </FormCentered>
        </FormWrapper>
    );
}

export default LoginFormRouter