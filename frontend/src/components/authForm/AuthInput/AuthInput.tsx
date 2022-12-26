import React, {PropsWithChildren, useMemo} from 'react';
import {ErrorSpan} from "./AuthInput-style";
import {AInput, AInputWrapper} from "./AuthInput-style";
import {InputProps, TInputValues} from "../auth";


function AuthInput<T extends TInputValues>({register, errors, name, customKey, validation}: PropsWithChildren<InputProps<T>>) {
    const message = Object.values(errors)[customKey]?.message
    return (
        <AInputWrapper>
            <AInput {...register(name, validation)} />
            <ErrorSpan>{message as string}</ErrorSpan>
        </AInputWrapper>
    );
};

export default AuthInput;