import styled from "styled-components"
export const PostsDivWrapper = styled.div`
  margin: 0 auto;
  padding-top: 50px;
  width: 90%;
`

export const PostDivWrapper = styled.div`
  align-items: center;
  background: #222222;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  padding: 10px 25px;
`

export const PostHeader = styled.div`
  align-items: center;
  align-self: start;
  display: flex;
  font-size: 15px;
  justify-content: space-between;
  margin: 10px 0 20px 0;
  max-width: 90%;
  width: 300px;
  & img {
    background: green;
    border-radius: 50%;
    height: 40px;
    width: 40px;
    object-fit: cover;
  }
  & span:nth-child(2) {
    font-size: 1.3rem;
  }
`

export const PostBody = styled.div`
  font-size: 18px;
  & img {
    display: block;
    margin: 0 auto;
    max-height: 800px;
    max-width: 100%;
  }
`
export const PostMessage = styled.div`
  max-width: 100%;
  padding-bottom: 15px;
`
