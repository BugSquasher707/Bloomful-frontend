import { ReactComponent as MoodEh } from "assets/img/mood/eh.svg"
import { ReactComponent as MoodGood } from "assets/img/mood/good.svg"
import { ReactComponent as MoodHorrendous } from "assets/img/mood/horrendous.svg"
import { ReactComponent as MoodPerfect } from "assets/img/mood/perfect.svg"
import { ReactComponent as MoodSad } from "assets/img/mood/sad.svg"
import { MoodType } from "libs/enums"
import React from "react"

const MoodIcon = ({ type, size }: { type: MoodType; size: number }) => {
  return (
    <>
      {
        {
          [MoodType.Horrendous]: <MoodHorrendous style={{ width: `${size}px`, height: `${size}px` }} />,
          [MoodType.Sad]: <MoodSad style={{ width: `${size}px`, height: `${size}px` }} />,
          [MoodType.Eh]: <MoodEh style={{ width: `${size}px`, height: `${size}px` }} />,
          [MoodType.Good]: <MoodGood style={{ width: `${size}px`, height: `${size}px` }} />,
          [MoodType.Perfect]: <MoodPerfect style={{ width: `${size}px`, height: `${size}px` }} />
        }[type]
      }
    </>
  )
}

export default MoodIcon
