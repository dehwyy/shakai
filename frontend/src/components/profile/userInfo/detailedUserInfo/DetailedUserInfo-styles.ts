import styled from "styled-components"
export const DetailedUserInfoWrapper = styled.div`
  border-top: 1px solid white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 25px auto 0;
  padding-top: 10px;
  width: 70%;
  & div {
    display: flex;
    margin: 5px 0;
    border: 1px solid gray;
    padding: 20px 0 20px 5px;
    border-radius: 5px;
    & i {
      top: 0;
    }
  }
  & > div > span {
    font-size: 18px;
    margin-left: 20px;
  }
`
