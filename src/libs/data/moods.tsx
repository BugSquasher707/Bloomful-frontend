import { MoodType } from "libs/enums"
import { MoodInterface } from "libs/interfaces"

export const moods: MoodInterface[] = [
  {
    title: "Horrendous",
    mood: MoodType.Horrendous
  },
  {
    title: "Sad",
    mood: MoodType.Sad
  },
  {
    title: "Eh...",
    mood: MoodType.Eh
  },
  {
    title: "Good!",
    mood: MoodType.Good
  },
  {
    title: "Perfect!",
    mood: MoodType.Perfect
  }
]
