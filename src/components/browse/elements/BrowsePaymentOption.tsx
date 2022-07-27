import React from "react"
import { MdKeyboardArrowRight } from "react-icons/md"

const BrowseSchedulePayment = ({ icon, title, handler }: { icon: JSX.Element; title: string; handler: any }) => {
  return (
    <>
      <button className="grid w-full grid-cols-[1fr,auto] items-center gap-20" onClick={handler}>
        <div className="grid w-full grid-cols-[auto,1fr] items-center gap-8">
          {icon}
          <div className="w-full text-left text-14 font-semibold text-white">{title}</div>
        </div>
        <MdKeyboardArrowRight className="text-16 text-white" />
      </button>
    </>
  )
}

export default BrowseSchedulePayment
