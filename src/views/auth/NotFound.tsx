import { SLUG } from "libs/constants"
import React from "react"
import { Helmet } from "react-helmet"

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 {SLUG}</title>
      </Helmet>
      Not Found
    </>
  )
}

export default NotFound
