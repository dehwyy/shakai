import styled from "styled-components"

export const FormWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`

export const FormCentered = styled.div`
  background: ${(props) => props.theme.blockBackground};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  height: 375px;
  justify-content: end;
  padding: 10px 25px 50px;
  position: relative;
  width: 400px;
`

export const OptionsWrapper = styled.div`
  align-items: center;
  display: flex;
  left: 50%;
  position: absolute;
  top: 15px;
  transform: translateX(-50%);
  width: 100%;
`

export const Options = styled.div`
  border: 2px solid white;
  border-radius: 5px;
  display: flex;
  gap: 5px;
  margin: 0 auto;
  padding: 6px 8px;
  user-select: none;
  width: min-content;
`

export const OptionalText = styled.div`
  font-size: 30px;
  font-weight: 600;
  justify-self: start;
  text-align: center;
  user-select: none;
  width: 100%;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 65%;
  justify-content: center;
  margin-bottom: 15px;
  position: relative;
  user-select: none;
`

export const FlexBlock = styled.div`
  align-items: end;
  display: flex;
  justify-content: space-between;
  width: 98%;
`

export const LoginOption = styled.div<{ readonly isChosen?: boolean }>`
  background: ${(props) =>
    !props.isChosen
      ? props.theme.lighterBlockBackground
      : props.theme.blueColor};
  border-radius: 5px;
  font-size: 20px;
  padding: 15px 35px;
`
