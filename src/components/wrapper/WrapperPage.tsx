import Wrapper from "components/wrapper/Wrapper"
import React from "react"
import { MdKeyboardArrowLeft } from "react-icons/md"
import { useHistory } from "react-router-dom"
import BgAnimation from "utils/elements/BgAnimation"

const WrapperPage = ({
  children,
  title,
  bg,
  purple,
  right,
  back
}: {
  children: any
  title: string
  bg?: boolean
  purple?: boolean
  right?: JSX.Element
  back?: boolean
}) => {
  const history = useHistory()

  return (
    <>
      <Wrapper open={purple ? true : false}>
        <BgAnimation />
      </Wrapper>
      <div className="fixed top-0 right-0 left-100 bottom-0 z-10 flex flex-col overflow-y-scroll">
        <div
          className={`flex h-70 w-full items-center justify-between gap-12 px-20 sm:px-32 ${
            bg ? "border-b-1 border-grey-light-20 bg-grey-light-10" : ""
          }`}
        >
          <div className="flex h-70 items-center gap-12 text-20 font-semibold text-white sm:text-24 md:text-26">
            <Wrapper open={back ?? false}>
              <button
                className="flex h-42 w-42 items-center justify-center rounded-12 hover:bg-grey-light-10"
                onClick={() => history.goBack()}
              >
                <MdKeyboardArrowLeft className="text-24 text-white" />
              </button>
            </Wrapper>
            {title}
          </div>
          {right}
        </div>
        {children}
      </div>
    </>
  )
}

export default WrapperPage
