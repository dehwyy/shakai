import styled from "styled-components"

export const GridWrapper = styled.div`
  border-radius: 10px;
  padding: 15px 25px;
  background: ${(props) => props.theme.blockBackground};
  text-align: end;
`
export const GridContent = styled.div`
  text-align: start;
  display: flex;
  align-items: center;
`

export const ImgDiv = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: white;
  & img {
    max-width: 100%;
    max-height: 100%;
  }
`

export const ContentDiv = styled.div`
  padding-left: 10px;
`

export const UsernameWrapper = styled.div`
  font-size: 18px;
  border-bottom: 2px solid white;
`

export const InfoWrapper = styled.div`
  font-size: 15px;
  & i {
    top: 6px;
  }
`

export const GridButton = styled.button`
  background: dodgerblue;
  font-size: 20px;
  padding: 5px 15px;
  border-radius: 7px;
  color: white;
  font-family: "Montserrat", monospace;
  &:hover {
    cursor: pointer;
  }
`
