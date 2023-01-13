import * as React from "react"
import { useRef, useEffect, useState } from "react"
import { NavbarWrapper, NavbarItem, NavbarItemFirst, NavbarItemLast } from "./Navbar-styles"
import Ico from "../../UI/Ico"
import { Link, useParams } from "react-router-dom"
import MenuProfile from "./profileMenu/MenuProfile"
import { useGetUserPageInfoQuery } from "../../store/req/userPage-slice-api"
import { CSSTransition, SwitchTransition } from "react-transition-group"
import "./MenuAnimation.css"
const Navbar = () => {
  const [isVisibleMenu, setVisibleMenu] = useState<boolean>(false)
  const [img, setImg] = useState("")
  const { id } = useParams()
  const { data: userPageData } = useGetUserPageInfoQuery(id as string)
  useEffect(() => {
    setImg(userPageData?.profileImg as string)
  }, [userPageData?.profileImg])
  const nodeRef = useRef<HTMLDivElement>(null)
  return (
    <NavbarWrapper>
      <NavbarItemFirst>
        <Link to={`/content/${id}`}>
          <Ico>home</Ico>
        </Link>
      </NavbarItemFirst>
      <NavbarItem>
        <Link to={`/content/users/${id}`}>
          <Ico>people</Ico>
        </Link>
      </NavbarItem>
      <NavbarItemLast onClick={() => setVisibleMenu(prev => !prev)}>
        {img ? <img src={img} alt="profileImage" /> : <Ico>account_circle</Ico>}
        <SwitchTransition>
          <CSSTransition
            key={Number(isVisibleMenu)}
            nodeRef={nodeRef}
            addEndListener={done => nodeRef.current?.addEventListener("transitionend", done, false)}
            classNames="menu-ap">
            <div ref={nodeRef}>{isVisibleMenu && <MenuProfile />}</div>
          </CSSTransition>
        </SwitchTransition>
      </NavbarItemLast>
    </NavbarWrapper>
  )
}

export default Navbar
