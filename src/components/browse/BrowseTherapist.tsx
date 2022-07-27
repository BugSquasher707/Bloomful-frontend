import { therapistDetails } from "api/endpoints/therapists"
import BrowseBox from "components/browse/elements/BrowseBox"
import { useProps } from "contexts/PropsContext"
import { URL } from "libs/constants"
import { ReviewInterface, TherapistFullInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { MdStar, MdStarBorder } from "react-icons/md"
import Button from "utils/buttons/Button"
import Avatar from "utils/elements/Avatar"

const BrowseTherapist = ({ id }: { id: string }) => {
  const { token } = useProps()

  const [reviews, setReviews] = useState<ReviewInterface[]>([])
  const [therapist, setTherapist] = useState<TherapistFullInterface>()

  useEffect(() => {
    onDetails()
    onReviews()
  }, [id])

  const onDetails = async () => {
    const result = await therapistDetails(token, id)

    if (result && result.data) {
      const newTherapist = result.data

      newTherapist.qualification = newTherapist.qualification.split(",")

      setTherapist(newTherapist)
    }
  }

  const onReviews = async () => {
    setReviews([
      {
        id: "1",
        avatar: "",
        userName: "Annette",
        review: "Review",
        rating: 5
      }
    ])
  }

  return (
    <>
      <div className="flex w-full justify-center p-30 sm:p-40 md:p-60">
        {therapist ? (
          <div className="grid w-[800px] max-w-full grid-cols-1 items-start gap-30 lg:grid-cols-[auto,1fr]">
            <div className="grid w-[320px] grid-cols-1 gap-16">
              <div className="w-full">
                <img alt="" className="rounded-12" src={therapist.profilePicture} />
              </div>
              <div className="grid w-full grid-cols-[1fr,auto] items-center">
                <div className="grid w-full grid-cols-1 gap-2">
                  <div className="text-16 font-semibold text-white sm:text-18">{therapist.name}</div>
                  <div className="text-14 text-grey-light-70">
                    {therapist.designation} - {therapist.age} years old
                  </div>
                </div>
                <div className="flex h-32 items-center rounded-12 bg-grey-light-20 px-12 text-12 text-white">
                  {therapist.country}
                </div>
              </div>
              <Button handler={URL.BROWSE.BOOK.replace(":id", therapist.therapistId)} title={"Book"} />
            </div>
            <div className="grid w-full grid-cols-1 gap-40">
              <div className="grid w-full grid-cols-1 gap-20">
                <BrowseBox title={"About"}>
                  <div className="w-full text-14 text-white">{therapist.about}</div>
                </BrowseBox>
                <BrowseBox title={"Background"}>
                  <div className="w-full text-14 text-white">{therapist.background}</div>
                </BrowseBox>
                <BrowseBox title={"Specialties"}>
                  <div className="grid grid-cols-2 gap-4">
                    {therapist.specialities.map((speciality: string, key: number) => (
                      <div
                        key={key}
                        className="flex h-32 w-full items-center justify-center truncate overflow-ellipsis rounded-12 bg-grey-light-10 px-12 text-14 text-white"
                      >
                        {speciality}
                      </div>
                    ))}
                  </div>
                </BrowseBox>
                <BrowseBox title={"Qualifications and education"}>
                  <div className="grid grid-cols-1 gap-4">
                    {therapist.qualification.map((qualification: string, key: number) => (
                      <div key={key} className="w-full text-14 text-white">
                        {qualification}
                      </div>
                    ))}
                  </div>
                </BrowseBox>
                <BrowseBox title={"Experience"}>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="w-full text-14 text-white">{therapist.experience} years</div>
                  </div>
                </BrowseBox>
              </div>
              <div className="grid w-full grid-cols-[auto,1fr] gap-16">
                <div className="flex h-70 w-70 items-center rounded-full bg-purple">
                  <div className="grid w-full grid-cols-1 gap-0">
                    <div className="w-full text-center text-22 font-bold leading-[110%] text-white">
                      {therapist.averageRating}
                    </div>
                    <div className="w-full text-center text-[11px] leading-[110%] text-white">out of 5</div>
                  </div>
                </div>
                <div className="grid w-full grid-cols-1 gap-6">
                  {new Array(5).fill(0).map((_, key: number) => (
                    <div key={key} className="grid w-full grid-cols-[auto,1fr] items-center gap-10">
                      <div className="flex w-[77px] items-center justify-end gap-4">
                        {new Array(5 - key).fill(0).map((_, ke: number) => (
                          <MdStar key={ke} className="text-10 text-white" />
                        ))}
                      </div>
                      <div className="relative h-6 w-full rounded-full bg-grey-light-20">
                        <div className="absolute left-0 top-0 h-full w-1/2 rounded-full bg-white"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid w-full grid-cols-1 gap-20">
                {reviews.map((review: ReviewInterface, key: number) => (
                  <div key={key} className="grid w-full grid-cols-[auto,1fr] gap-14 rounded-12 bg-grey-light-20 p-20">
                    <Avatar avatar={review.avatar} name={review.userName} />
                    <div className="grid w-full grid-cols-1 gap-2">
                      <div className="grid w-full grid-cols-[1fr,auto]">
                        <div className="w-full truncate overflow-ellipsis text-14 text-white sm:text-16">
                          {review.userName}
                        </div>
                        <div className="flex items-center gap-6">
                          {new Array(5).fill(0).map((_, ke: number) => (
                            <div key={ke} className="flex">
                              {review.rating >= ke ? (
                                <MdStar className="text-12 text-white" />
                              ) : (
                                <MdStarBorder className="text-12 text-white" />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="w-full text-12 text-grey-light-70">{review.review}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full text-center text-14 text-white">Loading...</div>
        )}
      </div>
    </>
  )
}

export default BrowseTherapist
