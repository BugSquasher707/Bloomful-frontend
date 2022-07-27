import { URL } from "libs/constants"
import { AuthType } from "libs/enums"
import React from "react"
import { Redirect, Route } from "react-router-dom"
import RouteNoUser from "router/route/RouteNoUser"
import Auth from "views/auth/Auth"
import Onboarding from "views/auth/Onboarding"

export default [
  {
    component: (
      <RouteNoUser key={"auth"} path={URL.AUTH.BASE} exact>
        <Redirect to={URL.AUTH.LOGIN} />
      </RouteNoUser>
    )
  },
  {
    component: (
      <RouteNoUser key={"auth login"} path={URL.AUTH.LOGIN} exact>
        <Auth type={AuthType.Login} />
      </RouteNoUser>
    )
  },
  {
    component: (
      <RouteNoUser key={"auth register"} path={URL.AUTH.REGISTER} exact>
        <Auth type={AuthType.Register} />
      </RouteNoUser>
    )
  },
  {
    component: (
      <Route key={"onboarding"} path={URL.ONBOARDING} exact>
        <Onboarding />
      </Route>
    )
  }
]
