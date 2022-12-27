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
  height: 50px;
  width: 50px;
  & img {
    max-height: 100%;
    max-width: 100%;
  }
`

export const ContentDiv = styled.div`
  padding-left: 10px;
`

export const UsernameWrapper = styled.div`
  border-bottom: 2px solid white;
  font-size: 18px;
`

export const InfoWrapper = styled.div`
  font-size: 15px;
  & i {
    top: 6px;
  }
`

export const GridButton = styled.button`
  background: dodgerblue;
  border-radius: 7px;
  color: white;
  font-family: "Montserrat", monospace;
  font-size: 20px;
  padding: 5px 15px;
  &:hover {
    cursor: pointer;
  }
`
