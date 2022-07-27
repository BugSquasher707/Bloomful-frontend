import Wrapper from "components/wrapper/Wrapper"
import { useProps } from "contexts/PropsContext"
import { LinkInterface } from "libs/interfaces"
import React from "react"
import { Link } from "react-router-dom"

const NavLink = ({ link }: { link: LinkInterface }) => {
  const { path } = useProps()

  return (
    <>
      <Link className="relative w-full" to={link.link}>
        <div
          className={`relative flex h-50 w-full items-center justify-center ${
            path === link.link ? "first:text-purple" : "first:text-white"
          }`}
        >
          {link.icon}
        </div>
        <Wrapper open={path === link.link}>
          <div className="absolute right-0 top-[50%] h-8 w-8 translate-y-[-50%] transform rounded-full bg-purple"></div>
        </Wrapper>
      </Link>
    </>
  )
}

export default NavLink
