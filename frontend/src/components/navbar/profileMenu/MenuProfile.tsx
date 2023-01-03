import * as React from "react"
import { MenuBody, MenuItem, MenuWrapper } from "./MenuProfile-style"
import Ico from "../../../UI/Ico"
import { Link, useParams } from "react-router-dom"
import logout from "../../../requests/logout"
import { useTypedDispatch, useTypedSelector } from "../../../store/typed-hooks"
import { setAuth } from "../../../store/slices/currentUser-store"

const MenuProfile = () => {
  const isAuth = useTypedSelector(state => state.CurrentUserStore.user.isAuth)
  const dispatch = useTypedDispatch()
  const profileText = isAuth ? "Profile" : "Authorization"
  const currentUserId = localStorage.getItem("userId")
  const { id } = useParams()
  const page = currentUserId !== id && (isAuth ? `/content/redirect/${currentUserId}` : "/")
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
            onClick={() => {
              logout()
              dispatch({ type: setAuth, payload: false })
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
