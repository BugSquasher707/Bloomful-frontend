import { callGet } from "api/integration/calls"
import { REQ } from "libs/constants"

export const statusApi = async () => {
  return await callGet(REQ.STATUS)
}
