import Wrapper from "components/wrapper/Wrapper"
import moment from "moment"
import React, { useEffect, useState } from "react"

const BrowseScheduleDay = ({
  day,
  month,
  hasSpots,
  selected,
  handler
}: {
  day: moment.Moment
  month: moment.Moment
  hasSpots: boolean
  selected: boolean
  handler: any
}) => {
  const [active, setActive] = useState(month.isSame(day, "month") && moment().isBefore(day))
  const [today, setToday] = useState(moment().isSame(day, "day"))

  useEffect(() => {
    setActive(month.isSame(day, "month") && moment().isBefore(day))
    setToday(moment().isSame(day, "day"))
  }, [day, month])

  return (
    <>
      <div className="flex w-full justify-center">
        <button
          className={`relative flex h-36 w-36 items-center justify-center rounded-full text-14 text-white ${
            today || selected ? "border-purple" : "border-white hover:border-purple"
          } ${active ? "border-2" : ""} ${selected ? "bg-purple" : ""} ${active && hasSpots ? "" : "opacity-40"}`}
          disabled={!active}
          onClick={() => (active && hasSpots ? handler() : null)}
        >
          {day.format("DD")}
          <Wrapper open={active && !hasSpots}>
            <div className="absolute top-[-1px] bottom-[-1px] left-[50%] translate-x-[-50%] rotate-[-45deg] transform border-r-2 border-white"></div>
          </Wrapper>
        </button>
      </div>
    </>
  )
}

export default BrowseScheduleDay
