import styled from "styled-components"
export const MenuWrapper = styled.div`
  position: absolute;
  right: -20px;
  top: 48.5px;
`

export const MenuBody = styled.div`
  background: ${(props) => props.theme.coloredBackground};
  border: 1px solid white;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  display: flex;
  flex-direction: column;
  min-width: 170px;
  width: max-content;
`

export const MenuItem = styled.div`
  font-size: 1.5rem;
  padding: 10px 15px 10px 0;
  &:hover {
    background: ${(props) => props.theme.secondColorBackground};
  }
  & i {
    font-size: 1.5rem;
    padding: 0 10px;
    top: 0.25rem;
  }
`
