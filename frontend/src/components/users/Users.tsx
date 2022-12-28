import * as React from "react"
import { UsersGrid, UsersWrapper } from "./Users-styles"
import User from "./User/User"
import { useTypedSelector } from "../../store/typed-hooks"

const Users = () => {
  const users = useTypedSelector((state) => state.UsersStore.users)

  return (
    <UsersWrapper>
      <UsersGrid>
        {users.map((user) => (
          <User
            key={user.id}
            username={user.username}
            location={user.location}
            profileImg={user.profileImg}
          />
        ))}
      </UsersGrid>
    </UsersWrapper>
  )
}

export default Users
