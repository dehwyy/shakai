import * as React from "react"
import { Route, Routes } from "react-router-dom"
import Login from "../components/newAuthForm/Login"
import Registration from "../components/newAuthForm/Registration"
import Redirect from "../components/Redirect"
import UserPageRoute from "./UsePage-route"
import UserListRoute from "./UserList-route"
import SettingsPageRoute from "./SettingsPage-route"

const RoutesWrapper = () => {
  return (
    <Routes>
      <Route path={"*"} element={<Login />} />
      <Route path={"registration"} element={<Registration />} />
      <Route path={"content"}>
        <Route path={"profile/:id"} element={<UserPageRoute />} />
        <Route path={"users/:id"} element={<UserListRoute />} />
        <Route path={"settings/:id"} element={<SettingsPageRoute />} />
        <Route path={"redirect/:id"} element={<Redirect url={"/content/profile/"} />} />
      </Route>
    </Routes>
  )
}

export default RoutesWrapper
