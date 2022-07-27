import ModalBrowseFilter from "components/modals/ModalBrowseFilter"
import React, { useState } from "react"
import { MdFilterList } from "react-icons/md"

const BrowseFilter = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        className="flex h-42 w-42 items-center justify-center rounded-12 hover:bg-grey-light-10"
        onClick={() => setOpen(true)}
      >
        <MdFilterList className="text-24 text-white" />
      </button>
      <ModalBrowseFilter handler={setOpen} open={open} />
    </>
  )
}

export default BrowseFilter
