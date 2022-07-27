import { therapistAvailability, therapistAvailabilityMonth } from "api/endpoints/therapists"
import { onResetTimeEnd } from "api/integration/schedule"
import BrowseScheduleDay from "components/browse/tabs/BrowseScheduleDay"
import { useProps } from "contexts/PropsContext"
import { DATE } from "libs/constants"
import { BookType } from "libs/enums"
import { SpotInterface, TherapistFullInterface } from "libs/interfaces"
import moment from "moment"
import React, { useEffect, useState } from "react"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"
import Button from "utils/buttons/Button"

const BrowseSchedule = ({
  spot,
  setSpot,
  therapist,
  handler
}: {
  spot?: SpotInterface
  setSpot: any
  therapist: TherapistFullInterface
  handler: any
}) => {
  const { token } = useProps()

  const [spots, setSpots] = useState<SpotInterface[]>([])

  const [events, setEvents] = useState<moment.Moment[]>([])

  const [count, setCount] = useState(7 * 5)
  const [days] = useState(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"])

  const [selectedDay, setSelectedDay] = useState(moment())
  const [selectedMonth, setSelectedMonth] = useState(moment().startOf("month"))
  const [selectedMonthStart, setSelectedMonthStart] = useState(selectedMonth.clone().startOf("week"))

  useEffect(() => {
    onLoadMonth()
  }, [selectedMonth])

  useEffect(() => {
    onLoadDay()
  }, [selectedDay])

  useEffect(() => {
    if (
      onResetTimeEnd(
        selectedMonth
          .clone()
          .startOf("week")
          .add(7 * 5, "days")
      ).month() === selectedMonth.month()
    ) {
      setCount(7 * 6)
    } else {
      setCount(7 * 5)
    }

    setSelectedMonthStart(onResetTimeEnd(selectedMonth.clone().startOf("week")))
  }, [count, selectedMonth])

  const onLoadMonth = async () => {
    const month = selectedMonth.format(DATE.M)
    const year = selectedMonth.format(DATE.YEAR)

    const result = await therapistAvailabilityMonth(token, therapist.therapistId, month, year)

    if (result) {
      const newEvents = result.data.map((day: any) => moment(day.date))

      console.log(newEvents)

      setEvents(newEvents)
    }
  }

  const onLoadDay = async () => {
    const date = selectedDay.format(DATE.DASH)

    const result = await therapistAvailability(token, therapist.therapistId, date)

    if (result) {
      setSpots(result.data)

      console.log(result.data)
    }
  }

  return (
    <>
      <div className="grid w-full grid-cols-1 gap-20 rounded-12 sm:gap-30">
        <div className="flex w-full items-center justify-between">
          <div className="grid w-[200px] max-w-full grid-cols-1">
            <div className="grid w-full grid-cols-[auto,1fr,auto] items-center gap-6">
              <button
                className="group flex h-24 w-24 items-center justify-center rounded-4 hover:bg-grey-light-10"
                onClick={() => setSelectedMonth(selectedMonth.clone().add(-1, "month"))}
              >
                <MdKeyboardArrowLeft className="text-14 text-grey-light-40 group-hover:text-white" />
              </button>
              <div className="w-full text-center text-18 font-semibold text-white sm:text-22">
                {selectedMonth.format(DATE.MONTH)}
              </div>
              <button
                className="group flex h-24 w-24 items-center justify-center rounded-4 hover:bg-grey-light-10"
                onClick={() => setSelectedMonth(selectedMonth.clone().add(1, "month"))}
              >
                <MdKeyboardArrowRight className="text-14 text-grey-light-40 group-hover:text-white" />
              </button>
            </div>
            <div className="grid w-full grid-cols-[auto,1fr,auto] items-center gap-6">
              <button
                className="group flex h-24 w-24 items-center justify-center rounded-4 hover:bg-grey-light-10"
                onClick={() => setSelectedMonth(selectedMonth.clone().add(-1, "year"))}
              >
                <MdKeyboardArrowLeft className="text-14 text-grey-light-40 group-hover:text-white" />
              </button>
              <div className="w-full text-center text-14 text-grey-light-70">{selectedMonth.format(DATE.YEAR)}</div>
              <button
                className="group flex h-24 w-24 items-center justify-center rounded-4 hover:bg-grey-light-10"
                onClick={() => setSelectedMonth(selectedMonth.clone().add(1, "year"))}
              >
                <MdKeyboardArrowRight className="text-14 text-grey-light-40 group-hover:text-white" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1">
            <div className="w-full text-18 font-semibold uppercase text-white sm:text-22">
              {moment().format(DATE.TIME)}
            </div>
            <div className="w-full text-right text-14 text-grey-light-70">{moment().format(DATE.SELECTED)}</div>
          </div>
        </div>
        <div className="w-full overflow-x-scroll">
          <div className="relative w-full min-w-[300px] overflow-hidden">
            <div className="relative grid w-full grid-cols-1 gap-16">
              <div className="grid w-full grid-cols-7 gap-14">
                {days.map((day: string, key: number) => (
                  <div key={key} className="w-full text-center text-12 font-semibold uppercase text-white">
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid w-full grid-cols-7 gap-14">
                {new Array(count).fill(0).map((day: number, key: number) => (
                  <BrowseScheduleDay
                    key={key}
                    hasSpots={
                      events.find((event: moment.Moment) =>
                        event.isSame(selectedMonthStart.clone().add(key, "day"), "day")
                      ) !== undefined
                    }
                    day={selectedMonthStart.clone().add(key, "day")}
                    handler={() => setSelectedDay(selectedMonthStart.clone().add(key, "day"))}
                    month={selectedMonth}
                    selected={selectedDay.isSame(selectedMonthStart.clone().add(key, "day"), "day")}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="grid w-full grid-cols-1 gap-10">
          <div className="w-full text-16 font-semibold text-white sm:text-18">
            Available times on {selectedDay.format(DATE.SELECTED)}
          </div>
          {spots.length > 0 ? (
            <div className="flex w-full items-start justify-start gap-10">
              {spots.map((entry: SpotInterface, key) => (
                <button
                  key={key}
                  className={`flex h-32 items-center rounded-12 px-16 text-14 text-white ${
                    spot === entry ? "bg-grey-light-20" : "bg-grey-light-10"
                  }`}
                  onClick={() => setSpot(entry)}
                >
                  Spot
                </button>
              ))}
            </div>
          ) : (
            <div className="w-full text-14 text-grey-light-70">
              No available times on {selectedDay.format(DATE.SELECTED)}
            </div>
          )}
        </div>
        {spot ? <Button handler={() => handler(BookType.Review)} title={"Continue"} /> : ""}
      </div>
    </>
  )
}

export default BrowseSchedule
