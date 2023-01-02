import React, { FC } from "react"
import styled from "styled-components"

const ModalWindowWrapper = styled.div`
  position: fixed;
  z-index: 4;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.5);
`
const ModalWindow = styled.div`
  position: relative;
  top: 50%;
  margin: 0 auto;
  width: 500px;
  height: 100px;
  background: ${props => props.theme.blockBackground};
  text-align: center;
  padding: 20px 0 35px;
  border-radius: 5px;
  & div {
    position: relative;
    &:nth-last-child(2) {
      margin-top: 10px;
      margin-bottom: 15px;
    }
  }
  & input {
    width: 90%;
    margin-left: 0;
  }
  & label {
    position: absolute;
    font-size: 0.7rem;
    left: 5%;
    bottom: -20px;
    color: red;
  }
`

const InputModal: FC<{ children: JSX.Element }> = ({ children }) => {
  return (
    <ModalWindowWrapper>
      <ModalWindow>{children}</ModalWindow>
    </ModalWindowWrapper>
  )
}

export default InputModal
