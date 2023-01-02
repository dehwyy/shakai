import styled from "styled-components"

export const EditFieldInput = styled.input`
  background: ${props => props.theme.mainBackground};
  border: 1px solid ${props => props.theme.mainBackground};
  border-radius: 5px;
  color: ${props => props.theme.fontColor};
  font-size: 18px;
  margin-left: 1.5em;
  width: 55%;
  &:focus {
    border: 1px solid ${props => props.theme.blueColor};
    outline: none;
  }
`

export const EditInfoButton = styled.button`
  margin-left: auto;
  margin-right: 10px;
  background: ${props => props.theme.greenColor};
  padding: 5px 15px;
  border: none;
  border-radius: 5px;
  color: ${props => props.theme.fontColor};
  &:hover {
    cursor: pointer;
  }
`
export const DetailedUserInfoWrapper = styled.div`
  border-top: 1px solid white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 25px auto 0;
  padding-top: 10px;
  width: 70%;
  & div {
    display: flex;
    margin: 5px 0;
    border: 1px solid gray;
    padding: 20px 0 20px 5px;
    border-radius: 5px;
    & i {
      top: 0;
    }
    }
  }
  & > div > span {
    font-size: 18px;
    margin-left: 20px;
  }
`
