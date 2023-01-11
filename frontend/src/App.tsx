import * as React from "react"
import styled, { ThemeProvider } from "styled-components"
import GlobalStyles from "./globalStyles/style"
import { useVerifyTokenQuery } from "./store/req/currentUser-slice-api"
import RoutesWrapper from "./routes/App-routes"

const AppWrapper = styled.div`
  background: ${props => props.theme.mainBackground};
  color: white;
  font-family: "Montserrat", "monospace";
  font-size: 25px;
  min-height: 100vh;
  overflow-x: hidden;
`

const darkTheme = {
  mainBackground: "#121212",
  blockBackground: "#222222",
  lighterBlockBackground: "#323232",
  coloredBackground: "#673ab7",
  secondColorBackground: "#BF2FA3",
  blueColor: "#3A5FB4",
  darkerBlueColor: "#32509b",
  lighterBlueColor: "#4672d7",
  fontColor: "white",
  greenColor: "#4CAF50",
  userFz: 18,
}

const App = () => {
  useVerifyTokenQuery(null)
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <AppWrapper>
        <RoutesWrapper />
      </AppWrapper>
    </ThemeProvider>
  )
}

export default App
