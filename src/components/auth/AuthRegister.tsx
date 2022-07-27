import { openLink } from "api/integration/functions"
import { URL_EGX } from "ellingsenx/libs/constants"
import React from "react"

const AuthRegister = () => {
  return (
    <>
      <div className="grid w-full grid-cols-1 gap-40">
        <div className="grid w-full grid-cols-1 gap-14">
          <div className="w-full text-24 font-semibold text-white sm:text-32 md:text-[36px]">Sign up</div>
          <div className="flex w-full justify-start">
            <div className="w-full max-w-[250px] text-14 text-white">
              Use EllingsenX to sign in and consult with our therapist now.
            </div>
          </div>
        </div>
        <div className="flex w-full justify-start">
          <button
            className="flex h-48 items-center rounded-6 bg-purple px-24 font-semibold text-white transition-colors duration-200"
            onClick={(e) => openLink(e, URL_EGX.REGISTER)}
          >
            EllingsenX
          </button>
        </div>
      </div>
    </>
  )
}

export default AuthRegister
