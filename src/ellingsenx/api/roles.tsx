import { UserInterface } from "libs/interfaces"

export const isAdmin = (user: UserInterface) => {
  if (user.roles && user.roles.account) {
    return user.roles.account.includes("admin")
  }
}

export const isTherapist = (user: UserInterface) => {
  if (isAdmin(user)) {
    return true
  } else if (user.roles && user.roles.bloomfulx) {
    return user.isVerified && user.roles.bloomfulx.includes("therapist")
  } else {
    return false
  }
}
