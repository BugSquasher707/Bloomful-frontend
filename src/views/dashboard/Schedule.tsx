import Nav from "components/nav/Nav"
import WrapperPage from "components/wrapper/WrapperPage"
import { SLUG } from "libs/constants"
import React from "react"
import { Helmet } from "react-helmet"

const Schedule = () => {
  return (
    <>
      <Helmet>
        <title>Schedule {SLUG}</title>
      </Helmet>
      <Nav />
      <WrapperPage title={"Schedule"} bg purple>
        <div className="w-full p-30">Schedule</div>
      </WrapperPage>
    </>
  )
}

export default Schedule
