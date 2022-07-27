import React from "react"
import { MdClose } from "react-icons/md"

const ModalClose = ({ handler, light }: { handler: any; light?: boolean }) => {
  return (
    <>
      <button
        className={`tr absolute top-0 right-0 z-10 flex h-40 w-40 items-center justify-center rounded-12 transition-colors duration-200 ${
          light ? "hover:bg-grey-light-10" : "hover:bg-grey-dark-10"
        }`}
        onClick={() => handler(false)}
      >
        <MdClose className={`tr text-22 ${light ? "text-grey-light" : "text-grey-dark"}`} />
      </button>
    </>
  )
}

export default ModalClose
