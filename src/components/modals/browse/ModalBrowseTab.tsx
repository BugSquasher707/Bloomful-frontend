import ModalBrowseItem from "components/modals/browse/ModalBrowseItem"
import Wrapper from "components/wrapper/Wrapper"
import { BrowseFilterType } from "libs/enums"
import { DropdownInterface } from "libs/interfaces"
import React, { useState } from "react"
import { MdSearch } from "react-icons/md"
import Button from "utils/buttons/Button"

const ModalBrowseTab = ({
  title,
  active,
  options,
  hasSearch,
  handlerActive,
  handlerFilter
}: {
  title: string
  active?: DropdownInterface
  options: DropdownInterface[]
  hasSearch?: boolean
  handlerActive: any
  handlerFilter: any
}) => {
  const [search, setSearch] = useState("")

  return (
    <>
      <div className="w-full text-left text-16 font-semibold text-white sm:text-18 md:text-22">{title}</div>
      <Wrapper open={hasSearch ?? false}>
        <div className="grid h-44 w-full grid-cols-[auto,1fr] items-center rounded-12 bg-grey-light-10">
          <button className="flex h-44 w-44 items-center justify-center rounded-12 hover:bg-grey-light-10">
            <MdSearch className="text-20 text-white" />
          </button>
          <input
            className="px-16 text-14 text-white sm:text-16"
            placeholder="Search"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </Wrapper>
      <div className="grid max-h-[300px] w-full grid-cols-1 gap-20 overflow-y-scroll">
        {options
          .filter(
            (option: DropdownInterface) =>
              !search || (search && option.title.toLowerCase().includes(search.toLowerCase()))
          )
          .map((value: DropdownInterface, key: number) => (
            <ModalBrowseItem key={key} active={active} handler={handlerActive} value={value} />
          ))}
      </div>
      <Button handler={() => handlerFilter(BrowseFilterType.Default)} title={"Save"} />
    </>
  )
}

export default ModalBrowseTab
