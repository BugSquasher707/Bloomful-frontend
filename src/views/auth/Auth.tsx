import { ReactComponent as Logo } from "assets/img/logo.svg"
import { ReactComponent as LogoBig } from "assets/img/logo_big.svg"
import AuthLogin from "components/auth/AuthLogin"
import AuthRegister from "components/auth/AuthRegister"
import { SLUG, URL } from "libs/constants"
import { AuthType } from "libs/enums"
import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"

const Auth = ({ type }: { type: AuthType }) => {
  return (
    <>
      <Helmet>
        <title>Login {SLUG}</title>
      </Helmet>
      <div className="fixed top-0 left-0 flex h-[100vh] w-full items-center bg-blue">
        <div className="absolute top-20 bottom-20 left-0">
          <LogoBig className="h-full" />
        </div>
        <div className="relative flex max-h-full w-full justify-center overflow-y-scroll px-20 sm:px-30 md:px-40">
          <div className="grid w-full max-w-screen-xl grid-cols-[1fr,400px] items-center">
            <div className="grid w-full grid-cols-1 gap-80 sm:gap-100">
              <Link className="w-full" to={URL.HOME}>
                <Logo />
              </Link>
              <div className="grid w-full grid-cols-1 gap-20">
                <div className="w-full text-24 font-semibold text-white sm:text-32 md:text-[36px]">Welcome back!</div>
                <div className="flex w-full justify-start">
                  <div className="w-[300px] max-w-full text-14 text-white">
                    Sign in to check out what you&apos;ve missed since you were last here.
                  </div>
                </div>
                {type === AuthType.Register ? (
                  <div className="w-full text-16 text-white">
                    Already have an account?{" "}
                    <Link className="text-16 text-purple underline" to={URL.AUTH.LOGIN}>
                      Sign in
                    </Link>
                  </div>
                ) : (
                  <div className="w-full text-16 text-white">
                    New user?{" "}
                    <Link className="text-16 text-purple underline" to={URL.AUTH.REGISTER}>
                      Create an account
                    </Link>
                  </div>
                )}
              </div>
            </div>
            {
              {
                [AuthType.Login]: <AuthLogin />,
                [AuthType.Register]: <AuthRegister />
              }[type]
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Auth
