import styled from "styled-components"

export const ProfileWrapper = styled.div`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-sizing: border-box;
  margin: 100px auto 0;
  max-width: 95vw;
  padding: 0 0 50px;
  position: relative;
  width: 1000px;
`
export const DivWrapper = styled.div``
export const PostsWrapper = styled(DivWrapper)`
  background: ${(props) => props.theme.mainBackground};
`
