import { moodRecord } from "api/endpoints/mood"
import Modal from "components/modals/Modal"
import { useProps } from "contexts/PropsContext"
import { moods } from "libs/data/moods"
import { MoodType } from "libs/enums"
import { MoodInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"
import { toast } from "react-toastify"
import Button from "utils/buttons/Button"
import MoodIcon from "utils/elements/MoodIcon"

const ModalMood = ({ open, handler, initial }: { open: boolean; handler: any; initial: MoodType }) => {
  const { token } = useProps()

  const [mood, setMood] = useState<MoodInterface>()
  const [moodType, setMoodType] = useState<MoodType>(initial)

  useEffect(() => {
    setMoodType(initial)
  }, [open])

  useEffect(() => {
    setMood(moods.find((m) => m.mood === moodType))
  }, [moodType])

  const onToggle = (incr: number) => {
    if (moodType + incr < 0) {
      setMoodType(MoodType.Perfect)
    } else if (moodType + incr >= moods.length) {
      setMoodType(MoodType.Horrendous)
    } else {
      setMoodType(moodType + incr)
    }
  }

  const onSubmit = async () => {
    if (moodType === undefined) {
      return
    }

    const result = await moodRecord(token, moodType)

    if (result) {
      toast.success("Successfully recorded mood")

      handler(false)
    }
  }

  return (
    <>
      <Modal handler={handler} open={open} light>
        <div className="grid grid-cols-[auto,1fr,auto] gap-20 sm:gap-30">
          <div className="flex w-64 items-center">
            <button
              className="tr group flex h-64 w-64 items-center justify-center rounded-full border-1 border-grey-light-20 hover:bg-grey-light-20"
              onClick={() => onToggle(-1)}
            >
              <MdKeyboardArrowLeft className="tr text-24 text-grey-light-20 group-hover:text-white" />
            </button>
          </div>
          <div className="grid w-full grid-cols-1 gap-40 sm:gap-60 md:gap-80">
            <div className="w-full text-center text-18 text-white sm:text-20 md:text-22">
              How do you feel currently?
            </div>
            {mood ? (
              <div className="grid w-full grid-cols-1 gap-20 sm:gap-30">
                <div className="flex w-full justify-center">
                  <MoodIcon size={200} type={mood.mood} />
                </div>
                <div className="w-full text-center text-16 text-white sm:text-16 md:text-18">{mood.title}</div>
              </div>
            ) : (
              ""
            )}
            <Button handler={onSubmit} title={"Choose"} />
          </div>
          <div className="flex w-64 items-center">
            <button
              className="tr group flex h-64 w-64 items-center justify-center rounded-full border-1 border-grey-light-20 hover:bg-grey-light-20"
              onClick={() => onToggle(1)}
            >
              <MdKeyboardArrowRight className="tr text-24 text-grey-light-20 group-hover:text-white" />
            </button>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default ModalMood
