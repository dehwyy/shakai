import React, {RefObject, useRef, useState} from 'react';
import {FormCentered, FormWrapper, LoginOption} from "../LoginForm-style";
import LoginForm, {etp} from "./LoginForm";

function LoginFormRouter() {
    const [isEmail, setEmail] = useState<boolean>(true)
    const ref = useRef<HTMLFormElement>() as RefObject<HTMLFormElement>
    return (
        <FormWrapper>
            <FormCentered>
                <div>
                    <div>
                        <LoginOption onClick={() => {
                            setEmail(true)
                            ref.current?.reset()
                        }} isChosen={isEmail}>Email</LoginOption>
                        <LoginOption onClick={() => {
                            setEmail(false)
                            ref.current?.reset()
                        }} isChosen={!isEmail}>Username</LoginOption>
                    </div>
                </div>
                {isEmail ?
                    <LoginForm tp={etp.email} ref={ref}/>
                    :
                    <LoginForm tp={etp.username} ref={ref}/>
                }
            </FormCentered>
        </FormWrapper>
    );
}

export default LoginFormRouter