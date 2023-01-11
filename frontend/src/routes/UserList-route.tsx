import * as React from "react"
import { Route } from "react-router-dom"
import Navbar from "../components/navbar/Navbar"
import Users from "../components/users/Users"

const UserListRoute = () => {
  return (
    <>
      <Navbar />
      <Users />
    </>
  )
}

export default UserListRoute
