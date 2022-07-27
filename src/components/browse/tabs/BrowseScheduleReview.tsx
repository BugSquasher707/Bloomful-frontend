import { ReactComponent as SubscriptionCall } from "assets/img/subscription/call.svg"
import { ReactComponent as SubscriptionChat } from "assets/img/subscription/chat.svg"
import { ReactComponent as SubscriptionVideo } from "assets/img/subscription/video.svg"
import { BookProductType, BookType } from "libs/enums"
import { SpotInterface, TherapistFullInterface } from "libs/interfaces"
import React from "react"
import { MdAccessTime, MdCalendarToday, MdOutlineAttachMoney } from "react-icons/md"
import Button from "utils/buttons/Button"

const BrowseScheduleReview = ({
  product,
  spot,
  therapist,
  handler
}: {
  product?: BookProductType
  spot?: SpotInterface
  therapist: TherapistFullInterface
  handler: any
}) => {
  return (
    <>
      <div className="grid w-full grid-cols-1 gap-40 rounded-12 sm:gap-50 md:gap-60">
        <div className="grid w-full grid-cols-1 gap-20 sm:gap-30">
          {product !== undefined ? (
            <>
              <div className="flex w-full justify-center">
                {
                  {
                    [BookProductType.Call]: <SubscriptionCall className="h-auto w-[160px]" />,
                    [BookProductType.Chat]: <SubscriptionChat className="h-auto w-[160px]" />,
                    [BookProductType.Video]: <SubscriptionVideo className="h-auto w-[160px]" />
                  }[product]
                }
              </div>
              <div className="flex w-full justify-center">
                <div className="grid w-[200px] max-w-full grid-cols-1 gap-4">
                  <div className="text-center text-16 font-semibold leading-[110%] text-white sm:text-18 md:text-22">
                    {
                      {
                        [BookProductType.Call]: "Audio call",
                        [BookProductType.Chat]: "Chat",
                        [BookProductType.Video]: "Video call"
                      }[product]
                    }{" "}
                    with
                  </div>
                  <div className="text-center text-16 font-semibold leading-[110%] text-white sm:text-18 md:text-22">
                    {therapist.name}
                  </div>
                </div>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
        <div className="grid w-full grid-cols-1 gap-30">
          <div className="grid w-full grid-cols-1 gap-10">
            <div className="w-full text-14 text-white">Appointment details</div>
            <div className="grid w-full grid-cols-1 gap-20 rounded-12 bg-grey-light-10 p-20">
              <div className="grid w-full grid-cols-1 gap-12">
                <div className="grid w-full grid-cols-[1fr,auto] items-center gap-12">
                  <div className="flex items-center justify-start gap-6">
                    <MdCalendarToday className="text-16 text-white" />
                    <div className="text-14 text-white sm:text-16">Date</div>
                  </div>
                  <div className="text-14 text-white sm:text-16">March 19th, 2022</div>
                </div>
                <div className="grid w-full grid-cols-[1fr,auto] items-center gap-12">
                  <div className="flex items-center justify-start gap-6">
                    <MdAccessTime className="text-16 text-white" />
                    <div className="text-14 text-white sm:text-16">Time</div>
                  </div>
                  <div className="text-14 text-white sm:text-16">{spot ? "Spot" : "7:00 PM"}</div>
                </div>
                <div className="grid w-full grid-cols-[1fr,auto] items-center gap-12">
                  <div className="flex items-center justify-start gap-6">
                    <MdOutlineAttachMoney className="text-16 text-white" />
                    <div className="text-14 text-white sm:text-16">Price</div>
                  </div>
                  <div className="text-14 text-white sm:text-16">$50</div>
                </div>
              </div>
              <Button handler={() => handler(BookType.Profile)} title={"Edit"} />
            </div>
          </div>
          <Button handler={() => handler(BookType.Payment)} title={"Continue"} />
        </div>
      </div>
    </>
  )
}

export default BrowseScheduleReview
