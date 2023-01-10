import * as React from "react"
import { useEffect, useState } from "react"
import { NavbarWrapper, NavbarItem, NavbarItemFirst, NavbarItemLast } from "./Navbar-styles"
import Ico from "../../UI/Ico"
import { Link, useParams } from "react-router-dom"
import MenuProfile from "./profileMenu/MenuProfile"
import { useGetUserPageInfoQuery } from "../../store/req/userPage-slice-api"
import { useLogoutMutation } from "../../store/req/currentUser-slice-api"

const Navbar = () => {
  const [isVisibleMenu, setVisibleMenu] = useState<boolean>(false)
  const [img, setImg] = useState("")
  const { id } = useParams()
  const { data: userPageData } = useGetUserPageInfoQuery(id as string)
  useEffect(() => {
    setImg(userPageData?.profileImg as string)
  }, [userPageData?.profileImg])
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
        {img ? <img src={img} alt="profileImage" /> : <Ico>account_circle</Ico>}
        {isVisibleMenu && <MenuProfile />}
      </NavbarItemLast>
    </NavbarWrapper>
  )
}

export default Navbar
