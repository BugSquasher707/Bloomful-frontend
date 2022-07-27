import { callGet } from "api/integration/calls"
import { REQ_EGX } from "ellingsenx/libs/constants"

export const walletGet = async (token: string) => {
  return await callGet(REQ_EGX.WALLET.GET, token)
}
