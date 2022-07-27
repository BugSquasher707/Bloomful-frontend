import { moodGet } from "api/endpoints/mood"
import { ReactComponent as Bloom } from "assets/img/bloom.svg"
import ModalMood from "components/modals/ModalMood"
import Nav from "components/nav/Nav"
import Wrapper from "components/wrapper/Wrapper"
import WrapperPage from "components/wrapper/WrapperPage"
import { useProps } from "contexts/PropsContext"
import { DATE, SLUG } from "libs/constants"
import { moods } from "libs/data/moods"
import { MoodType } from "libs/enums"
import { MoodRecordInterface } from "libs/interfaces"
import moment from "moment"
import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import Button from "utils/buttons/Button"
import MoodIcon from "utils/elements/MoodIcon"
import Pages from "utils/elements/Pages"

const Mood = () => {
  const { token } = useProps()

  const [page, setPage] = useState(1)
  const [pages, setPages] = useState(1)

  const [moodList, setMoodList] = useState<MoodRecordInterface[]>([])

  const [moodTop, setMoodTop] = useState(moods[2])
  const [streak, setStreak] = useState(2)
  const [recent, setRecent] = useState<number[]>([])

  const [openMood, setOpenMood] = useState(false)

  useEffect(() => {
    onLoad()
  }, [page])

  const onLoad = async () => {
    const result = await moodGet(token, page)

    if (result && result.data) {
      const stats = result.data.statistics

      setMoodList(result.data.userMood.map((m: MoodRecordInterface) => ({ ...m, moodId: 4 - m.moodId })))
      setPages(result.data.totalPages)

      setMoodTop(moods.find((m) => m.mood === 4 - parseInt(stats.topMoodId)) ?? moods[2])
      setStreak(stats.bloomStreak)

      const newRecent = [
        stats.recentMood.notMyDay,
        stats.recentMood.notToday,
        stats.recentMood.eh,
        stats.recentMood.good,
        stats.recentMood.perfect
      ]

      setRecent(newRecent.map((m) => parseInt(m)))
    }
  }

  return (
    <>
      <Helmet>
        <title>Mood {SLUG}</title>
      </Helmet>
      <Nav />
      <WrapperPage title={"Mood"} bg purple>
        <div className="grid w-full grid-cols-[1fr,430px] items-start gap-30 p-30">
          <div className="grid w-full grid-cols-1 gap-30">
            <Button handler={() => setOpenMood(true)} title={"Record Mood"} />
            <Wrapper open={moodList.length > 0 && pages > 1}>
              <Pages page={page} pages={pages} setPage={setPage} />
            </Wrapper>
            <div className="grid w-full grid-cols-1 gap-30">
              {moodList.map((record: MoodRecordInterface, key: number) => (
                <div key={key} className="grid w-full grid-cols-1 gap-10">
                  <div className="text-14 leading-[110%] text-grey-light-70 sm:text-16">
                    {moment(record.createdAt).format(DATE.MONTHDAY)}
                  </div>
                  <div className="grid w-full grid-cols-1 gap-10">
                    <div className="grid w-full grid-cols-[auto,1fr] items-center gap-12 rounded-12 bg-grey-light-10 p-16">
                      <MoodIcon size={40} type={MoodType.Perfect} />
                      <div className="grid w-full grid-cols-1 gap-2">
                        <div className="w-full text-14 font-semibold leading-[110%] text-white sm:text-16">
                          {moods[record.moodId].title}
                        </div>
                        <div className="text-14 leading-[110%] text-grey-light-70">
                          {moment(record.createdAt).format(DATE.TIME)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid w-full grid-cols-1 gap-30">
            <div className="grid w-full grid-cols-2 gap-30">
              <div className="w-full rounded-12 bg-grey-light-20 p-16">
                <div className="grid grid-cols-1 gap-16">
                  <div className="w-full text-center text-14 text-white sm:text-16">Top mood</div>
                  <div className="flex w-full justify-center">
                    <MoodIcon size={70} type={moodTop.mood} />
                  </div>
                  <div className="w-full text-center text-12 text-grey-light-70">{moodTop.title}</div>
                </div>
              </div>
              <div className="w-full rounded-12 bg-grey-light-20 p-16">
                <div className="grid grid-cols-1 gap-16">
                  <div className="w-full text-center text-14 text-white sm:text-16">Bloom Streak</div>
                  <div className="relative flex h-70 w-full items-center justify-center">
                    <Bloom className="absolute top-0 left-[50%] translate-x-[-50%] transform" />
                    <div className="relative text-22 font-semibold text-white">{streak}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid w-full grid-cols-1 gap-24 rounded-12 bg-grey-light-20 p-20">
              <div className="w-full text-center text-14 text-white sm:text-16">Your mood recently</div>
              <div className="flex w-full items-center justify-between gap-12">
                {moods.map((mood, key: number) => (
                  <div key={key} className="grid w-34 grid-cols-1 gap-10">
                    <div className="flex w-full justify-center">
                      <div className="flex h-[120px] w-16 items-end rounded-full bg-grey-light-20">
                        <div
                          className="w-full rounded-full bg-white"
                          style={{ height: recent[key] === 0 ? "16px" : `${recent[key]}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex w-full justify-center">
                      <MoodIcon size={34} type={mood.mood} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </WrapperPage>
      <ModalMood handler={setOpenMood} initial={MoodType.Eh} open={openMood} />
    </>
  )
}

export default Mood
