import { useProps } from "contexts/PropsContext"
import { URL } from "libs/constants"
import React from "react"
import { Redirect, Route } from "react-router-dom"

const RouteUser = ({ children, ...rest }: any) => {
  const { route, authenticated, user } = useProps()

  return (
    <>
      <Route {...rest}>
        {!route && (!authenticated || !(user.isEmailVerified && user.acceptedTerms && user.isProfileComplete)) ? (
          <Redirect to={URL.HOME} />
        ) : (
          children
        )}
      </Route>
    </>
  )
}

export default RouteUser
