import { ReactComponent as EmptyTherapist } from "assets/img/empty/therapists.svg"
import Nav from "components/nav/Nav"
import WrapperPage from "components/wrapper/WrapperPage"
import { SLUG, URL } from "libs/constants"
import React, { useState } from "react"
import { Helmet } from "react-helmet"
import ButtonLink from "utils/buttons/ButtonLink"

const Messages = () => {
  const [chats] = useState([])

  return (
    <>
      <Helmet>
        <title>Messages {SLUG}</title>
      </Helmet>
      <Nav />
      <WrapperPage title={"Messages"} bg purple>
        {chats.length > 0 ? (
          ""
        ) : (
          <div className="flex w-full flex-grow items-center justify-center p-30">
            <div className="grid w-[320px] max-w-full grid-cols-1 gap-40">
              <div className="flex w-full justify-center">
                <EmptyTherapist className="h-[145px] w-[149px]" />
              </div>
              <div className="grid w-full grid-cols-1 gap-20">
                <div className="w-full text-center text-14 font-semibold text-white sm:text-16 md:text-22">
                  You aren&apos;t subscribed to any therapists
                </div>
                <ButtonLink link={URL.EXPLORE} title="Explore Therapists" />
              </div>
            </div>
          </div>
        )}
      </WrapperPage>
    </>
  )
}

export default Messages
