import Nav from "components/nav/Nav"
import WrapperPage from "components/wrapper/WrapperPage"
import { SLUG } from "libs/constants"
import { TherapistInterface } from "libs/interfaces"
import React, { useState } from "react"
import { Helmet } from "react-helmet"

const Therapist = () => {
  const [therapist] = useState<TherapistInterface>()

  return (
    <>
      <Helmet>
        <title>Therapist {SLUG}</title>
      </Helmet>
      <Nav />
      <WrapperPage title={"Therapist"} bg purple>
        <div className="w">{therapist?.therapistId}</div>
      </WrapperPage>
    </>
  )
}

export default Therapist
