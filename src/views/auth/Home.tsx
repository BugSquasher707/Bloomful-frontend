import { useProps } from "contexts/PropsContext"
import { URL } from "libs/constants"
import React, { useEffect } from "react"
import { useHistory } from "react-router-dom"

const Home = () => {
  const { authenticated } = useProps()

  const history = useHistory()

  useEffect(() => {
    history.push(authenticated ? URL.DASHBOARD : URL.ONBOARDING)
  }, [])

  return <></>
}

export default Home
