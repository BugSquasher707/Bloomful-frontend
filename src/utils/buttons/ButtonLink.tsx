import React from "react"
import { Link } from "react-router-dom"

const ButtonLink = ({ title, link }: { title: string; link: any }) => {
  return (
    <>
      <Link
        className="flex h-48 items-center justify-center rounded-6 bg-purple px-24 font-semibold text-white transition-colors duration-200"
        to={link}
      >
        {title}
      </Link>
    </>
  )
}

export default ButtonLink
