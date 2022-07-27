import BrowseBook from "components/browse/BrowseBook"
import Nav from "components/nav/Nav"
import WrapperPage from "components/wrapper/WrapperPage"
import { SLUG } from "libs/constants"
import React from "react"
import { Helmet } from "react-helmet"
import { useParams } from "react-router"

interface Params {
  id: string
}

const BrowseTherapistBook = () => {
  const { id } = useParams<Params>()

  return (
    <>
      <Helmet>
        <title>Browse {SLUG}</title>
      </Helmet>
      <Nav />
      <WrapperPage title={"Browse"} back bg>
        {id ? (
          <BrowseBook id={id} />
        ) : (
          <div className="flex w-full flex-grow items-center justify-center p-30 sm:p-40 md:p-60">
            <div className="w-full text-center text-14 text-white">Loading...</div>
          </div>
        )}
      </WrapperPage>
    </>
  )
}

export default BrowseTherapistBook
