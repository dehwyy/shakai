import styled from "styled-components"

export const AddUserFieldWrapper = styled.div`
  align-self: center;
  background: ${props => props.theme.blueColor};
  padding: 10px !important;
  text-align: center !important;
  user-select: none;
  width: 20%;
  & span {
    margin: 0 !important;
    width: 100%;
  }
  &:hover {
    cursor: pointer;
  }
`
export const UserInfoChoiceWrapper = styled.div`
  border: none !important;
  display: flex;
  flex-wrap: wrap;
  gap: 0 20px;
`
export const UserInfoChoise = styled.div`
  padding: 15px !important;
  display: block !important;
  flex: 1 1 auto;
  &:hover {
    cursor: pointer;
  }
`
