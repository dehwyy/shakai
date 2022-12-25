import React, {useState} from 'react';
import {NavbarWrapper, NavbarItem, NavbarItemFirst, NavbarItemLast} from "./Navbar-styles";
import Ico from "../../UI/Ico";
import {Link} from "react-router-dom";
import MenuProfile from "./profileMenu/MenuProfile";

const Navbar = () => {
    const [isVisibleMenu, setVisibleMenu] = useState<boolean>(false)
    return (
        <NavbarWrapper>
            <NavbarItemFirst>
                <Link to="/content">
                    <Ico>home</Ico>
                </Link>
            </NavbarItemFirst>
            <NavbarItem>
                <Link to="/content/users">
                    <Ico>people</Ico>
                </Link>
            </NavbarItem>
            <NavbarItemLast onClick={() => setVisibleMenu(prev => !prev)}>
                <Ico>account_circle</Ico>
                {isVisibleMenu &&
                    <MenuProfile />
                }
            </NavbarItemLast>
        </NavbarWrapper>
    );
};



export default Navbar;