import Nav from "components/nav/Nav"
import WrapperPage from "components/wrapper/WrapperPage"
import { SLUG } from "libs/constants"
import React from "react"
import { Helmet } from "react-helmet"

const Account = () => {
  return (
    <>
      <Helmet>
        <title>Account {SLUG}</title>
      </Helmet>
      <Nav />
      <WrapperPage title={"Account"}>
        <div className="w-full p-30">Account</div>
      </WrapperPage>
    </>
  )
}

export default Account
