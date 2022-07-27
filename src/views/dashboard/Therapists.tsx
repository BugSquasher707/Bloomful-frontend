import { therapistSubscribed } from "api/endpoints/therapists"
import { ReactComponent as EmptyTherapist } from "assets/img/empty/therapists.svg"
import Nav from "components/nav/Nav"
import Wrapper from "components/wrapper/Wrapper"
import WrapperPage from "components/wrapper/WrapperPage"
import { useProps } from "contexts/PropsContext"
import { SLUG, URL } from "libs/constants"
import { TherapistActionType } from "libs/enums"
import { TherapistInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import { AiFillQuestionCircle } from "react-icons/ai"
import { MdQuestionAnswer, MdSchedule, MdSettings } from "react-icons/md"
import { useHistory } from "react-router-dom"
import { useSwipeable } from "react-swipeable"
import ButtonLink from "utils/buttons/ButtonLink"

const Therapists = () => {
  const { token } = useProps()

  const history = useHistory()

  const [page, setPage] = useState(1)
  const [pages, setPages] = useState(1)

  const [activeAction, setActiveAction] = useState<TherapistActionType>()
  const [activeActionIndex, setActiveActionIndex] = useState(0)

  const [activeTherapist, setActiveTherapist] = useState<TherapistInterface>()
  const [activeTherapistIndex, setActiveTherapistIndex] = useState(0)

  const [actions] = useState([
    TherapistActionType.Chat,
    TherapistActionType.Schedule,
    TherapistActionType.Details,
    TherapistActionType.Help
  ])

  const [therapists, setTherapists] = useState<TherapistInterface[]>([])

  useEffect(() => {
    onLoad()
  }, [])

  useEffect(() => {
    if (therapists && therapists.length > 0) {
      setActiveTherapist(therapists[0])
    }
  }, [therapists])

  useEffect(() => {
    setActiveActionIndex(
      activeTherapist && activeTherapist.actions && activeAction ? activeTherapist.actions.indexOf(activeAction) : 0
    )
  }, [activeTherapist, activeAction, activeActionIndex])

  useEffect(() => {
    setActiveAction(activeTherapist && activeTherapist.actions ? activeTherapist.actions[0] : undefined)

    setActiveTherapistIndex(activeTherapist ? therapists.indexOf(activeTherapist) : 0)
  }, [therapists, activeTherapist])

  const swipeableActions = useSwipeable({
    onSwipedLeft: () => {
      onToggleActions(1)
    },
    onSwipedRight: () => {
      onToggleActions(-1)
    }
  })

  const swipeableTherapists = useSwipeable({
    onSwipedLeft: () => {
      onToggleTherapists(1)
    },
    onSwipedRight: () => {
      onToggleTherapists(-1)
    }
  })

  const onLoad = async () => {
    const result = await therapistSubscribed(token, page)

    if (result) {
      console.log(result)

      setTherapists(result.data)

      setPage(1)
      setPages(1)
    }
  }

  const onToggleActions = (incr: number) => {
    if (activeActionIndex + incr < 0) {
      setActiveActionIndex(actions.length - 1)
    } else if (activeActionIndex + incr >= actions.length) {
      setActiveActionIndex(0)
    } else {
      setActiveActionIndex(activeActionIndex + incr)
    }
  }

  const onToggleTherapists = (incr: number) => {
    if (activeTherapistIndex + incr < 0) {
      setActiveTherapistIndex(therapists.length - 1)
    } else if (activeTherapistIndex + incr >= therapists.length) {
      setActiveTherapistIndex(0)
    } else {
      setActiveTherapistIndex(activeTherapistIndex + incr)
    }
  }

  const onAction = () => {
    if (!activeTherapist) {
      return
    }

    switch (activeAction) {
      case TherapistActionType.Chat:
        history.push(URL.MESSAGES.CHAT.replace(":id", activeTherapist.therapistId))
        break
      case TherapistActionType.Schedule:
        history.push(URL.THERAPISTS.THERAPIST.SCHEDULE.replace(":id", activeTherapist.therapistId))
        break
      case TherapistActionType.Details:
        history.push(URL.THERAPISTS.THERAPIST.PROFILE.replace(":id", activeTherapist.therapistId))
        break
      case TherapistActionType.Help:
        history.push(URL.THERAPISTS.THERAPIST.HELP.replace(":id", activeTherapist.therapistId))
        break
      default:
        break
    }
  }

  return (
    <>
      <Helmet>
        <title>Therapists {SLUG}</title>
      </Helmet>
      <Nav />
      <WrapperPage title={"Therapists"} bg purple>
        <div className="flex h-70 w-full items-center justify-between gap-12 bg-grey-light-10 px-20 sm:px-32">
          <div className="flex h-70 items-center text-16 font-semibold text-white sm:text-18 md:text-20">
            Your therapists
          </div>
        </div>
        {therapists.length === 0 ? (
          <div className="flex w-full flex-grow items-center justify-center p-30">
            <div className="grid w-[320px] max-w-full grid-cols-1 gap-40">
              <div className="flex w-full justify-center">
                <EmptyTherapist className="h-[145px] w-[149px]" />
              </div>
              <div className="grid w-full grid-cols-1 gap-20">
                <div className="w-full text-center text-14 font-semibold text-white sm:text-16 md:text-22">
                  You aren&apos;t subscribed to any therapists
                </div>
                <ButtonLink link={URL.EXPLORE} title="Explore Therapists" />
              </div>
            </div>
          </div>
        ) : (
          <div className="flex w-full flex-grow items-center justify-center p-30">
            <div className="grid w-[670px] max-w-full grid-cols-1 gap-40">
              <div className="relative grid w-full grid-cols-1 gap-16">
                <div {...swipeableTherapists} className="flex w-full justify-center">
                  <div className="relative h-[280px] w-[220px]" style={{ perspective: "1100px" }}>
                    {therapists.map((therapist, key) => (
                      <button
                        key={key}
                        className={`tr absolute top-0 left-[50%] h-full w-full rounded-12 bg-grey-light-10 ${
                          key >= activeTherapistIndex - 1 && key <= activeTherapistIndex + 1 ? "opacity-1" : "opacity-0"
                        }`}
                        style={{
                          transform: `translateX(${
                            -110 +
                            (key < activeTherapistIndex ? -220 : 220) *
                              Math.pow(Math.abs(key - activeTherapistIndex), 0.75)
                          }px) scale(${1 - 0.05 * Math.pow(Math.abs(key - activeTherapistIndex), 1.6)}) rotateY(${
                            (key - activeTherapistIndex) * 25
                          }deg)`,
                          transformStyle: "preserve-3d"
                        }}
                        onClick={() => setActiveTherapist(therapist)}
                      >
                        {therapist.therapistId}
                        <Wrapper open={true}>
                          <div className="absolute bottom-16 left-20 right-20 flex h-36 items-center justify-center rounded-12 bg-grey-dark-40 text-[13px] text-white">
                            Call today at 19:00 PM
                          </div>
                        </Wrapper>
                      </button>
                    ))}
                  </div>
                  <div className="hidden w-full text-center text-14 text-white">
                    {page} / {pages}
                  </div>
                </div>
                <div className="w-full text-center font-semibold text-white">
                  {activeTherapist ? activeTherapist.name : "Name"}
                </div>
              </div>
              <div className="grid w-full grid-cols-1 gap-10">
                <div {...swipeableActions} className="flex w-full justify-center">
                  <div className="relative h-80 w-80">
                    {activeTherapist && activeTherapist.actions && activeTherapist.actions.length > 0 ? (
                      <>
                        {activeTherapist.actions.map((action: TherapistActionType, key: number) => (
                          <button
                            key={key}
                            style={{
                              transform: `translateX(${
                                -40 +
                                (key < activeActionIndex ? -90 : 90) * Math.pow(Math.abs(key - activeActionIndex), 0.75)
                              }px) translateY(${10 * Math.pow(Math.abs(key - activeActionIndex), 1.6)}px) scale(${
                                1 -
                                (key !== activeActionIndex ? 0.2 : 0) -
                                0.05 * Math.pow(Math.abs(key - activeActionIndex), 1.1)
                              })`,
                              transformStyle: "preserve-3d"
                            }}
                            className="tr absolute top-0 left-[50%] h-full w-full"
                            onClick={() => (activeAction === action ? onAction() : setActiveAction(action))}
                          >
                            <div
                              className={`tr flex h-full w-full items-center justify-center rounded-full border-2 ${
                                activeAction === action ? "border-white" : "border-transparent"
                              }`}
                            >
                              <div
                                className={`tr flex h-72 w-72 items-center justify-center rounded-full ${
                                  activeAction === action
                                    ? "bg-white first:text-grey-dark"
                                    : "bg-grey-light-20 first:text-grey-dark-40"
                                }`}
                              >
                                {
                                  {
                                    [TherapistActionType.Chat]: <MdQuestionAnswer className="text-24 " />,
                                    [TherapistActionType.Schedule]: <MdSchedule className="text-24" />,
                                    [TherapistActionType.Details]: <MdSettings className="text-24" />,
                                    [TherapistActionType.Help]: <AiFillQuestionCircle className="text-24" />
                                  }[action]
                                }
                              </div>
                            </div>
                          </button>
                        ))}
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="flex w-full justify-center">
                  <div className="h-40 w-[90px] text-center font-semibold text-white">
                    {activeAction !== undefined ? (
                      <>
                        {
                          {
                            [TherapistActionType.Chat]: "Chat",
                            [TherapistActionType.Schedule]: "Schedule",
                            [TherapistActionType.Details]: "Subscription Details",
                            [TherapistActionType.Help]: "Help"
                          }[activeAction]
                        }
                      </>
                    ) : (
                      "?"
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </WrapperPage>
    </>
  )
}

export default Therapists
