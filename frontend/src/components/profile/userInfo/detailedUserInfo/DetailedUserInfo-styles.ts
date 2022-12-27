import styled from "styled-components"
export const DetailedUserInfoWrapper = styled.div`
  border-top: 1px solid white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 25px auto 0;
  padding-top: 10px;
  width: 450px;
  & div {
    display: flex;
    padding: 0 0 20px 0;
    & i {
      top: 0;
    }
  }
  & > div > span {
    font-size: 18px;
    margin-left: 20px;
  }
`
