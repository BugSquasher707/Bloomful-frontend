import AnimationLoading from "components/animations/AnimationLoading"
import React, { Suspense } from "react"
import { Switch } from "react-router"

const WrapperRouter = ({ children }: { children: any }) => {
  return (
    <>
      <Suspense fallback={<AnimationLoading />}>
        <Switch>{children}</Switch>
      </Suspense>
    </>
  )
}

export default WrapperRouter
