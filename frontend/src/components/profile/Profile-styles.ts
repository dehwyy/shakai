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
export const DivWrapper = styled.div`
  position: relative;
  padding: 10px 0 0 0;
  & > span {
    position: absolute;
    height: 250px;
    width: 98%;
    display: block;
    overflow: hidden;
    left: 50%;
    transform: translate(-50%, 0);
    &:hover i {
      transform: translateY(0);
      cursor: pointer;
    }
    & > img {
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      height: 100%;
      object-fit: cover;
      object-position: center;
      position: absolute;
      width: 100%;
    }
    & > i {
      position: absolute;
      right: 0;
      bottom: 0;
      padding: 10px 5px 5px 10px;
      border-radius: 5px 0 0 0;
      background: rgba(17, 17, 17, 0.8);
      font-size: 2.2rem;
      transition: 0.4s ease;
      transform: translateX(50px);
    }
  }
`
export const PostsWrapper = styled(DivWrapper)`
  background: ${props => props.theme.mainBackground};
`
