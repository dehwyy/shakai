import styled from "styled-components"

export const AddUserFieldWrapper = styled.div`
  align-self: center;
  background: ${props => props.theme.blueColor};
  margin: 5px 0 !important;
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
  margin: 0 !important;
  padding: 0 !important;
`
export const UserInfoChoice = styled.div`
  display: block !important;
  flex: 1 1 auto;
  padding: 15px !important;
  &:hover {
    cursor: pointer;
  }
`
