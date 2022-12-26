import React from 'react';
import {MenuBody, MenuItem, MenuWrapper} from "./MenuProfile-style";
import Ico from "../../../UI/Ico";
import {Link} from "react-router-dom";

const MenuProfile = () => {
    const accessToken = localStorage.getItem("accessToken")
    const linkTo = accessToken ? "/content/profile" : "/"
    const profileText = accessToken ? "Profile": "Authorization"
    return (
        <MenuWrapper>
            <MenuBody>
                <Link to={linkTo} data-testid="accessTokenTestId">
                    <MenuItem>
                            <Ico> person </Ico>
                        {profileText}
                    </MenuItem>
                </Link>
                <MenuItem>
                    <Ico> settings </Ico>
                    Settings
                </MenuItem>
                {accessToken &&
                    <MenuItem>
                        <Ico> exit_to_app </Ico>
                        Log out
                    </MenuItem>
                }
            </MenuBody>
        </MenuWrapper>
    );
};

export default MenuProfile;