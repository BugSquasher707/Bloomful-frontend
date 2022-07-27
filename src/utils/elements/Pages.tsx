import React from "react"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"

const Pages = ({ page, pages, setPage }: { page: number; pages: number; setPage: any }) => {
  return (
    <>
      <div className="grid w-full grid-cols-[auto,1fr,auto] items-center gap-12">
        <button
          className="tr group flex h-40 w-40 items-center justify-center rounded-12 hover:bg-grey-light-20"
          onClick={() => setPage(page > 1 ? page - 1 : page)}
        >
          <MdKeyboardArrowLeft className="tr text-20 text-grey-light-20 group-hover:text-white" />
        </button>
        <div className="w-full text-center text-16 font-semibold text-white sm:text-18">
          {page} / {pages}
        </div>
        <button
          className="tr group flex h-40 w-40 items-center justify-center rounded-12 hover:bg-grey-light-20"
          onClick={() => setPage(page > pages ? page + 1 : page)}
        >
          <MdKeyboardArrowRight className="tr text-20 text-grey-light-20 group-hover:text-white" />
        </button>
      </div>
    </>
  )
}

export default Pages
