import { BookProductType } from "libs/enums"
import React from "react"

const BrowseProduct = ({
  icon,
  title,
  text,
  type,
  active,
  handler
}: {
  icon: JSX.Element
  title: string
  text: string
  type: BookProductType
  active?: BookProductType
  handler: any
}) => {
  return (
    <>
      <button
        className={`tr grid w-full grid-cols-1 gap-16 rounded-12 p-16 ${
          active === type ? "bg-grey-light-40" : "bg-grey-light-10"
        }`}
        onClick={() => handler(type)}
      >
        <div className="flex h-50 w-full items-center justify-center">{icon}</div>
        <div className="grid w-full grid-cols-1">
          <div className="w-full text-center text-14 text-white sm:text-16">{title}</div>
          <div className="w-full text-center text-12 text-grey-light-70">{text}</div>
        </div>
      </button>
    </>
  )
}

export default BrowseProduct
