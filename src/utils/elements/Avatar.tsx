import React from "react"

const Avatar = ({
  avatar,
  name,
  size,
  online,
  light
}: {
  avatar: string
  name: string
  size?: number
  online?: boolean
  light?: boolean
}) => {
  return (
    <>
      <div
        className={`text-bold tr relative flex items-center justify-center rounded-full text-18 text-white ${
          light ? "bg-grey-light-40" : "group-hover:bg-grey-light-60 bg-grey-dark-40"
        }`}
        style={{
          width: size ? `${size}px` : "48px",
          height: size ? `${size}px` : "48px"
        }}
      >
        {avatar ? (
          <img alt="avatar" className="h-full w-full rounded-full" src={avatar} />
        ) : (
          name.charAt(0).toUpperCase()
        )}
        {online ? (
          <div className="bg-green absolute bottom-[3px] right-[-1px] flex h-12 w-12 items-center justify-center rounded-full border-2 border-white"></div>
        ) : (
          ""
        )}
      </div>
    </>
  )
}

export default Avatar
