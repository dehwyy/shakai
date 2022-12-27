import styled from "styled-components"

export const ProfileWrapper = styled.div`
  margin: 100px auto 0;
  position: relative;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: 1000px;
  max-width: 95vw;
  box-sizing: border-box;
  padding: 0 0 50px;
`
export const DivWrapper = styled.div``
export const PostsWrapper = styled(DivWrapper)`
  background: ${(props) => props.theme.mainBackground};
`
