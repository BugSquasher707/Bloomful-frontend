import { callGet, callPost } from "api/integration/calls"
import { REQ } from "libs/constants"

export const therapistAll = async (
  token: string,
  page: number,
  minPrice: number,
  maxPrice: number,
  gender: string,
  age: string,
  area: string,
  experience: string
) => {
  const data: any = {}

  if (minPrice) {
    data.min_price = minPrice
  }

  if (maxPrice) {
    data.max_price = maxPrice
  }

  if (gender) {
    data.gender = gender
  }

  if (age) {
    data.age = [age]
  }

  if (area) {
    data.areaOfHelp = [area]
  }

  if (experience) {
    data.experience = [experience]
  }

  return await callPost(REQ.THERAPIST.ALL.replace(":page", page.toString()), data, token)
}

export const therapistAvailability = async (token: string, id: string, date: string) => {
  return await callGet(REQ.THERAPIST.AVAILABILITY.DATE.replace(":id", id).replace(":date", date), token)
}

export const therapistAvailabilityMonth = async (token: string, id: string, month: string, year: string) => {
  return await callGet(
    REQ.THERAPIST.AVAILABILITY.MONTH.replace(":id", id).replace(":month", month).replace(":year", year),
    token
  )
}

export const therapistBookmark = async (token: string, id: string) => {
  return await callPost(REQ.THERAPIST.BOOKMARK, { therapistId: id }, token)
}

export const therapistBookmarked = async (token: string, page: number) => {
  return await callGet(REQ.THERAPIST.BOOKMARKED.replace(":page", page.toString()), token)
}

export const therapistDetails = async (token: string, id: string) => {
  return await callGet(REQ.THERAPIST.DETAILS.replace(":id", id), token)
}

export const therapistSubscribed = async (token: string, page: number) => {
  return await callGet(REQ.THERAPIST.SUBSCRIBED.replace(":page", page.toString()).replace(":perPage", "10"), token)
}

export const therapistSubscriptions = async (token: string, id: string) => {
  return await callGet(REQ.THERAPIST.SUBSCRIPTIONS.replace(":id", id), token)
}
