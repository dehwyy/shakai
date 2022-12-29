import styled from "styled-components"

export const AInput = styled.input`
  background: ${props => props.theme.mainBackground};
  border: 1px solid ${props => props.theme.mainBackground};
  border-radius: 5px;
  box-sizing: border-box;
  color: ${props => props.theme.fontColor};
  font-size: 25px;
  padding: 10px 25px;
  position: relative;
  width: 100%;
  &:focus {
    border: 1px solid ${props => props.theme.blueColor};
    outline: none;
  }
`

export const AInputWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 15px 0;
`

export const ErrorSpan = styled.span`
  bottom: -25px;
  color: #b00020;
  font-size: 14px;
  left: 5px;
  position: absolute;
  width: 100%;
`
