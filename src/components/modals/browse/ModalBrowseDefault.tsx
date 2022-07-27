import ModalBrowseButton from "components/modals/browse/ModalBrowseButton"
import { BrowseFilterType } from "libs/enums"
import { DropdownInterface } from "libs/interfaces"
import React from "react"
import Button from "utils/buttons/Button"

const ModalBrowseDefault = ({
  age,
  area,
  experience,
  gender,
  region,
  priceMin,
  priceMax,
  handler,
  handlerFilter
}: {
  age?: DropdownInterface
  area?: DropdownInterface
  experience?: DropdownInterface
  gender?: DropdownInterface
  region?: DropdownInterface
  priceMin: number
  priceMax: number
  handler: any
  handlerFilter: any
}) => {
  return (
    <>
      <div className="w-full text-center text-16 font-semibold text-white sm:text-18 md:text-22">Filter</div>
      <div className="grid w-full grid-cols-1 gap-20">
        <div className="grid w-full grid-cols-1 gap-10">
          <div className="w-full text-14 text-white">Gender</div>
          <ModalBrowseButton
            handler={() => handlerFilter(BrowseFilterType.Gender)}
            value={gender ? gender.title : ""}
          />
        </div>
        <div className="grid w-full grid-cols-1 gap-10">
          <div className="w-full text-14 text-white">Area of Help</div>
          <ModalBrowseButton handler={() => handlerFilter(BrowseFilterType.Area)} value={area ? area.title : ""} />
        </div>
        <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-2">
          <div className="grid w-full grid-cols-1 gap-10">
            <div className="w-full text-14 text-white">Age Range</div>
            <ModalBrowseButton handler={() => handlerFilter(BrowseFilterType.Age)} value={age ? age.title : ""} />
          </div>
          <div className="grid w-full grid-cols-1 gap-10">
            <div className="w-full text-14 text-white">Region</div>
            <ModalBrowseButton
              handler={() => handlerFilter(BrowseFilterType.Region)}
              value={region ? region.title : ""}
            />
          </div>
        </div>
        <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-2">
          <div className="grid w-full grid-cols-1 gap-10">
            <div className="w-full text-14 text-white">Years of Experience</div>
            <ModalBrowseButton
              handler={() => handlerFilter(BrowseFilterType.Experience)}
              value={experience ? experience.title : ""}
            />
          </div>
          <div className="grid w-full grid-cols-1 gap-10">
            <div className="w-full text-14 text-white">Price Range</div>
            <ModalBrowseButton
              handler={() => handlerFilter(BrowseFilterType.Price)}
              value={priceMin && priceMax ? `$${priceMin} - $${priceMax}` : ""}
            />
          </div>
        </div>
      </div>
      <Button handler={() => handler(false)} title={"Close"} />
    </>
  )
}

export default ModalBrowseDefault
