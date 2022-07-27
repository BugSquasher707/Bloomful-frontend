import React from "react"

const ButtonBorder = ({ icon, handler }: { icon: JSX.Element; handler: any }) => {
  return (
    <>
      <button
        className="group flex h-48 w-48 items-center justify-center rounded-6 border-1 border-grey-dark-10 font-semibold text-grey-dark-70 transition-colors duration-200 hover:bg-grey-dark-10 hover:text-grey-dark"
        onClick={() => handler()}
      >
        {icon}
      </button>
    </>
  )
}

export default ButtonBorder
