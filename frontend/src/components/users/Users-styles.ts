import styled from "styled-components"

export const UsersWrapper = styled.div`
  background: ${props => props.theme.mainBackground};
  min-height: 50vh;
`

export const UsersGrid = styled.div`
  display: grid;
  gap: 50px;
  grid-template-columns: 500px 500px;
  justify-content: center;
  margin: 100px auto 0;
  max-width: 95vw;
  width: 1200px;
`

export const User = styled.div`
  background-color: ${props => props.theme.blockBackground};
  height: 100px;
  padding: 15px 15px 15px 30px;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
  }
  & img {
    position: relative;
    top: 10px;
    border-radius: 50%;
    height: 40px;
    object-fit: cover;
    object-position: center;
    width: 40px;
    margin-right: 15px;
  }
  & > div {
    padding-top: 15px;
    display: flex;
    & i {
      top: 2px;
      left: -5px;
    }
    & > div:nth-child(2) {
      margin-left: auto;
      margin-right: 100px;
    }
  }
`
