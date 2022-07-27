import { callPost } from "api/integration/calls"
import { REQ_EGX } from "ellingsenx/libs/constants"

export const authRefresh = async (token: string) => {
  return await callPost(REQ_EGX.AUTH.REFRESH, { token: token }, "")
}
