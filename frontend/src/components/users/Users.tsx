import React from 'react';
import {UsersGrid, UsersWrapper} from "./Users-styles";
import User from "./User/User";

const Users = () => {
    return (
        <UsersWrapper>
            <UsersGrid>
                <User/>
                <User/>
            </UsersGrid>
        </UsersWrapper>
    );
};

export default Users;