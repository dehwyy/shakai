import * as React from "react"
import { FC, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

const Redirect: FC<{ url: string }> = ({ url }) => {
  const { id } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    navigate(url + id)
  }, [])
  return <></>
}

export default Redirect
