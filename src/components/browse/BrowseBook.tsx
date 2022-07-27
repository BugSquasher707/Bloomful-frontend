import { therapistDetails, therapistSubscriptions } from "api/endpoints/therapists"
import { ReactComponent as SubscriptionCall } from "assets/img/subscription/call.svg"
import { ReactComponent as SubscriptionChat } from "assets/img/subscription/chat.svg"
import { ReactComponent as SubscriptionVideo } from "assets/img/subscription/video.svg"
import BrowseProduct from "components/browse/elements/BrowseProduct"
import BrowseSchedule from "components/browse/tabs/BrowseSchedule"
import BrowseSchedulePayment from "components/browse/tabs/BrowseSchedulePayment"
import BrowseScheduleReview from "components/browse/tabs/BrowseScheduleReview"
import { useProps } from "contexts/PropsContext"
import { BookProductType, BookType } from "libs/enums"
import { SpotInterface, TherapistFullInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { MdAdd } from "react-icons/md"
import Button from "utils/buttons/Button"

const BrowseBook = ({ id }: { id: string }) => {
  const { token } = useProps()

  const [spot, setSpot] = useState<SpotInterface>()
  const [product, setProduct] = useState<BookProductType>()

  const [type, setType] = useState<BookType>(BookType.Profile)
  const [therapist, setTherapist] = useState<TherapistFullInterface>()

  const [cardNumber, setCardNumber] = useState<string>("")
  const [cardExpiration, setCardExpiration] = useState<string>("")
  const [cardCvc, setCardCvc] = useState<string>("")
  const [cardZip, setCardZip] = useState<string>("")

  useEffect(() => {
    onDetails()
  }, [id])

  useEffect(() => {
    if (therapist) {
      onSubscriptions()
    }
  }, [therapist])

  const onDetails = async () => {
    const result = await therapistDetails(token, id)

    if (result && result.data) {
      const newTherapist = result.data

      newTherapist.qualification = newTherapist.qualification.split(",")

      setTherapist(newTherapist)
    }
  }

  const onSubscriptions = async () => {
    const result = await therapistSubscriptions(token, id)

    if (result) {
      console.log(result)
    }
  }

  return (
    <>
      <div className="flex w-full justify-center p-30 sm:p-40 md:p-60">
        {therapist ? (
          <>
            {type === BookType.Profile ? (
              <div className="grid w-[440px] max-w-full grid-cols-1 items-start gap-20">
                <div className="grid w-full grid-cols-1 gap-12">
                  <div className="w-full text-16 font-semibold text-white sm:text-18 md:text-22">
                    Monthly Subscription
                  </div>
                  <div className="grid w-full grid-cols-1 gap-20 rounded-12 bg-grey-light-10 p-20">
                    <div className="flex w-full justify-center">
                      <div className="relative h-70 w-70 rounded-full">
                        <img
                          alt=""
                          className="h-full w-full rounded-full object-cover"
                          src={therapist.profilePicture}
                        />
                        <div className="absolute top-0 right-0 flex h-24 w-24 items-center justify-center rounded-full bg-blue">
                          <div className="absolute top-0 left-0 h-full w-full rounded-full bg-grey-light-10"></div>
                          <div className="flex h-18 w-18 items-center justify-center rounded-full bg-purple">
                            <MdAdd className="text-14 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid w-full grid-cols-1 gap-4">
                      <div className="w-full text-center text-16 font-semibold leading-[110%] text-white sm:text-18">
                        {therapist.name}+ Subscription
                      </div>
                      <div className="w-full text-center text-14 leading-[110%] text-grey-light-70">$99 per month</div>
                    </div>
                    <div className="grid w-full grid-cols-1 gap-4">
                      <div className="w-full text-16 font-semibold leading-[110%] text-white sm:text-18">Benefits</div>
                      <div className="w-full text-14 text-grey-light-70">
                        Bi-Weekly Scheduled Appointments Daily Therapy Through text Office Hours 8 AM to 5 PM (EST) 15
                        Average Minute Respond Time 99% Success Rate
                      </div>
                    </div>
                    <Button handler={undefined} title={"Subscribe"} />
                  </div>
                </div>
                <div className="grid w-full grid-cols-1 gap-12">
                  <div className="w-full text-16 font-semibold text-white sm:text-18 md:text-22">
                    One-time Appointment
                  </div>
                  <div className="grid w-full grid-cols-3 gap-10">
                    <BrowseProduct
                      active={product}
                      handler={setProduct}
                      icon={<SubscriptionChat />}
                      text={"$30 per month"}
                      title={"Chat"}
                      type={BookProductType.Chat}
                    />
                    <BrowseProduct
                      active={product}
                      handler={setProduct}
                      icon={<SubscriptionCall />}
                      text={"$30 per call"}
                      title={"Audio call"}
                      type={BookProductType.Call}
                    />
                    <BrowseProduct
                      active={product}
                      handler={setProduct}
                      icon={<SubscriptionVideo />}
                      text={"$30 per call"}
                      title={"Video call"}
                      type={BookProductType.Video}
                    />
                  </div>
                </div>
                {product !== undefined ? <Button handler={() => setType(BookType.Schedule)} title={"Continue"} /> : ""}
              </div>
            ) : (
              <div className="grid w-[650px] max-w-full grid-cols-[auto,1fr] items-start gap-20 sm:gap-30 md:gap-40">
                <div className="grid w-[200px] max-w-full grid-cols-1 gap-16">
                  <div className="w-full">
                    <img alt="" className="w-full rounded-12" src={therapist.profilePicture} />
                  </div>
                  <div className="w-full truncate overflow-ellipsis text-center text-14 font-semibold text-white sm:text-16">
                    {therapist.name}
                  </div>
                </div>
                <div className="w-full">
                  {
                    {
                      [BookType.Profile]: "",
                      [BookType.Schedule]: (
                        <BrowseSchedule handler={setType} setSpot={setSpot} spot={spot} therapist={therapist} />
                      ),
                      [BookType.Review]: (
                        <BrowseScheduleReview handler={setType} product={product} spot={spot} therapist={therapist} />
                      ),
                      [BookType.Payment]: (
                        <BrowseSchedulePayment
                          cardCvc={cardCvc}
                          cardExpiration={cardExpiration}
                          cardNumber={cardNumber}
                          cardZip={cardZip}
                          handler={setType}
                          handlerCardCvc={setCardCvc}
                          handlerCardExpiration={setCardExpiration}
                          handlerCardNumber={setCardNumber}
                          handlerCardZip={setCardZip}
                        />
                      ),
                      [BookType.Summary]: (
                        <BrowseScheduleReview handler={setType} product={product} spot={spot} therapist={therapist} />
                      )
                    }[type]
                  }
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="w-full text-center text-14 text-white">Loading...</div>
        )}
      </div>
    </>
  )
}

export default BrowseBook
