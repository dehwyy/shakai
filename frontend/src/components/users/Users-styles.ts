import styled from "styled-components";

export const UsersWrapper = styled.div`
  background: ${props => props.theme.mainBackground};
  min-height: 50vh;
`

export const UsersGrid = styled.div`
  display: grid;
  width: 1200px;
  max-width: 95vw;
  gap: 15px;
  margin: 100px auto 0;
  grid-template-columns: 1fr 1fr;
`

