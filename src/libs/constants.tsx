export const ENVIRONMENT = process.env.REACT_APP_ENV ?? ""
export const SERVER = process.env.REACT_APP_SERVER ?? ""

export const SLUG = "| Bloomful Therapy"

export const URL = {
  ACCOUNT: "/account",
  AUTH: {
    BASE: "/auth",
    LOGIN: "/auth/login",
    REGISTER: "/auth/register"
  },
  BROWSE: {
    BASE: "/browse",
    THERAPIST: "/browse/therapist/:id",
    BOOK: "/browse/book/:id"
  },
  DASHBOARD: "/dashboard",
  EXPLORE: "/explore",
  JOURNAL: {
    BASE: "/journal",
    EXPLORE: "/journal/explore",
    SEARCH: "/journal/search/:query"
  },
  HOME: "/",
  MESSAGES: {
    BASE: "/messages",
    CHAT: "/messages/:id"
  },
  MOOD: "/mood",
  ONBOARDING: "/welcome",
  POLICIES: {
    CATEGORY: "/policies/*",
    BASE: "/policies",
    COOKIES: "/policies/cookies",
    DISCLAIMER: "/policies/disclaimer",
    PRIVACY: "/policies/privacy",
    TERMS: "/policies/terms"
  },
  RECOMMEND: "/recommend",
  SCHEDULE: "/schedule",
  SETTINGS: {
    BASE: "/settings",
    LANGUAGE: "/settings/language",
    SAFETY: "/settings/safety"
  },
  THERAPISTS: {
    BASE: "/therapists",
    BROWSE: "/therapists/browse",
    EXPLORE: "/therapists/explore",
    SUBSCRIPTION: "/therapists/subscription",
    THERAPIST: {
      BOOKING: "/therapists/:id/booking",
      HELP: "/therapists/:id/help",
      PROFILE: "/therapists/:id",
      SCHEDULE: "/therapists/:id/schedule"
    }
  }
}

export const REQ = {
  MOOD: {
    GET: SERVER + "/mood?page=:page",
    RECORD: SERVER + "/mood"
  },
  STATUS: SERVER,
  THERAPIST: {
    ALL: SERVER + "/therapist?page=:page",
    AVAILABILITY: {
      DATE: SERVER + "/therapist/availabilityTimes/:id?date=:date",
      MONTH: SERVER + "/therapist/availabilityDays/:id?month=:month&year=:year",
      UPDATE: SERVER + "/therapist/availability"
    },
    BOOKMARK: SERVER + "/bookmarkTherapist",
    BOOKMARKED: SERVER + "/bookmarkTherapist?page=:page",
    DETAILS: SERVER + "/therapist/:id",
    GET: SERVER + "/therapist/:id",
    SUBSCRIBED: SERVER + "/userSubscription?page=:page&perPage=:perPage",
    SUBSCRIPTIONS: SERVER + "/therapist/listTherapistSubscriptions?sellerId=:id"
  },
  USER: {
    GET: SERVER + "/therapist/:id"
  }
}

export const SOCIAL = {
  FACEBOOK: "",
  LINKEDIN: "",
  TWITTER: ""
}

export const DATE = {
  DATETIME: "MMM D YYYY, HH:mm",
  SHORT: "MMM D, YYYY",
  WELCOME: "dddd, MMMM Do",
  WEEKDAY: "ddd",
  MONTHDAY: "D MMM",
  TIME: "h:mm a",
  SELECTED: "D MMMM",
  DASH: "YYYY-MM-DD",
  M: "M",
  MONTH: "MMMM",
  YEAR: "YYYY"
}
