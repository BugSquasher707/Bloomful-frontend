import EgxLogin from "ellingsenx/EgxLogin"
import React from "react"
import Button from "utils/buttons/Button"

const AuthLogin = () => {
  return (
    <>
      <div className="grid w-full grid-cols-1 gap-40">
        <div className="grid w-full grid-cols-1 gap-14">
          <div className="w-full text-24 font-semibold text-white sm:text-32 md:text-[36px]">Sign in</div>
          <div className="flex w-full justify-start">
            <div className="w-full max-w-[250px] text-14 text-white">
              Use EllingsenX to sign in and consult with our therapist now.
            </div>
          </div>
        </div>
        <div className="flex w-full justify-start">
          <EgxLogin>
            <Button handler={() => null} title={"EllingsenX"} />
          </EgxLogin>
        </div>
      </div>
    </>
  )
}

export default AuthLogin
