import styled from "styled-components"

export const UserWrapper = styled.div`
  background: ${props => props.theme.blockBackground};
  border-radius: 10px;
`

export const BackgroundImg = styled.img``

export const ImgDiv = styled.div`
  height: 200px;
  margin: 150px auto 25px;
  overflow: hidden;
  position: relative;
  width: 200px;
  z-index: 2;
  & div {
    border-radius: 50%;
    height: 200px;
    overflow: hidden;
    position: relative;
    width: 200px;
  }
  &:hover span {
    cursor: pointer;
    opacity: 1;
    transform: translateX(-50%) translateY(0px);
  }
`

export const ImgSpan = styled.span`
  background: rgba(17, 17, 17, 0.8);
  bottom: 0;
  color: white;
  height: 20%;
  left: 50%;
  opacity: 0;
  position: absolute;
  text-align: center;
  transform: translateX(-50%) translateY(10px);
  transition: 0.2s linear;
  width: 100%;
`

export const Img = styled.img`
  background: #222222;
  border-radius: 50%;
  height: 100%;
  object-fit: cover;
  width: 100%;
`

export const InfoDescription = styled.div`
  margin: 0 auto;
  max-width: 100%;
  padding: 10px 0 0 0;
  text-align: center;
  & i {
    left: 5px;
    top: 4px;
  }
`

export const InfoDescriptionFlex = styled.div`
  align-items: end;
  display: flex;
  margin: 0 auto;
  padding-bottom: 20px;
  width: 525px;
  & > div {
    flex-basis: auto;
    flex-grow: 1;
    font-size: 18px;
    height: 100%;
    user-select: none;
    & > button {
      background: ${props => props.theme.lighterBlockBackground};
      border: none;
      border-radius: 5px;
      bottom: -10px;
      color: ${props => props.theme.fontColor};
      font-size: 18px;
      padding: 10px 15px;
      position: relative;
      &:hover {
        cursor: pointer;
      }
    }
  }
  &:hover {
    cursor: pointer;
  }
  & span {
    margin-left: 15px;
    &:hover {
      cursor: default;
    }
  }
`

export const ShortDescription = styled(InfoDescription)``
