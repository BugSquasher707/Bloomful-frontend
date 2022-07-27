import React from "react"

const OnboardingBottom = ({ title, text }: { title: string; text: string }) => {
  return (
    <>
      <div className="flex w-full justify-center">
        <div className="grid w-[300px] max-w-full grid-cols-1 gap-4">
          <div className="w-full text-center text-18 font-semibold text-white sm:text-22">{title}</div>
          <div className="w-full text-center text-14 text-grey-light-40 sm:text-16">{text}</div>
        </div>
      </div>
    </>
  )
}

export default OnboardingBottom
