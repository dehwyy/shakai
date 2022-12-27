import styled from "styled-components"

export const Sign = styled.span`
  padding: 5px;
  font-size: 14px;
  color: ${(props) => props.theme.lighterBlueColor};
  transition: 0.2s ease;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    background: ${(props) => props.theme.lightBlockBackground};
    color: ${(props) => props.theme.blueColor};
  }
`
