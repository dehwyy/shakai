import * as React from "react"
import { MenuBody, MenuItem, MenuWrapper } from "./MenuProfile-style"
import Ico from "../../../UI/Ico"
import { Link, useParams } from "react-router-dom"
import AuthReq from "../../../requests/AuthReq"

const MenuProfile = () => {
  const currentUserId = localStorage.getItem("userId")
  const profileText = currentUserId ? "Profile" : "Authorization"
  const { id } = useParams()
  const page = currentUserId !== id && (currentUserId ? `/content/redirect/${currentUserId}` : "/")
  return (
    <MenuWrapper>
      <MenuBody>
        <Link to={page as string} data-testid="accessTokenTestId">
          <MenuItem>
            <Ico> person </Ico>
            {profileText}
          </MenuItem>
        </Link>
        <MenuItem>
          <Ico> settings </Ico>
          Settings
        </MenuItem>
        {currentUserId && (
          <MenuItem
            onClick={async () => {
              await AuthReq.logout()
            }}>
            <Ico> exit_to_app </Ico>
            Log out
          </MenuItem>
        )}
      </MenuBody>
    </MenuWrapper>
  )
}

export default MenuProfile
