import styled from "styled-components";

export const AInput = styled.input`
  position: relative;
  width: 100%;
  font-size: 25px;
  padding: 10px 25px;
  color: ${props => props.theme.fontColor};
  background: ${props => props.theme.mainBackground};
  border: 1px solid ${props => props.theme.mainBackground};
  box-sizing: border-box;
  border-radius: 5px;
  &:focus {
    border: 1px solid ${props => props.theme.blueColor};
    outline: none;
  }
`

export const AInputWrapper = styled.div`
  position: relative;
  width: 100%;
`

export const ErrorSpan = styled.span`
  color: #B00020;
  font-size: 14px;
  width: 100%;
  position: absolute;
  left: 5px;
  bottom: -25px;
  text-transform: capitalize;
`
