import React from "react"

const ButtonPill = ({ title, handler }: { title: string; handler: any }) => {
  return (
    <>
      <button className="flex h-34 items-center rounded-12 bg-blue px-20 text-14 text-white" onClick={() => handler()}>
        {title}
      </button>
    </>
  )
}

export default ButtonPill
