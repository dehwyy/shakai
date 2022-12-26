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
  height: 375px;
  padding: 10px 25px 50px;
  border-radius: 10px;
  background: ${props => props.theme.blockBackground};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: end;
  `

export const OptionsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`

export const Options = styled.div`
  margin: 0 auto;
  width: min-content;
  display: flex;
  border: 2px solid white;
  border-radius: 5px;
  padding: 6px 8px;
  gap: 5px;
  user-select: none;
`

export const OptionalText = styled.div`
  user-select: none;
  font-size: 30px;
  font-weight: 600;
  width: 100%;
  text-align: center;
  justify-self: start;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 125px;
  position: relative;
  user-select: none;
  margin-top: -35px;
`

export const FlexBlock = styled.div`
  width: 98%;
  align-items: end;
  display: flex;
  justify-content: space-between;
`


export const LoginOption = styled.div<{readonly isChosen?: boolean}>`
  padding: 15px 35px;
  font-size: 20px;
  background: ${props => !props.isChosen ? props.theme.lighterBlockBackground : props.theme.blueColor};
  border-radius: 5px;
`



