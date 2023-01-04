import styled from "styled-components"
export const PostsDivWrapper = styled.div`
  margin: 0 auto;
  padding-top: 50px;
  width: 90%;
`

export const PostCreate = styled.div`
  background: ${props => props.theme.blockBackground};
  margin: 0 auto 30px;
  width: 100%;
  text-align: end;
  border-radius: 5px;
  & form {
    & textarea {
      box-sizing: border-box;
      border-radius: 5px 5px 0 0;
      padding: 15px;
      background: ${props => props.theme.lighterBlockBackground};
      color: ${props => props.theme.fontColor};
      font-size: 1.2rem;
      min-height: 150px;
      resize: none;
      width: 100%;
    }
    & button {
      padding: 15px 50px;
      border-radius: 5px;
      font-size: 1.2rem;
      margin: 10px;
      color: ${props => props.theme.fontColor};
      background: ${props => props.theme.coloredBackground};
    }
  }
`

export const PostDivWrapper = styled.div`
  align-items: start;
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
