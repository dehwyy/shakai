import {createGlobalStyle, css} from "styled-components";
import MonserratR from "./Montserrat-Regular.ttf"

const FontStyles = createGlobalStyle`
  @font-face {
    font-family: "Montserrat";
    src: url(${MonserratR}) format("truetype");
  }
`
export default FontStyles