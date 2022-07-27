import Wrapper from "components/wrapper/Wrapper"
import { DropdownInterface } from "libs/interfaces"
import React, { useState } from "react"
import { MdKeyboardArrowDown } from "react-icons/md"

const Dropdown = ({ options, selected, handler }: { options: DropdownInterface[]; selected: string; handler: any }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="relative w-full">
        <Wrapper open={open}>
          <div
            className="fixed top-0 left-0 z-10 h-full w-full backdrop-blur-sm backdrop-filter"
            onClick={() => setOpen(false)}
          ></div>
        </Wrapper>
        <button
          className={`relative grid h-44 w-full grid-cols-[1fr,auto] items-center gap-12 rounded-12 bg-grey-dark-10 px-16 ${
            open ? "z-20" : ""
          }`}
          onClick={() => setOpen(!open)}
        >
          <div className="w-full text-left text-14 text-white">{selected ? selected : "Select"}</div>
          <MdKeyboardArrowDown className="text-24 text-white" />
        </button>
        <Wrapper open={open}>
          <div className="absolute top-50 left-0 z-10 w-full rounded-12 bg-grey-dark-10 p-4">
            {options.map((option, key: number) => (
              <button key={key} className="w-full" onClick={() => handler(option.value)}>
                {option.title}
              </button>
            ))}
          </div>
        </Wrapper>
      </div>
    </>
  )
}

export default Dropdown
