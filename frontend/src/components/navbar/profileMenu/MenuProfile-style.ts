import styled from "styled-components"
export const MenuWrapper = styled.div`
  position: absolute;
  top: 48.5px;
  right: -20px;
`

export const MenuBody = styled.div`
  width: max-content;
  min-width: 170px;
  background: ${(props) => props.theme.coloredBackground};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border: 1px solid white;
  display: flex;
  flex-direction: column;
`

export const MenuItem = styled.div`
  padding: 10px 15px 10px 0;
  font-size: 1.5rem;
  &:hover {
    background: ${(props) => props.theme.secondColorBackground};
  }
  & i {
    font-size: 1.5rem;
    top: 0.25rem;
    padding: 0 10px;
  }
`
