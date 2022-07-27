import { therapistBookmarked } from "api/endpoints/therapists"
import { useProps } from "contexts/PropsContext"
import { URL } from "libs/constants"
import { TherapistInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Button from "utils/buttons/Button"

const BrowseBookmarks = ({ setBookmarks }: { setBookmarks: any }) => {
  const { token } = useProps()

  const [pageBookmarked, setPageBookmarked] = useState(1)
  const [pagesBookmarked, setPagesBookmarked] = useState(1)

  const [therapistsBookmark, setTherapistsBookmark] = useState<TherapistInterface[]>([])

  useEffect(() => {
    onLoad()
  }, [])

  const onLoad = async () => {
    const result = await therapistBookmarked(token, pageBookmarked)

    if (result) {
      setTherapistsBookmark(result.data.bookmarkTherapists)

      setPageBookmarked(1)
      setPagesBookmarked(result.data.totalPages)
    }
  }

  return (
    <>
      <div className="flex w-full flex-grow items-center justify-center p-30 sm:p-40 md:p-60">
        <div className="grid w-[700px] max-w-full grid-cols-1 gap-40 sm:gap-60 md:gap-80">
          <div className="flex w-full justify-center">
            <div className="grid w-[310px] max-w-full grid-cols-1">
              <Button handler={() => setBookmarks(false)} title={"Explore new therapists"} />
            </div>
          </div>
          {therapistsBookmark.length > 0 ? (
            <div className="grid w-full grid-cols-1 gap-20">
              <div className="grid w-full grid-cols-3 gap-20">
                {therapistsBookmark.map((therapist, key: number) => (
                  <Link
                    key={key}
                    className={"tr relative h-full w-full overflow-hidden rounded-24 bg-grey-light-10"}
                    to={URL.BROWSE.THERAPIST.replace(":id", therapist.therapistId)}
                  >
                    <img alt="" className="h-full w-full object-cover" src={therapist.profilePicture} />
                    <div className="tr absolute bottom-0 left-0 right-0 flex h-[106px] w-full items-end justify-between gap-20 bg-gradient-to-t from-grey-dark-40 to-transparent py-20 px-28">
                      <div className="grid grid-cols-1">
                        <div className="w-full text-left text-16 font-semibold text-white sm:text-18">
                          {therapist.name}
                        </div>
                        <div className="w-full truncate overflow-ellipsis text-left text-14 text-white">
                          {therapist.designation}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="hidden w-full text-center text-14 text-white">
                {pageBookmarked} / {pagesBookmarked}
              </div>
            </div>
          ) : (
            <div className="w-full text-center text-14 text-white">No bookmarked therapists found</div>
          )}
        </div>
      </div>
    </>
  )
}

export default BrowseBookmarks
