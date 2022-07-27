import { createCtx } from "contexts/Context"
import { DropdownInterface } from "libs/interfaces"
import React, { createContext, useState } from "react"

type BrowseContextType = {
  age: DropdownInterface | undefined
  area: DropdownInterface | undefined
  experience: DropdownInterface | undefined
  gender: DropdownInterface | undefined
  priceMin: number
  priceMax: number
  region: DropdownInterface | undefined
  setAge: any
  setArea: any
  setExperience: any
  setGender: any
  setPriceMin: any
  setPriceMax: any
  setRegion: any
}

export const [useBrowse, CtxProvider] = createCtx<BrowseContextType>()

export const BrowseContext = createContext<BrowseContextType | undefined>(undefined)

export const BrowseProvider = ({ children }: { children: React.ReactNode }) => {
  const [age, setAge] = useState<DropdownInterface>()
  const [area, setArea] = useState<DropdownInterface>()
  const [experience, setExperience] = useState<DropdownInterface>()
  const [gender, setGender] = useState<DropdownInterface>()
  const [priceMin, setPriceMin] = useState(0)
  const [priceMax, setPriceMax] = useState(0)
  const [region, setRegion] = useState<DropdownInterface>()

  return (
    <>
      <CtxProvider
        value={{
          age,
          area,
          experience,
          gender,
          priceMin,
          priceMax,
          region,
          setAge,
          setArea,
          setExperience,
          setGender,
          setPriceMin,
          setPriceMax,
          setRegion
        }}
      >
        {children}
      </CtxProvider>
    </>
  )
}

export default BrowseProvider
