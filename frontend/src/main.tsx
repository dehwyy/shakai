import * as React from "react"
import { createRoot } from "react-dom/client"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import FontStyles from "./globalStyles/fonts/FontStyles"
import { Provider } from "react-redux"
const root = createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <BrowserRouter>
    <FontStyles />
    <App />
  </BrowserRouter>,
)
