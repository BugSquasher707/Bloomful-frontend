import { DropdownInterface } from "libs/interfaces"
import React from "react"
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md"

const ModalBrowseItem = ({
  value,
  active,
  handler
}: {
  value: DropdownInterface
  active?: DropdownInterface
  handler: any
}) => {
  return (
    <>
      <button className="grid w-full grid-cols-[1fr,auto] gap-12" onClick={() => handler(value)}>
        <div className="w-full text-left text-14 font-semibold text-white sm:text-16">{value.title}</div>
        <div className="flex">
          {value === active ? (
            <MdCheckBox className="text-24 text-white" />
          ) : (
            <MdCheckBoxOutlineBlank className="text-24 text-white" />
          )}
        </div>
      </button>
    </>
  )
}

export default ModalBrowseItem
