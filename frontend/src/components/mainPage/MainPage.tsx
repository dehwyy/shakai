import * as React from "react"
import { IntroTitle, MainPageWrapper, IntroDescription } from "./MainPage-styles"
import { useEffect, useState } from "react"

const MainPage = () => {
  const [styleT, setStyleT] = useState({ transform: "translateX(-1000px)" })
  const [styleD, setStyleD] = useState({ transform: "translateX(-1000px)" })
  useEffect(() => {
    setStyleT({ transform: "translateX(0)" })
    setTimeout(() => {
      setStyleD({ transform: "translateX(0)" })
    }, 1000)
  }, [])
  return (
    <MainPageWrapper>
      <IntroTitle style={styleT}>WebSocial</IntroTitle>
      <IntroDescription style={styleD}>
        Made by{" "}
        <a href="https://github.com/dehwyy" target="_blank">
          dehwyy
        </a>
      </IntroDescription>
    </MainPageWrapper>
  )
}

export default MainPage
