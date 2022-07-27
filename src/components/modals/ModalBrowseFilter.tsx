import ModalBrowseDefault from "components/modals/browse/ModalBrowseDefault"
import ModalBrowseInput from "components/modals/browse/ModalBrowseInput"
import ModalBrowseTab from "components/modals/browse/ModalBrowseTab"
import Modal from "components/modals/Modal"
import { useBrowse } from "contexts/BrowseContext"
import { BrowseFilterType } from "libs/enums"
import { DropdownInterface } from "libs/interfaces"
import React, { useState } from "react"

const ModalBrowseFilter = ({ open, handler }: { open: boolean; handler: any }) => {
  const {
    age,
    area,
    experience,
    gender,
    priceMax,
    priceMin,
    region,
    setAge,
    setArea,
    setExperience,
    setGender,
    setPriceMax,
    setPriceMin,
    setRegion
  } = useBrowse()

  const [filter, setFilter] = useState(BrowseFilterType.Default)

  const [optionsAge] = useState<DropdownInterface[]>([
    {
      title: "18 - 24",
      value: "18-24"
    },
    {
      title: "25 - 35",
      value: "25-35"
    },
    {
      title: "36 - 50",
      value: "36-50"
    },
    {
      title: "51 - 60",
      value: "51-60"
    },
    {
      title: "70+",
      value: "70+"
    }
  ])

  const [optionsArea] = useState<DropdownInterface[]>([
    {
      title: "Thinking about suicide",
      value: "suicide"
    },
    {
      title: "Heartbreak",
      value: "heartbreak"
    },
    {
      title: "Depression",
      value: "depression"
    },
    {
      title: "Family issues",
      value: "family issues"
    },
    {
      title: "Trauma",
      value: "trauma"
    },
    {
      title: "Stress",
      value: "stress"
    },
    {
      title: "Mental health",
      value: "mental health"
    }
  ])

  const [optionsExperience] = useState<DropdownInterface[]>([
    {
      title: "1 - 3",
      value: "1-3"
    },
    {
      title: "4 - 5",
      value: "4-5"
    },
    {
      title: "6 - 10",
      value: "6-10"
    },
    {
      title: "11 - 20",
      value: "11-20"
    },
    {
      title: "20+",
      value: "20+"
    }
  ])

  const [optionsGender] = useState<DropdownInterface[]>([
    {
      title: "Male",
      value: "male"
    },
    {
      title: "Female",
      value: "female"
    },
    {
      title: "Other",
      value: "other"
    }
  ])

  const [optionsRegion] = useState<DropdownInterface[]>([
    {
      title: "Europe",
      value: "europe"
    },
    {
      title: "North America",
      value: "north america"
    },
    {
      title: "South America",
      value: "south america"
    },
    {
      title: "Australia",
      value: "australia"
    }
  ])

  return (
    <>
      <Modal handler={handler} open={open} light>
        <div className="grid w-[400px] grid-cols-1 gap-20 rounded-12 bg-grey-dark-40 p-20 sm:gap-30 sm:p-30">
          {
            {
              [BrowseFilterType.Age]: (
                <ModalBrowseTab
                  active={age}
                  handlerActive={setAge}
                  handlerFilter={setFilter}
                  options={optionsAge}
                  title={"Age range"}
                />
              ),
              [BrowseFilterType.Area]: (
                <ModalBrowseTab
                  active={area}
                  handlerActive={setArea}
                  handlerFilter={setFilter}
                  options={optionsArea}
                  title={"Area of help"}
                  hasSearch
                />
              ),
              [BrowseFilterType.Default]: (
                <ModalBrowseDefault
                  age={age}
                  area={area}
                  experience={experience}
                  gender={gender}
                  handler={handler}
                  handlerFilter={setFilter}
                  priceMax={priceMax}
                  priceMin={priceMin}
                  region={region}
                />
              ),
              [BrowseFilterType.Experience]: (
                <ModalBrowseTab
                  active={experience}
                  handlerActive={setExperience}
                  handlerFilter={setFilter}
                  options={optionsExperience}
                  title={"Years of experience"}
                />
              ),
              [BrowseFilterType.Gender]: (
                <ModalBrowseTab
                  active={gender}
                  handlerActive={setGender}
                  handlerFilter={setFilter}
                  options={optionsGender}
                  title={"Gender"}
                />
              ),
              [BrowseFilterType.Price]: (
                <ModalBrowseInput
                  handlerFilter={setFilter}
                  handlerValueMax={setPriceMax}
                  handlerValueMin={setPriceMin}
                  title={"Price"}
                  valueMax={priceMax}
                  valueMin={priceMin}
                />
              ),
              [BrowseFilterType.Region]: (
                <ModalBrowseTab
                  active={region}
                  handlerActive={setRegion}
                  handlerFilter={setFilter}
                  options={optionsRegion}
                  title={"Region"}
                />
              )
            }[filter]
          }
        </div>
      </Modal>
    </>
  )
}

export default ModalBrowseFilter
