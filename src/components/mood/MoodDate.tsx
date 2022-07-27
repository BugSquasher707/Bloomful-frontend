import { DATE } from "libs/constants"
import moment from "moment"
import React, { useEffect, useState } from "react"

const MoodDate = ({ date }: { date: moment.Moment }) => {
  const [passed, setPassed] = useState(true)
  const [today, setToday] = useState(false)

  useEffect(() => {
    setPassed(moment().add(1, "day").isAfter(date))
    setToday(moment().isSame(date, "day"))
  }, [date])

  return (
    <>
      <div
        className={`grid w-full grid-cols-1 gap-4 rounded-12 p-12 ${passed ? "" : "opacity-20"} ${
          today ? "bg-grey-light-20" : ""
        }`}
      >
        <div className="text-center text-14 leading-[110%] text-white">{date.format(DATE.WEEKDAY)}</div>
        <div className="text-center text-16 font-semibold leading-[110%] text-white sm:text-18">
          {date.format(DATE.MONTHDAY)}
        </div>
      </div>
    </>
  )
}

export default MoodDate
