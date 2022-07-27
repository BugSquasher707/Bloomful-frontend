import Nav from "components/nav/Nav"
import WrapperPage from "components/wrapper/WrapperPage"
import { SLUG } from "libs/constants"
import React from "react"
import { Helmet } from "react-helmet"

const Journal = () => {
  return (
    <>
      <Helmet>
        <title>Journal {SLUG}</title>
      </Helmet>
      <Nav />
      <WrapperPage title={"Journal"}>
        <div className="w-full p-30">Journal</div>
      </WrapperPage>
    </>
  )
}

export default Journal
