import * as React from "react"
import { MenuBody, MenuItem, MenuWrapper } from "./MenuProfile-style"
import Ico from "../../../UI/Ico"
import { Link, redirect, useNavigate, useParams } from "react-router-dom"
import { useTypedSelector } from "../../../hooks/rtk-hooks"
import { useLogoutMutation } from "../../../store/req/currentUser-slice-api"
import { useEffect } from "react"

const MenuProfile = () => {
  const isAuth = useTypedSelector(state => state.currentUser.isAuth)
  const currentUserId = useTypedSelector(state => state.currentUser._id)
  const profileText = isAuth ? "Profile" : "Authorization"
  const { id } = useParams()
  const navigate = useNavigate()
  const page = currentUserId !== id && (currentUserId ? `/content/redirect/${currentUserId}` : "/")
  const [logout] = useLogoutMutation()
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
        {isAuth && (
          <MenuItem
            onClick={async () => {
              await logout()
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
