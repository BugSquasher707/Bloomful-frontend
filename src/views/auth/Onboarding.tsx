import { ReactComponent as Logo } from "assets/img/icon_blank.svg"
import SlideChat from "assets/img/onboarding/chat.png"
import SlideHire from "assets/img/onboarding/hire.png"
import SlideJournal from "assets/img/onboarding/journal.png"
import SlideMood from "assets/img/onboarding/mood.png"
import SlideWelcome from "assets/img/onboarding/welcome.png"
import OnboardingBottom from "components/onboarding/OnboardingBottom"
import Wrapper from "components/wrapper/Wrapper"
import { URL } from "libs/constants"
import { OnboardingType } from "libs/enums"
import React, { useEffect, useState } from "react"
import Button from "utils/buttons/Button"
import BgAnimation from "utils/elements/BgAnimation"

const Onboarding = () => {
  const [blue, setBlue] = useState(false)

  const [started, setStarted] = useState(false)
  const [ended, setEnded] = useState(false)

  const [slide, setSlide] = useState(OnboardingType.Welcome)
  const [slides] = useState<OnboardingType[]>([
    OnboardingType.Welcome,
    OnboardingType.Hire,
    OnboardingType.Chat,
    OnboardingType.Mood,
    OnboardingType.Journal
  ])

  useEffect(() => {
    if (started) {
      setTimeout(() => {
        setBlue(true)
      }, 1800)
    }
  }, [started])

  useEffect(() => {
    if (slide === slides.length) {
      setEnded(true)
    }
  }, [slide])

  return (
    <>
      <Wrapper open={!blue}>
        <BgAnimation />
      </Wrapper>
      <div className="fixed top-0 left-0 h-full w-full">
        {ended ? (
          <div className="flex h-full w-full flex-col gap-30 p-30">
            <div className="flex w-full flex-grow items-center justify-center">
              <Logo className="h-[200px] w-[200px] fill-current text-white" />
            </div>
            <div className="flex w-full justify-center">
              <div className="w-[400px] max-w-full">
                <Button handler={URL.AUTH.BASE} title={"Get Started"} />
              </div>
            </div>
          </div>
        ) : (
          <>
            {blue ? (
              <div className="flex h-full w-full flex-col gap-30 p-30">
                <div className="flex w-full justify-center">
                  <Logo className="h-40 w-40 fill-current text-white" />
                </div>
                <div className="flex flex-grow items-center p-30">
                  <div className="flex h-full w-full flex-col">
                    {
                      {
                        [OnboardingType.Welcome]: (
                          <>
                            <div className="flex w-full flex-grow items-center justify-center">
                              <img alt="" className="object-contain" src={SlideWelcome} />
                            </div>
                            <OnboardingBottom
                              text={"We want to show you around the app and it's key functionalities."}
                              title={"Welcome to Bloomful!"}
                            />
                          </>
                        ),
                        [OnboardingType.Hire]: (
                          <>
                            <div className="flex w-full flex-grow items-center justify-center">
                              <img alt="" className="object-contain" src={SlideHire} />
                            </div>
                            <OnboardingBottom
                              text={"100% Private and anonymous, choose the therapist that fits you the most"}
                              title={"Hire therapists that fit your needs at an afforable price"}
                            />
                          </>
                        ),
                        [OnboardingType.Chat]: (
                          <>
                            <div className="flex w-full flex-grow items-center justify-center">
                              <img alt="" className="object-contain" src={SlideChat} />
                            </div>
                            <OnboardingBottom
                              text={"Track your mood progress throughout the course of the therapy"}
                              title={"Call and Chat with your desired therapists "}
                            />
                          </>
                        ),
                        [OnboardingType.Mood]: (
                          <>
                            <div className="flex w-full flex-grow items-center justify-center">
                              <img alt="" className="object-contain" src={SlideMood} />
                            </div>
                            <OnboardingBottom
                              text={"Track your mood progress throughout the course of the therapy"}
                              title={"Mood Tracking"}
                            />
                          </>
                        ),
                        [OnboardingType.Journal]: (
                          <>
                            <div className="flex w-full flex-grow items-center justify-center">
                              <img alt="" className="object-contain" src={SlideJournal} />
                            </div>
                            <OnboardingBottom
                              text={
                                "Coming Soooooonn! Your private personalized journal for you to write your thoughts on! "
                              }
                              title={"Journaling"}
                            />
                          </>
                        )
                      }[slide]
                    }
                  </div>
                </div>
                <div className="flex w-full">
                  <div className="grid w-full grid-cols-1 gap-20">
                    <div className="flex w-full items-center justify-center gap-10">
                      {slides.map((entry: OnboardingType, key) => (
                        <button
                          key={key}
                          className={`h-6 w-6 rounded-full ${slide === entry ? "bg-white" : "bg-grey-light-40"}`}
                          onClick={() => setSlide(entry)}
                        ></button>
                      ))}
                    </div>
                    <div className="flex w-full justify-center">
                      <div className="grid w-[400px] grid-cols-2 items-center gap-12">
                        <Button handler={URL.AUTH.BASE} title={"Skip"} />
                        <Button
                          handler={() => setSlide(slide >= slides.length ? slide : slide + 1)}
                          title={"Continue"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <button
                className={`tr-med absolute left-[50%] bottom-[140px] flex w-full min-w-[1000px] translate-x-[-50%]  transform items-start rounded-full bg-blue p-60 pt-[100%] ${
                  started ? "translate-y-[-50%]" : "translate-y-[100%]"
                }`}
                onClick={() => setStarted(true)}
              >
                <div className="absolute top-60 left-0 w-full text-center text-16 font-semibold text-white sm:text-18 md:text-22">
                  Click to explore
                </div>
                <div className="absolute top-[50%] left-0 h-[200vh] w-full bg-blue"></div>
              </button>
            )}
          </>
        )}
      </div>
    </>
  )
}

export default Onboarding
