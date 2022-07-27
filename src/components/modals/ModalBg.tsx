import React from "react"

const ModalBg = ({ handler }: { handler: any }) => {
  return (
    <>
      <button
        className="fixed top-[-100px] left-0 z-10 h-[calc(100vh+200px)] w-screen bg-grey-dark-40 backdrop-blur-md backdrop-filter"
        onClick={() => handler(false)}
      ></button>
    </>
  )
}

export default ModalBg
