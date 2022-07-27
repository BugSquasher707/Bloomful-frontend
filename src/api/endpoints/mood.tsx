import { callGet, callPost } from "api/integration/calls"
import { REQ } from "libs/constants"

export const moodGet = async (token: string, page: number) => {
  return await callGet(REQ.MOOD.GET.replace(":page", page.toString()), token)
}

export const moodRecord = async (token: string, id: number) => {
  return await callPost(REQ.MOOD.RECORD, { moodId: 4 - id }, token)
}
