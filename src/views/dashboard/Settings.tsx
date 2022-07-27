import Nav from "components/nav/Nav"
import WrapperPage from "components/wrapper/WrapperPage"
import { SLUG } from "libs/constants"
import React from "react"
import { Helmet } from "react-helmet"

const Settings = () => {
  return (
    <>
      <Helmet>
        <title>Settings {SLUG}</title>
      </Helmet>
      <Nav />
      <WrapperPage title={"Settings"} bg>
        <div className="flex w-full justify-center p-30">
          <div className="grid w-[340px] max-w-full grid-cols-1 gap-20">
            <div className="grid w-full grid-cols-1 gap-10">
              <div className="w-full text-14 font-semibold text-white">Notifications</div>
            </div>
            <div className="grid w-full grid-cols-1 gap-10">
              <div className="w-full text-14 font-semibold text-white">Language</div>
            </div>
            <div className="grid w-full grid-cols-1 gap-10">
              <div className="w-full text-14 font-semibold text-white">Security Lock</div>
            </div>
            <div className="grid w-full grid-cols-1 gap-10">
              <div className="w-full text-14 font-semibold text-white">Extra Information</div>
            </div>
          </div>
        </div>
      </WrapperPage>
    </>
  )
}

export default Settings
