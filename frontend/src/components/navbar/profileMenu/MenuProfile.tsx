import React from 'react';
import {MenuBody, MenuItem, MenuWrapper} from "./MenuProfile-style";
import Ico from "../../../UI/Ico";
import {Link} from "react-router-dom";

const MenuProfile = () => {
    return (
        <MenuWrapper>
            <MenuBody>
                <Link to="/content/profile">
                <MenuItem>
                        <Ico> person </Ico>
                        Profile
                </MenuItem>
                </Link>
                <MenuItem>
                    <Ico> settings </Ico>
                    Settings
                </MenuItem>
                <MenuItem>
                    <Ico> exit_to_app </Ico>
                    Log out
                </MenuItem>
            </MenuBody>
        </MenuWrapper>
    );
};

export default MenuProfile;