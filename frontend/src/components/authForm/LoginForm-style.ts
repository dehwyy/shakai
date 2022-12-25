import styled, {ThemedStyledProps} from "styled-components";

export const FormWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const FormCentered = styled.div`
  width: 400px;
  height: 400px;
  padding: 10px 25px;
  border-radius: 10px;
  background: ${props => props.theme.blockBackground};
  position: relative;
  & > div {
    width: 100%;
    height: 150px;
    margin-bottom: -25px;
    display: flex;
    align-items: center;
    & > div {
      margin: 0 auto;
      width: min-content;
      display: flex;
      border: 2px solid white;
      border-radius: 5px;
      padding: 6px 8px;
      gap: 5px;
    }
  }
  & form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
    height: 50%;
    position: relative;
    user-select: none;
    & input {
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
    }
    & button {
      margin: 50px 0 0 0;
      padding: 10px 25px;
      border-radius: 5px;
      font-size: 20px;
      background: ${props => props.theme.blueColor};
      color: white;
      border: none;
      transition: 0.2s ease;
      &:hover {
        cursor: pointer;
        background: ${props => props.theme.darkerBlueColor};
      }
    }
  }
`

export const ErrorSpan = styled.span`
  color: #B00020;
  font-size: 14px;
  width: 100%;
  position: absolute;
`

export const FlexBlock = styled.div`
  width: 98%;
  align-items: end;
  display: flex;
  justify-content: space-between;
  & span {
    padding: 5px;
    font-size: 14px;
    color: ${props => props.theme.lighterBlueColor};
    transition: 0.2s ease;
    border-radius: 5px;
    &:hover {
      cursor: pointer ;
      background: ${props => props.theme.lightBlockBackground};
      color: ${props => props.theme.blueColor}
    }
  }
`


interface inOptionProps{
    readonly isChosen: boolean
}
export const LoginOption = styled.div<inOptionProps>`
  padding: 15px 35px;
  font-size: 20px;
  background: ${props => !props.isChosen ? props.theme.lighterBlockBackground : props.theme.blueColor};
  border-radius: 5px;
`



