import React, { useState } from "react"
import { IoMdEye, IoMdEyeOff } from "react-icons/io"

const InputField = ({
  title,
  placeholder,
  value,
  handler,
  password
}: {
  title: string
  placeholder: string
  value: string
  handler: any
  password?: boolean
}) => {
  const [hidden, setHidden] = useState(password)

  return (
    <>
      <div className="grid w-full grid-cols-1 gap-6">
        <div className="w-full text-14 text-white">{title}</div>
        <div className="relative w-full rounded-4 bg-grey-light-20">
          <input
            className="flex h-50 w-full items-center rounded-4 px-20 text-14 text-white"
            placeholder={placeholder}
            type={hidden ? "password" : "text"}
            value={value}
            onChange={(e) => handler(e.target.value)}
          />
          {password ? (
            <button
              className="absolute top-4 right-4 flex h-42 w-42 items-center justify-center rounded-4 bg-grey-dark-10 hover:bg-grey-dark-40"
              onClick={() => setHidden(!hidden)}
            >
              {hidden ? <IoMdEyeOff className="text-16 text-white" /> : <IoMdEye className="text-16 text-white" />}
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  )
}

export default InputField
