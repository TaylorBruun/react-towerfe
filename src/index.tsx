import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import "bootstrap/dist/css/bootstrap.css"
import "./index.css"
import { Auth0Provider } from "@auth0/auth0-react"

const container = document.getElementById("root")!
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={"dev-9b4l8l0z.us.auth0.com"}
      clientId={"I4Pt8FlULkBPFovOcWdDDZSqO1uDJDQa"}
      redirectUri={window.location.origin}
      audience="https://TayDev.com"
      scope="read:current_user"
    >
      <Provider store={store}>
        <App />
      </Provider>
    </Auth0Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
