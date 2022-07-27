import React from "react"

const ButtonBorder = ({ title, handler }: { title: string; handler: any }) => {
  return (
    <>
      <button
        className="flex h-48 items-center rounded-6 border-1 border-grey-dark-10 px-24 font-semibold text-grey-dark-70 transition-colors duration-200 hover:bg-grey-dark-10 hover:text-grey-dark"
        onClick={() => handler()}
      >
        {title}
      </button>
    </>
  )
}

export default ButtonBorder
