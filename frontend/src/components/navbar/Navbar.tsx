import React from 'react';
import {NavbarWrapper, NavbarItem, NavbarItemFirst, NavbarItemLast} from "./Navbar-styles";
import Ico from "../../UI/Ico";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <NavbarWrapper>
            <NavbarItemFirst>
                <Link to="/">
                    <Ico>home</Ico>
                </Link>
            </NavbarItemFirst>
            <NavbarItem>
                <Link to="/users">
                    <Ico>people</Ico>
                </Link>
            </NavbarItem>
            <NavbarItemLast>
                <Link to="/profile">
                    <Ico>account_circle</Ico>
                </Link>
            </NavbarItemLast>
        </NavbarWrapper>
    );
};



export default Navbar;