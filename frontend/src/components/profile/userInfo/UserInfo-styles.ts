import styled from "styled-components"

export const UserWrapper = styled.div`
  background: ${(props) => props.theme.blockBackground};
  border-radius: 10px;
`

export const BackgroundImg = styled.img`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 200px;
  left: 50%;
  object-fit: cover;
  object-position: center;
  position: absolute;
  top: 15px;
  transform: translate(-50%, 0);
  width: 98%;
`

export const ImgDiv = styled.div`
  border-radius: 50%;
  height: 200px;
  margin: 0 auto;
  padding: 100px 0 25px 0;
  position: relative;
  width: max-content;
  z-index: 2;
`

export const Img = styled.img`
  background: #222222;
  border-radius: 50%;
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
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
  display: flex;
  margin: 0 auto;
  padding-bottom: 20px;
  width: 525px;
  & div {
    flex-basis: auto;
    flex-grow: 1;
    font-size: 18px;
    user-select: none;
  }
  &:hover {
    cursor: pointer;
  }
  & span {
    margin-left: 15px;
  }
`

export const ShortDescription = styled(InfoDescription)``
