import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
      font-family: "Segoe UI", "Roboto Light", "Fira Code", sans-serif;
      font-weight: 500;
    }
    ::-webkit-scrollbar {
      width: 1vw;
    }
    ::-webkit-scrollbar-track {
      background: #222222;
    }
    ::-webkit-scrollbar-thumb {
      background: #3A5FB4;
      transition: 0.5s ease;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #BF2FA3;
    }
    i {
      position: relative;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
`

export default GlobalStyles
