import styled from "styled-components"
export const DetailedUserInfoWrapper = styled.div`
  margin: 25px auto 0;
  border-top: 1px solid white;
  padding-top: 10px;
  width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
