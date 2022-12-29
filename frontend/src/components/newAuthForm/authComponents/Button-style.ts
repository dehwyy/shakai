import styled from "styled-components"

export const Button = styled.button`
  background: ${(props) => props.theme.blueColor};
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 20px;
  padding: 10px 25px;
  transition: 0.2s ease;
  &:hover {
    background: ${(props) => props.theme.darkerBlueColor};
    cursor: pointer;
  }
`
