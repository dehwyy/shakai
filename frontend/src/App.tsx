import React from 'react';
import styled, {ThemeProvider} from "styled-components";
import {Route, Routes} from "react-router-dom";
import GlobalStyles from "./globalStyles/style";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Users from "./components/users/Users";
import LoginFormTest from "./components/authForm/login/LoginForm";
import RegistrationForm from "./components/authForm/registration/RegistrationForm";

const AppWrapper = styled.div`
  font-size: 25px;
  font-family: "Montserrat", "monospace";
  color: white;
  background: ${props => props.theme.mainBackground};
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
    fontColor: "white"
}

const App = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <GlobalStyles/>
            <AppWrapper>
                <Routes >
                    <Route path={"*"} element={<LoginFormTest />} />
                    <Route path={"registration"} element={<RegistrationForm />} />
                    <Route path={"content"}>
                        <Route path={"profile"} element={<><Navbar /><Profile /></>} />
                        <Route path={"users"} element={<><Navbar /><Users /></>}/>
                    </Route>
                </Routes>
            </AppWrapper>
        </ThemeProvider>
    );
};

export default App;