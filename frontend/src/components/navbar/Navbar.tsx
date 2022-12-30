import * as React from "react"
import { useEffect, useState } from "react"
import {
  NavbarWrapper,
  NavbarItem,
  NavbarItemFirst,
  NavbarItemLast,
} from "./Navbar-styles"
import Ico from "../../UI/Ico"
import { Link, useNavigate, useParams } from "react-router-dom"
import MenuProfile from "./profileMenu/MenuProfile"
import { useTypedSelector } from "../../store/typed-hooks"

const Navbar = () => {
  const [isVisibleMenu, setVisibleMenu] = useState<boolean>(false)
  const { id } = useParams()
  const navigate = useNavigate()
  const userId = useTypedSelector(state => state.CurrentUserStore.user.userId)
  useEffect(() => {
    if (!id) {
      navigate(userId)
    }
  }, [])
  return (
    <NavbarWrapper>
      <NavbarItemFirst>
        <Link to="/content">
          <Ico>home</Ico>
        </Link>
      </NavbarItemFirst>
      <NavbarItem>
        <Link to="/content/users">
          <Ico>people</Ico>
        </Link>
      </NavbarItem>
      <NavbarItemLast onClick={() => setVisibleMenu(prev => !prev)}>
        <Ico>account_circle</Ico>
        {isVisibleMenu && <MenuProfile />}
      </NavbarItemLast>
    </NavbarWrapper>
  )
}

export default Navbar
