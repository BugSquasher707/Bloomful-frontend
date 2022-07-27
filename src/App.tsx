import OverlayLoading from "components/overlays/OverlayLoading"
import OverlayMaintenance from "components/overlays/OverlayMaintenance"
import WrapperRouter from "components/wrapper/WrapperRouter"
import { useProps } from "contexts/PropsContext"
import { ENVIRONMENT } from "libs/constants"
import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import RoutesAuth from "router/routes/RoutesAuth"
import RoutesUser from "router/routes/RoutesDashboard"
import RoutesLanding from "router/routes/RoutesLanding"
import ScrollToTop from "utils/elements/ScrollToTop"

const App = () => {
  const { loading } = useProps()

  if (ENVIRONMENT === "production") {
    return (
      <>
        <OverlayMaintenance />
      </>
    )
  }

  if (loading) {
    return <OverlayLoading />
  }

  return (
    <>
      <div className="w-full min-w-[300px]">
        <div className="fixed top-0 left-0 h-screen w-full bg-blue"></div>
        <div className="relative w-full">
          <Router>
            <ScrollToTop />
            <WrapperRouter>
              {RoutesAuth.map((props) => props.component)}
              {RoutesUser.map((props) => props.component)}
              {RoutesLanding.map((props) => props.component)}
            </WrapperRouter>
          </Router>
        </div>
      </div>
    </>
  )
}

export default App
