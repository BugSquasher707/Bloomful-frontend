import { UserAvailabilityTimeInterface } from "libs/interfaces"
import moment from "moment"

export const onResetTime = (date: moment.Moment) => {
  return date.set({
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
  })
}

export const onResetTimeEnd = (date: moment.Moment) => {
  return date.set({
    hour: 23,
    minute: 59,
    second: 59,
    millisecond: 999
  })
}

export const slotsIsSorted = (slots: UserAvailabilityTimeInterface[]) => {
  return slots.every((slot: UserAvailabilityTimeInterface, index: number) => {
    if (index === 0) {
      return true
    }

    const prevSlot = slots[index - 1]

    const isSame = slot.startTime === prevSlot.endTime

    return (
      moment(prevSlot.startTime, "HH:mm").isSameOrBefore(moment(slot.startTime, "HH:mm")) &&
      (!isSame || (isSame && moment(prevSlot.endTime, "HH:mm").isSameOrBefore(moment(slot.endTime, "HH:mm"))))
    )
  })
}

export const slotsOverlay = (slots: UserAvailabilityTimeInterface[]) => {
  return [...slots]
    .map((slot: UserAvailabilityTimeInterface, key: number) => {
      const from: string = slot.startTime
      const to: string = slot.endTime

      const overlap = [...slots]
        .filter((_, ke: number) => ke > key)
        .find((slot2: UserAvailabilityTimeInterface) => {
          const from2: string = slot2.startTime
          const to2: string = slot2.endTime

          if (!(from && to && from2 && to2)) {
            return false
          }

          return from === from2 || (from < to2 && to > from2)
        })

      return overlap
    })
    .filter((slot) => slot)
}

export const slotsSort = (slots: UserAvailabilityTimeInterface[]) => {
  return [...slots].sort((a, b) => {
    const dateA: string = a.startTime === b.startTime ? a.endTime : a.startTime
    const dateB: string = a.startTime === b.startTime ? b.endTime : b.startTime

    return dateA.localeCompare(dateB)
  })
}
