import styled from "styled-components"
export const PostsDivWrapper = styled.div`
  margin: 0 auto;
  padding-top: 50px;
  width: 60%;
`

export const PostCreate = styled.div`
  background: ${props => props.theme.blockBackground};
  margin: 0 auto 30px;
  width: 100%;
  border-radius: 5px;
  & form {
    padding: 15px;
    display: grid;
    grid-template: 1fr minmax(80px, 1vh) / 1fr 1fr;
    grid-template-areas:
      "textarea textarea"
      "btn btn-submit";
    & textarea {
      grid-area: textarea;
      box-sizing: border-box;
      border-radius: 5px 5px 0 0;
      padding: 10px;
      background: ${props => props.theme.lighterBlockBackground};
      color: ${props => props.theme.fontColor};
      font-size: 1rem;
      min-height: 150px;
      min-width: 1px;
      resize: none;
      width: 100%;
      &:focus {
        outline: none;
      }
    }
    & button {
      grid-area: btn;
      border-radius: 5px;
      font-size: 1.2rem;
      min-width: 70px;
      margin: 10px;
      color: ${props => props.theme.fontColor};
      background: ${props => props.theme.coloredBackground};
      &:hover {
        cursor: pointer;
      }
      &[type="submit"] {
        background: ${props => props.theme.secondColorBackground};
        grid-area: btn-submit;
      }
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
  margin: 10px 0 20px 0;
  width: 100%;
  & i {
    margin-left: auto !important;
    transition: 0.15s ease;
    &:hover {
      cursor: pointer;
      color: darkred;
    }
  }
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
