import styled from "styled-components"

export const GridWrapper = styled.div`
  background: ${(props) => props.theme.blockBackground};
  border-radius: 10px;
  padding: 15px 25px;
  text-align: end;
`
export const GridContent = styled.div`
  align-items: center;
  display: flex;
  text-align: start;
`

export const ImgDiv = styled.div`
  background: white;
  border-radius: 50%;
  max-height: 100px;
  max-width: 100px;
  min-height: 100px;
  min-width: 100px;
  overflow: hidden;
  & img {
    border-radius: 50%;
    max-height: 100%;
    object-fit: cover;
    object-position: 0 0;
    width: 100%;
  }
`

export const ContentDiv = styled.div`
  padding-bottom: 15px;
  padding-left: 15px;
  text-align: center;
`

export const UsernameWrapper = styled.div`
  border-bottom: 2px solid white;
  font-size: 30px;
  min-width: 120px;
`

export const InfoWrapper = styled.div`
  & i {
    top: 6px;
  }
`

export const LocationSpan = styled.span`
  font-size: 18px;
`

export const GridButton = styled.button`
  background: ${(props) => props.theme.blueColor};
  border-radius: 7px;
  color: white;
  font-family: "Montserrat", monospace;
  font-size: 20px;
  padding: 5px 15px;
  &:hover {
    background: ${(props) => props.theme.darkerBlueColor};
    cursor: pointer;
  }
`
