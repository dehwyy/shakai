import * as React from "react"
import styled, { ThemeProvider } from "styled-components"
import { Navigate, Route, Routes } from "react-router-dom"
import GlobalStyles from "./globalStyles/style"
import Navbar from "./components/navbar/Navbar"
import Profile from "./components/profile/Profile"
import Users from "./components/users/Users"
import Login from "./components/newAuthForm/Login"
import Registration from "./components/newAuthForm/Registration"
import { useEffect } from "react"
import Redirect from "./components/Redirect"

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
}

const App = () => {
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken")
  }, [])
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <AppWrapper>
        <Routes>
          <Route path={"*"} element={<Login />} />
          <Route path={"registration"} element={<Registration />} />
          <Route path={"content"}>
            <Route
              path={"profile/:id"}
              element={
                <>
                  <Navbar />
                  <Profile />
                </>
              }
            />
            <Route
              path={"users/:id"}
              element={
                <>
                  <Navbar />
                  <Users />
                </>
              }
            />
            <Route path={"redirect/:id"} element={<Redirect url={"/content/profile/"} />} />
          </Route>
        </Routes>
      </AppWrapper>
    </ThemeProvider>
  )
}

export default App
