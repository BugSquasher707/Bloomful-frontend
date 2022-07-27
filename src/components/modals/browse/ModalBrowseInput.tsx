import { BrowseFilterType } from "libs/enums"
import React from "react"
import { FaDollarSign } from "react-icons/fa"
import Button from "utils/buttons/Button"

const ModalBrowseInput = ({
  title,
  valueMin,
  valueMax,
  handlerValueMin,
  handlerValueMax,
  handlerFilter
}: {
  title: string
  valueMin: number
  valueMax: number
  handlerValueMin: any
  handlerValueMax: any
  handlerFilter: any
}) => {
  return (
    <>
      <div className="w-full text-left text-16 font-semibold text-white sm:text-18 md:text-22">{title}</div>

      <div className="grid w-full grid-cols-2 gap-20">
        <div className="grid h-44 w-full grid-cols-[auto,1fr] items-center rounded-12 bg-grey-light-10">
          <button className="flex h-44 w-44 items-center justify-center rounded-12 hover:bg-grey-light-10">
            <FaDollarSign className="text-20 text-white" />
          </button>
          <input
            className="px-16 text-14 text-white sm:text-16"
            placeholder="Min"
            type="number"
            value={valueMin ? valueMin : ""}
            onChange={(e) => handlerValueMin(e.target.value)}
          />
        </div>
        <div className="grid h-44 w-full grid-cols-[auto,1fr] items-center rounded-12 bg-grey-light-10">
          <button className="flex h-44 w-44 items-center justify-center rounded-12 hover:bg-grey-light-10">
            <FaDollarSign className="text-20 text-white" />
          </button>
          <input
            className="px-16 text-14 text-white sm:text-16"
            placeholder="Max"
            type="number"
            value={valueMax ? valueMax : ""}
            onChange={(e) => handlerValueMax(e.target.value)}
          />
        </div>
      </div>
      <Button handler={() => handlerFilter(BrowseFilterType.Default)} title={"Save"} />
    </>
  )
}

export default ModalBrowseInput
