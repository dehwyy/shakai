import styled from "styled-components"
export const NavbarWrapper = styled.div`
  align-items: center;
  background: ${props => props.theme.coloredBackground};
  border-bottom: 1px solid white;
  display: flex;
  height: 60px;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 3;
`
export const NavbarItem = styled.div`
  margin-right: 2vw;
  position: relative;
  top: 5px;
  user-select: none;
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
  & img {
    border-radius: 50%;
    height: 50px;
    object-fit: cover;
    width: 50px;
  }
`
