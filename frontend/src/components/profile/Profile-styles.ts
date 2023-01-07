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
  padding: 10px 0 0 0;
  position: relative;
  & > span {
    display: block;
    height: 250px;
    left: 50%;
    overflow: hidden;
    position: absolute;
    transform: translate(-50%, 0);
    width: 98%;
    &:hover i {
      cursor: pointer;
      transform: translateY(0);
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
      background: rgba(17, 17, 17, 0.8);
      border-radius: 5px 0 0 0;
      bottom: 0;
      font-size: 2.2rem;
      padding: 10px 5px 5px 10px;
      position: absolute;
      right: 0;
      transform: translateX(50px);
      transition: 0.4s ease;
    }
  }
`
export const PostsWrapper = styled(DivWrapper)`
  background: ${props => props.theme.mainBackground};
`
