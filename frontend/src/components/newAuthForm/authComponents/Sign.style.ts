import styled from "styled-components"

export const Sign = styled.span`
  border-radius: 5px;
  color: ${props => props.theme.lighterBlueColor};
  font-size: 14px;
  padding: 5px;
  transition: 0.2s ease;
  user-select: none;
  &:hover {
    background: ${props => props.theme.lightBlockBackground};
    color: ${props => props.theme.blueColor};
    cursor: pointer;
  }
  & i {
    top: 7px;
  }
`
