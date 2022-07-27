import React from "react"
import { Link } from "react-router-dom"

const Button = ({ title, handler }: { title: string; handler: any }) => {
  return (
    <>
      {typeof handler === "string" ? (
        <Link
          className="flex h-48 items-center justify-center rounded-6 bg-purple px-24 font-semibold text-white transition-colors duration-200"
          to={handler}
        >
          {title}
        </Link>
      ) : (
        <button
          className="flex h-48 items-center justify-center rounded-6 bg-purple px-24 font-semibold text-white transition-colors duration-200"
          onClick={() => handler()}
        >
          {title}
        </button>
      )}
    </>
  )
}

export default Button
