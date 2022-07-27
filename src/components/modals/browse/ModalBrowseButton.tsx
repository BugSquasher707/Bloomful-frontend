import React from "react"
import { MdKeyboardArrowRight } from "react-icons/md"

const ModalBrowseButton = ({ value, handler }: { value?: string; handler: any }) => {
  return (
    <>
      <button
        className="relative grid h-44 w-full grid-cols-[1fr,auto] items-center gap-12 rounded-12 bg-grey-dark-10 px-16"
        onClick={handler}
      >
        <div className="w-full text-left text-14 font-semibold text-white">{value ? value : "Select"}</div>
        <MdKeyboardArrowRight className="text-24 text-white" />
      </button>
    </>
  )
}

export default ModalBrowseButton
