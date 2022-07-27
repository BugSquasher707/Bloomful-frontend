import BrowsePaymentOption from "components/browse/elements/BrowsePaymentOption"
import { BookType, PaymentType } from "libs/enums"
import React, { useState } from "react"
import { IoMdCard } from "react-icons/io"
import Button from "utils/buttons/Button"
import InputField from "utils/input/InputField"

const BrowseSchedulePayment = ({
  cardNumber,
  cardExpiration,
  cardCvc,
  cardZip,
  handlerCardZip,
  handlerCardNumber,
  handlerCardExpiration,
  handlerCardCvc,
  handler
}: {
  cardNumber: string
  cardExpiration: string
  cardCvc: string
  cardZip: string
  handlerCardZip: any
  handlerCardNumber: any
  handlerCardExpiration: any
  handlerCardCvc: any
  handler: any
}) => {
  const [type, setType] = useState<PaymentType>()

  return (
    <>
      <div className="grid w-full grid-cols-1 gap-40 rounded-12 sm:gap-50 md:gap-60">
        {type !== undefined ? (
          <div className="grid w-full grid-cols-1 gap-20">
            {
              {
                [PaymentType.Card]: (
                  <>
                    <div className="w-full text-18 font-semibold text-white sm:text-22">Credit / debit card</div>
                    <div className="grid w-full grid-cols-1 gap-20">
                      <InputField
                        handler={handlerCardNumber}
                        placeholder={"XXXX XXXX XXXX XXXX"}
                        title={"Card number"}
                        value={cardNumber}
                      />

                      <div className="grid w-full grid-cols-3 gap-20">
                        <InputField
                          handler={handlerCardExpiration}
                          placeholder={"00/00"}
                          title={"Expiration date"}
                          value={cardExpiration}
                        />
                        <InputField handler={handlerCardCvc} placeholder={"123"} title={"CVC"} value={cardCvc} />
                        <InputField handler={handlerCardZip} placeholder={"ZIP"} title={"Zip code"} value={cardZip} />
                      </div>
                    </div>
                  </>
                )
              }[type]
            }
            <Button handler={() => handler(BookType.Summary)} title={"Continue"} />
          </div>
        ) : (
          <div className="grid w-full grid-cols-1 gap-20">
            <div className="w-full text-18 font-semibold text-white sm:text-22">Select payment method</div>
            <div className="grid w-full grid-cols-1 gap-10">
              <BrowsePaymentOption
                handler={() => setType(PaymentType.Card)}
                icon={<IoMdCard className="text-18 text-white" />}
                title={"Credit / debit card"}
              />
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default BrowseSchedulePayment
