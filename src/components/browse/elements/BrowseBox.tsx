import React from "react"

const BrowseBox = ({ children, title }: { children: any; title: string }) => {
  return (
    <>
      <div className="grid w-full grid-cols-1 gap-12 rounded-12 bg-grey-light-10 p-20">
        <div className="w-full text-16 font-semibold text-white sm:text-18">{title}</div>
        {children}
      </div>
    </>
  )
}

export default BrowseBox
