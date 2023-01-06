import * as React from "react"
import { useEffect, useState } from "react"
import { NavbarWrapper, NavbarItem, NavbarItemFirst, NavbarItemLast } from "./Navbar-styles"
import Ico from "../../UI/Ico"
import { Link, useNavigate, useParams } from "react-router-dom"
import MenuProfile from "./profileMenu/MenuProfile"
import { useTypedSelector } from "../../store/typed-hooks"
import getUserImageById from "../../requests/getUserImageById"

const Navbar = () => {
  const [isVisibleMenu, setVisibleMenu] = useState<boolean>(false)
  const { id } = useParams()
  const navigate = useNavigate()
  const userId = localStorage.getItem("userId") as string
  const imgProfile = useTypedSelector(state => state.UsersStore.users.find(user => user.id === userId))?.profileImg
  const [img, setImg] = useState(imgProfile)
  useEffect(() => {
    ;(async () => {
      if (!id) {
        navigate(userId)
      }
      const image = await getUserImageById(userId)
      setImg(image)
    })()
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
        {img ? <img src={img} /> : <Ico>account_circle</Ico>}
        {isVisibleMenu && <MenuProfile />}
      </NavbarItemLast>
    </NavbarWrapper>
  )
}

export default Navbar
