import { EgxUserInterface } from "ellingsenx/libs/interfaces"
import { MoodType, TherapistActionType } from "libs/enums"

export interface BooleanInterface {
  title: string
  selected: boolean
}

export interface DropdownInterface {
  title: string
  value: string
}

export interface LinkInterface {
  title: string
  link: string
  icon?: JSX.Element
  new?: number
}

export interface MoodInterface {
  title: string
  mood: MoodType
}

export interface MoodRecordInterface {
  moodId: MoodType
  createdAt: string
}

export interface PropsInterface {
  admin: boolean
  authenticated: boolean
  path: string
  user: UserInterface
}

export interface ReviewInterface {
  id: string
  avatar: string
  userName: string
  review: string
  rating: number
}

export interface SpotInterface {}

export interface TherapistInterface {
  therapistId: string
  name: string
  designation: string
  isBookmarkTherapist: boolean
  profilePicture: string
  actions?: TherapistActionType[]
  Country: string
}

export interface TherapistFullInterface {
  about: string
  age: number
  availability: UserAvailabilityInterface
  averageRating: number
  background: string
  country: string
  currency: string
  designation: string
  experience: number
  gallery: string
  gender: string
  name: string
  phoneNumber: string
  profilePicture: string
  qualification: string[]
  specialities: string[]
  therapistId: string
  totalReviews: number
}

export interface TitleInterface {
  title: string
  text: string
  icon?: JSX.Element
}

export interface UserInterface extends EgxUserInterface {}

export interface UserAvailabilityInterface {
  mon: UserAvailabilityDayInterface
  tue: UserAvailabilityDayInterface
  wed: UserAvailabilityDayInterface
  thu: UserAvailabilityDayInterface
  fri: UserAvailabilityDayInterface
  sat: UserAvailabilityDayInterface
  sun: UserAvailabilityDayInterface
}

export interface UserAvailabilityDayInterface {
  isAvailable: boolean
  time: UserAvailabilityTimeInterface[]
}

export interface UserAvailabilityTimeInterface {
  startTime: string
  endTime: string
}
