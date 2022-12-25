import styled from "styled-components";
export const NavbarWrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 3;
  border-bottom: 1px solid white;
  background: ${props => props.theme.coloredBackground};
  height: 60px;
  width: 100vw;
  display: flex;
  align-items: center;
`
export const NavbarItem = styled.div`
  margin-right: 2vw;
  user-select: none;
  position: relative;
  top: 5px;
  &:hover {
    cursor: pointer;
  }
  & i {
    font-size: 2.5rem;
  }
`

export const NavbarItemFirst = styled(NavbarItem)`
  margin-left: 1vw;
`

export const NavbarItemLast = styled(NavbarItem)`
  margin-left: auto;
`