import React, { FC, MouseEventHandler } from "react"
import styled from "styled-components"

const ModalWindowWrapper = styled.div`
  background: rgba(255, 255, 255, 0.5);
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 4;
`
const ModalWindow = styled.div`
  background: ${props => props.theme.blockBackground};
  border-radius: 5px;
  height: 150px;
  margin: 0 auto;
  padding: 20px 0 35px;
  position: relative;
  text-align: center;
  top: 40%;
  width: 500px;
  & div {
    position: relative;
    &:nth-last-child(2) {
      margin-bottom: 20px;
      margin-top: 30px;
    }
    &:nth-last-child(3) {
      margin: 0 auto;
      max-width: max-content;
    }
  }
  & input {
    margin-left: 0;
    width: 90%;
    height: 35px;
    font-size: 1.3 rem;
  }
  & label {
    bottom: -20px;
    color: red;
    font-size: 0.7rem;
    left: 5%;
    position: absolute;
  }
  & i {
    left: -10px;
    padding: 10px;
    position: absolute;
    top: -10px;
    &:hover {
      cursor: pointer;
    }
  }
`

const InputModal: FC<{ children: JSX.Element; onClickFn: (e: React.MouseEvent) => void }> = ({
  children,
  onClickFn,
}) => {
  return (
    <ModalWindowWrapper>
      <ModalWindow onClick={onClickFn}>{children}</ModalWindow>
    </ModalWindowWrapper>
  )
}

export default InputModal
