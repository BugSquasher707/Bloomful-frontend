import App from "App"
import { PropsProvider } from "contexts/PropsContext"
import React from "react"
import { CookiesProvider } from "react-cookie"
import { createRoot } from "react-dom/client"
import { ToastContainer } from "react-toastify"

import reportWebVitals from "./reportWebVitals"
import "react-toastify/dist/ReactToastify.css"
import "assets/styles/base/base.css"
import "assets/styles/base/global.css"
import "assets/styles/base/index.css"
import "assets/styles/base/theme.css"
import "assets/styles/css/fade.css"
import "assets/styles/css/fonts.css"

const main = async () => {
  const container = document.getElementById("root")
  const root = createRoot(container!)

  root.render(
    <>
      <CookiesProvider>
        <PropsProvider>
          <App />
        </PropsProvider>
      </CookiesProvider>
      <ToastContainer
        autoClose={5000}
        className="z-50"
        hideProgressBar={false}
        newestOnTop={false}
        position="bottom-right"
        rtl={false}
        closeOnClick
        draggable
        pauseOnFocusLoss
        pauseOnHover
      />
    </>
  )
}

reportWebVitals()
main()
