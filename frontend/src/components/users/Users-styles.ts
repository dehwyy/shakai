import styled from "styled-components"

export const UsersWrapper = styled.div`
  background: ${(props) => props.theme.mainBackground};
  min-height: 50vh;
`

export const UsersGrid = styled.div`
  display: grid;
  gap: 15px;
  grid-template-columns: 1fr 1fr;
  margin: 100px auto 0;
  max-width: 95vw;
  width: 1200px;
`
