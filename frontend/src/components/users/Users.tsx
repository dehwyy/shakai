import * as React from "react"
import { User, UsersGrid, UsersWrapper } from "./Users-styles"
import { useGetAllUsersQuery } from "../../store/req/usersList-slice-api"
import { PROFILE_IMAGE } from "../../static/profile"
import { useNavigate } from "react-router-dom"
import Ico from "../../UI/Ico"

const Users = () => {
  const { data: usersList } = useGetAllUsersQuery()
  const navigate = useNavigate()
  return (
    <UsersWrapper>
      <UsersGrid>
        {usersList &&
          usersList.map(user => (
            <User key={user._id} onClick={() => navigate(`/content/profile/${user.userId._id}`)}>
              <img src={user.profileImg || PROFILE_IMAGE} />
              {user.userId.username}
              <div>
                <div>
                  {user.location && <Ico>place</Ico>}
                  {user.location}
                </div>
                <div>
                  {user.briefInfo && <Ico>person</Ico>}
                  {user.briefInfo}
                </div>
              </div>
            </User>
          ))}
      </UsersGrid>
    </UsersWrapper>
  )
}

export default Users
