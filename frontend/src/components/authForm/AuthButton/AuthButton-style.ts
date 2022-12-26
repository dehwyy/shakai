import styled from "styled-components";

export const Button = styled.button`
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
`

