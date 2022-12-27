import styled from "styled-components"
export const PostsDivWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  padding-top: 50px;
`

export const PostDivWrapper = styled.div`
  margin-bottom: 10px;
  padding: 10px 25px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #222222;
`

export const PostHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: start;
  width: 300px;
  max-width: 90%;
  font-size: 15px;
  margin: 10px 0 20px 0;
  & img {
    border-radius: 50%;
    max-width: 40px;
    max-height: 40px;
    background: green;
  }
`

export const PostBody = styled.div`
  font-size: 18px;
  & img {
    margin: 0 auto;
    display: block;
    max-height: 800px;
    max-width: 100%;
  }
`
export const PostMessage = styled.div`
  padding-bottom: 15px;
  max-width: 100%;
`
