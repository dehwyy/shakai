import styled from "styled-components";

export const UserWrapper = styled.div`
  border-radius: 10px;
  background: ${props => props.theme.blockBackground};
`

export const BackgroundImg = styled.img`
  width: 98%;
  height: 200px;
  left: 50%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  transform: translate(-50%, 0);
  object-fit: cover;
  object-position: center;
  position: absolute;
  top: 15px;
`

export const ImgDiv = styled.div`
  margin: 0 auto;
  width: max-content;
  padding: 100px 0 25px 0;
  height: 200px;
  z-index: 2;
  position: relative;
  border-radius: 50%;
`

export const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 50%;
  object-fit: contain;
  background: #222222;
`

export const InfoDescription = styled.div`
  margin: 0 auto;
  padding: 10px 0 0 0;
  text-align: center;
  max-width: 100%;
  &  i {
    top: 4px;
    left: 5px;
  }
`

export const InfoDescriptionFlex = styled.div`
  display: flex;
  width: 525px;
  margin: 0 auto;
  padding-bottom: 20px;
  & div {
    font-size: 18px;
    flex-grow: 1;
    flex-basis: auto;
    user-select: none;
  }
  &:hover {
    cursor: pointer
  }
  & span {
    margin-left: 15px
  }
`

export const ShortDescription = styled(InfoDescription)`
  
`