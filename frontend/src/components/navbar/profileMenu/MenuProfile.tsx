import * as React from "react"
import { MenuBody, MenuItem, MenuWrapper } from "./MenuProfile-style"
import Ico from "../../../UI/Ico"
import { Link } from "react-router-dom"
import logout from "../../../requests/logout"
import { useTypedSelector } from "../../../store/typed-hooks"

const MenuProfile = () => {
  const isAuth = useTypedSelector((state) => state.CurrentUserStore.user.isAuth)
  const linkTo = isAuth ? "/content/profile" : "/"
  const profileText = isAuth ? "Profile" : "Authorization"
  return (
    <MenuWrapper>
      <MenuBody>
        <Link
          to={linkTo}
          data-testid="accessTokenTestId"
        >
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
          <MenuItem onClick={() => logout()}>
            <Ico> exit_to_app </Ico>
            Log out
          </MenuItem>
        )}
      </MenuBody>
    </MenuWrapper>
  )
}

export default MenuProfile
