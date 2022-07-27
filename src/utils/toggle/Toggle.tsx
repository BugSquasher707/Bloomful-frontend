import React from "react"
import { MdCheck } from "react-icons/md"

const Toggle = ({ title, value, handler }: { title: string; value: boolean; handler: any }) => {
  return (
    <>
      <button className="flex items-center gap-6" onClick={() => handler(!value)}>
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-2 border-1 bg-white ${
            value ? "border-grey-20 bg-white" : "border-purple bg-purple"
          }`}
        >
          <MdCheck className="text-12 text-white" />
        </div>
        {title ? <div className="text-14 text-white">{title}</div> : ""}
      </button>
    </>
  )
}

export default Toggle
