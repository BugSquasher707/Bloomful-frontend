import { ReactComponent as Icon } from "assets/img/icon.svg"
import NavLink from "components/nav/NavLink"
import { useProps } from "contexts/PropsContext"
import { URL } from "libs/constants"
import { LinkInterface } from "libs/interfaces"
import React, { useState } from "react"
import { BiHealth } from "react-icons/bi"
import { IoMdJournal } from "react-icons/io"
import { MdCalendarToday, MdChatBubble, MdExplore, MdGridView, MdLogout, MdSettings } from "react-icons/md"
import { Link } from "react-router-dom"

const Nav = () => {
  const { user, onReset } = useProps()

  const [links] = useState<LinkInterface[]>([
    {
      title: "Dashboard",
      link: URL.DASHBOARD,
      icon: <MdGridView className="text-24" />
    },
    {
      title: "Explore",
      link: URL.EXPLORE,
      icon: <MdExplore className="text-24" />
    },
    {
      title: "Journal",
      link: URL.JOURNAL.BASE,
      icon: <IoMdJournal className="text-24" />
    },
    {
      title: "Messages",
      link: URL.MESSAGES.BASE,
      icon: <MdChatBubble className="text-24" />
    },
    {
      title: "Schedule",
      link: URL.SCHEDULE,
      icon: <MdCalendarToday className="text-24" />
    },
    {
      title: "Settings",
      link: URL.SETTINGS.BASE,
      icon: <MdSettings className="text-24" />
    },
    {
      title: "Therapists",
      link: URL.THERAPISTS.BASE,
      icon: <BiHealth className="text-24" />
    }
  ])

  return (
    <>
      <div className="fixed top-0 left-0 bottom-0 z-10 flex h-[100vh] w-100 flex-col items-start overflow-y-scroll bg-grey-dark-40 p-24">
        <div className="w-full flex-grow">
          <div className="grid w-full grid-cols-1 items-start gap-40">
            <Link to={URL.HOME}>
              <Icon className="w-full" />
            </Link>
            <div className="grid w-full grid-cols-1 gap-10">
              {links.map((link: LinkInterface, key: number) => (
                <NavLink key={key} link={link} />
              ))}
            </div>
          </div>
        </div>
        <div className="grid w-full grid-cols-1 gap-40">
          <div className="grid w-full grid-cols-1 gap-10">
            <div className="grid w-full grid-cols-1 gap-10">
              <button className="relative w-full" onClick={onReset}>
                <div
                  className="${ relative flex h-50 w-full items-center justify-center
                   first:text-white"
                >
                  <MdLogout className="text-24" />
                </div>
              </button>
            </div>
            <div className="mt-10 flex w-full justify-center">
              <Link
                className="flex h-50 w-50 items-center justify-center rounded-full bg-purple text-20 uppercase text-white"
                to={URL.ACCOUNT}
              >
                {user.firstName.charAt(0)}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Nav
