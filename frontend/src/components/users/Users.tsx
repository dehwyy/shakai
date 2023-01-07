import * as React from "react"
import { UsersGrid, UsersWrapper } from "./Users-styles"
import User from "./User/User"

const Users = () => {
  return (
    <UsersWrapper>
      <UsersGrid>
        123
        {/*{users.map(user => (*/}
        {/*  <User key={user.id} username={user.username} location={user.location} profileImg={user.profileImg} />*/}
        {/*))}*/}
      </UsersGrid>
    </UsersWrapper>
  )
}

export default Users
