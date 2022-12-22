import React from 'react';
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import styled, {ThemeProvider} from "styled-components";
import {Route, Routes} from "react-router-dom";
import Users from "./components/users/Users";

const AppWrapper = styled.div`
  font-size: 25px;
  font-family: "Montserrat", "monospace";
  color: white;
  background: ${props => props.theme.mainBackground};
  min-height: 100vh;
  overflow: hidden;
`

const darkTheme = {
    mainBackground: "#121212",
    blockBackground: "#222222"
}

const App = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <AppWrapper>
                <Navbar />
                <Routes>
                    <Route path={"/profile"} element={<Profile />} />
                    <Route path={"/users"} element={<Users />}/>
                </Routes>
            </AppWrapper>
        </ThemeProvider>
    );
};

export default App;