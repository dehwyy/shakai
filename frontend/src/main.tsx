import * as React from "react"
import { createRoot } from "react-dom/client"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import FontStyles from "./globalStyles/fonts/FontStyles"
import { Provider } from "react-redux"
import store from "./store/store"
const root = createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <FontStyles />
      <App />
    </BrowserRouter>
  </Provider>,
)
