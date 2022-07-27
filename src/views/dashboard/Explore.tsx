import { ReactComponent as EmptyCards } from "assets/img/empty/cards.svg"
import Nav from "components/nav/Nav"
import WrapperPage from "components/wrapper/WrapperPage"
import { SLUG, URL } from "libs/constants"
import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"
import ButtonLink from "utils/buttons/ButtonLink"

const Explore = () => {
  return (
    <>
      <Helmet>
        <title>Explore {SLUG}</title>
      </Helmet>
      <Nav />
      <WrapperPage title={"Explore"} bg purple>
        <div className="flex w-full flex-grow items-center justify-center">
          <div className="grid w-[555px] max-w-full grid-cols-1 gap-40">
            <div className="w-full text-center text-16 font-semibold text-white sm:text-18 md:text-22">
              Would you like to answer some questions and get a therapist recommended to you, or would you rather browse
              through them?
            </div>
            <div className="grid w-full grid-cols-1 gap-20">
              <Link className="grid w-full grid-cols-1 gap-10 rounded-12 bg-grey-light-20 p-16" to={URL.BROWSE.BASE}>
                <div className="flex w-full justify-center">
                  <EmptyCards className="h-[70px] w-[55px]" />
                </div>
                <div className="w-full text-center text-14 text-white">Browse through therapists</div>
              </Link>
            </div>
            <div className="flex w-full justify-center">
              <div className="w-[270px] max-w-full">
                <ButtonLink link={URL.THERAPISTS.BASE} title="Back" />
              </div>
            </div>
          </div>
        </div>
      </WrapperPage>
    </>
  )
}

export default Explore
