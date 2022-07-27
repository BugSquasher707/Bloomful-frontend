import BannerLight from "assets/img/banners/light.png"
import BannerPurple from "assets/img/banners/purple.png"
import ImageTherapists from "assets/img/therapists.png"
import ModalMood from "components/modals/ModalMood"
import Nav from "components/nav/Nav"
import WrapperPage from "components/wrapper/WrapperPage"
import { DATE, SLUG, URL } from "libs/constants"
import { moods } from "libs/data/moods"
import { MoodType } from "libs/enums"
import moment from "moment"
import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"
import Button from "utils/buttons/Button"
import ButtonPill from "utils/buttons/ButtonPill"
import MoodIcon from "utils/elements/MoodIcon"

const Dashboard = () => {
  const [openMood, setOpenMood] = useState(false)

  const [chat] = useState(false)

  const [mood, setMood] = useState<MoodType>()

  useEffect(() => {
    if (!openMood) {
      setMood(undefined)
    }
  }, [openMood])

  useEffect(() => {
    if (mood !== undefined) {
      setOpenMood(true)
    }
  }, [mood])

  return (
    <>
      <Helmet>
        <title>Dashboard {SLUG}</title>
      </Helmet>
      <Nav />
      <WrapperPage title={moment().format(DATE.WELCOME)} bg purple>
        <div className="flex w-full justify-center p-30">
          <div className="grid w-[660px] max-w-full grid-cols-1 gap-40">
            {chat ? (
              <div className="grid w-full grid-cols-1 gap-20">
                <div className="w-full text-16 font-bold text-white sm:text-18 md:text-22">Continue chatting</div>
                <div className="grid w-full grid-cols-[auto,1fr,auto] items-center gap-10 rounded-12 bg-grey-light-20 p-20">
                  <div className="h-42 w-42 rounded-full bg-grey-light-20"></div>
                  <div className="grid w-full grid-cols-1 gap-4">
                    <div className="w-full text-16 font-semibold leading-[110%] text-white">Melany</div>
                    <div className="w-full text-14 leading-[110%] text-grey-light-70">Message</div>
                  </div>
                  <ButtonPill handler={undefined} title={"Chat"} />
                </div>
              </div>
            ) : (
              <div className="grid w-full grid-cols-1 gap-20 p-20">
                <div className="relative flex w-full justify-center">
                  <img alt="" className="h-[280px]" src={ImageTherapists} />
                  <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transform">
                    <Button handler={URL.EXPLORE} title={"Explore Therapists"} />
                  </div>
                </div>
                <div className="flex w-full justify-center">
                  <div className="w-[240px] max-w-full text-18 font-semibold text-white sm:text-22 md:text-26">
                    Discover the right therapists for you
                  </div>
                </div>
              </div>
            )}
            <div className="grid w-full grid-cols-1 gap-20">
              <div className="w-full text-16 font-bold text-white sm:text-18 md:text-22">How do you feel?</div>
              <div className="grid w-full grid-cols-5 gap-12 rounded-12 bg-grey-light-20 p-20">
                {moods.map((mood, key: number) => (
                  <button key={key} className="grid w-full grid-cols-1 gap-16" onClick={() => setMood(mood.mood)}>
                    <div className="flex w-full justify-center">
                      <MoodIcon size={50} type={mood.mood} />
                    </div>
                    <div className="w-full text-center text-14 text-grey-light-70">{mood.title}</div>
                  </button>
                ))}
              </div>
            </div>
            <div className="grid w-full grid-cols-1 gap-20">
              <div className="w-full text-16 font-bold text-white sm:text-18 md:text-22">More to Explore</div>
              <div className="grid w-full grid-cols-2 gap-20">
                <Link className="relative w-full overflow-hidden rounded-12 bg-blue pt-[100%]" to={URL.MOOD}>
                  <img alt="" className="absolute top-0 left-0 h-full w-full object-cover" src={BannerLight} />
                  <div className="absolute bottom-16 left-16 text-14 text-white sm:text-16">Mood Check</div>
                </Link>
                <Link className="relative w-full overflow-hidden rounded-12 bg-blue pt-[100%]" to={URL.DASHBOARD}>
                  <img alt="" className="absolute top-0 left-0 h-full w-full object-cover" src={BannerPurple} />
                  <div className="absolute bottom-16 left-16 text-14 text-white sm:text-16">
                    Do you have a friend in need?
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </WrapperPage>
      {mood ? <ModalMood handler={setOpenMood} initial={mood} open={openMood} /> : ""}
    </>
  )
}

export default Dashboard
