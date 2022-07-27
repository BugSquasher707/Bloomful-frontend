import Nav from "components/nav/Nav"
import WrapperPage from "components/wrapper/WrapperPage"
import { SLUG } from "libs/constants"
import React from "react"
import { Helmet } from "react-helmet"

const Policies = () => {
  return (
    <>
      <Helmet>
        <title>Policies {SLUG}</title>
      </Helmet>
      <Nav />
      <WrapperPage title={"Policies"}>
        <div className="w-full p-30">Policies</div>
      </WrapperPage>
    </>
  )
}

export default Policies
