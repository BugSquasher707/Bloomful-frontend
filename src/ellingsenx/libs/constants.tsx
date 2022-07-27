export const EGX = process.env.REACT_APP_EGX ?? ""
export const SERVER_EGX = process.env.REACT_APP_SERVER_EGX ?? ""

/* --- Requests --- */
export const URL_EGX = {
  CONNECT: EGX + "/auth/connect/bloomful",
  DASHBOARD: EGX + "/dashboard",
  REGISTER: EGX + "/auth/register"
}

/* --- Requests --- */
export const REQ_EGX = {
  STATUS: SERVER_EGX,
  AUTH: {
    REFRESH: SERVER_EGX + "/auth/refreshToken"
  },
  REQUEST: {
    CHECK: SERVER_EGX + "/request/hasRequested?userId:userid&platform=bloomful",
    SUBMIT: SERVER_EGX + "/request/submitRequest"
  },
  WALLET: {
    GET: SERVER_EGX + "/wallet"
  }
}
