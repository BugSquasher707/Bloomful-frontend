import { callGet } from "api/integration/calls"
import { REQ } from "libs/constants"

export const authUser = async (token: string, id: string) => {
  return await callGet(REQ.USER.GET.replace(":id", id), token)
}
