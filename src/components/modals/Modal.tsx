import ModalBg from "components/modals/ModalBg"
import ModalClose from "components/modals/ModalClose"
import Wrapper from "components/wrapper/Wrapper"
import React from "react"

const Modal = ({ children, open, handler, light }: { children: any; open: boolean; handler: any; light?: boolean }) => {
  return (
    <>
      <Wrapper open={open}>
        <div className="fixed top-0 left-0 z-30 flex h-screen w-screen min-w-[330px] items-center p-20">
          <div className="flex max-h-full w-full justify-center overflow-y-auto rounded-4">
            <ModalBg handler={handler} />
            <div className="relative z-20 max-w-full">
              <ModalClose handler={handler} light={light} />
              {children}
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  )
}

export default Modal
