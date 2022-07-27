import React from "react"

const BgAnimation = () => {
  return (
    <>
      <div className="fixed left-0 top-0 h-full w-full blur-[200px] filter">
        <div className="absolute top-[30%] left-[10%] h-[70vw] w-[70vw] translate-x-[-50%] translate-y-[-50%] transform animate-circle-one rounded-full bg-gradient-to-tr from-[#A091FF] to-[#1E0059]"></div>
        <div className="absolute top-[20%] left-[70%] h-[70vw] w-[70vw] translate-x-[-50%] translate-y-[-50%] transform animate-circle-two rounded-full bg-gradient-to-tr from-[#1E0059] to-[#FF91E7]"></div>
        <div className="absolute top-[80%] left-[20%] h-[70vw] w-[70vw] translate-x-[-50%] translate-y-[-50%] transform animate-circle-three rounded-full bg-gradient-to-tr from-[#1E0059] to-[#FF91E7]"></div>
        <div className="absolute top-[90%] left-[80%] h-[70vw] w-[70vw] translate-x-[-50%] translate-y-[-50%] transform animate-circle-four rounded-full bg-gradient-to-tr from-[#A091FF] to-[#1E0059]"></div>
      </div>
    </>
  )
}

export default BgAnimation
