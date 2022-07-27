import { therapistBookmark, therapistAll } from "api/endpoints/therapists"
import BrowseBookmarks from "components/browse/BrowseBookmarks"
import BrowseFilter from "components/browse/elements/BrowseFilter"
import Nav from "components/nav/Nav"
import WrapperPage from "components/wrapper/WrapperPage"
import { useBrowse } from "contexts/BrowseContext"
import { useProps } from "contexts/PropsContext"
import { SLUG, URL } from "libs/constants"
import { TherapistInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import { MdBookmark, MdClose } from "react-icons/md"
import { Link } from "react-router-dom"
import Button from "utils/buttons/Button"

const Browse = () => {
  const { token } = useProps()
  const { age, area, experience, gender, priceMax, priceMin, region } = useBrowse()

  const [active, setActive] = useState(0)
  const [bookmarks, setBookmarks] = useState(false)
  const [filter] = useState(false)

  const [page, setPage] = useState(1)
  const [pages, setPages] = useState(1)

  const [therapistTop, setTherapistTop] = useState<TherapistInterface>()
  const [therapists, setTherapists] = useState<TherapistInterface[]>([])

  useEffect(() => {
    onLoad()
  }, [page, age, area, experience, gender, priceMax, priceMin, region])

  useEffect(() => {
    if (active > therapists.length) {
      setPage(page + 1)
    }

    setTherapistTop(therapists[active])
  }, [active, therapists])

  const onLoad = async () => {
    const result = await therapistAll(
      token,
      page,
      priceMin,
      priceMax,
      gender ? gender.value : "",
      age ? age.value : "",
      area ? area.value : "",
      experience ? experience.value : ""
    )

    if (result) {
      setTherapists(result.data.therapists)
      setPages(result.data.totalPages)
    }
  }

  const onBookmark = async (id: string) => {
    const result = await therapistBookmark(token, id)

    if (result && therapistTop) {
      const newTherapistTop: TherapistInterface = { ...therapistTop }
      newTherapistTop.isBookmarkTherapist = true

      setTherapistTop(newTherapistTop)
    }
  }

  return (
    <>
      <Helmet>
        <title>Browse {SLUG}</title>
      </Helmet>
      <Nav />
      <WrapperPage right={filter ? <BrowseFilter /> : <></>} title={"Browse"} bg>
        {bookmarks ? (
          <BrowseBookmarks setBookmarks={setBookmarks} />
        ) : (
          <div className="flex w-full flex-grow items-center justify-center p-30 sm:p-40 md:p-60">
            <div className="grid w-[310px] max-w-full grid-cols-1 gap-40 sm:gap-60 md:gap-80">
              <Button handler={() => setBookmarks(true)} title={"Review Bookmarked Selections"} />
              <div className="relative h-[420px] w-full">
                {therapists.map((therapist, key: number) => (
                  <Link
                    key={key}
                    className={`tr absolute top-0 left-0 h-full w-full overflow-hidden rounded-24 bg-grey-light-10 ${
                      key < active ? "opacity-0" : "opacity-1"
                    } ${key < 4 ? "opacity-1" : "opacity-0"}`}
                    style={{
                      transform: `rotate(${
                        key < active ? 0 : key === active ? 0 : key - active === 1 ? 5 : (key - active - 1) * -5
                      }deg)`,
                      zIndex: 20 - (key - active)
                    }}
                    to={URL.BROWSE.THERAPIST.replace(":id", therapist.therapistId)}
                  >
                    <img alt="" className="h-full w-full object-cover" src={therapist.profilePicture} />
                    <div
                      className={`tr absolute bottom-0 left-0 right-0 flex h-[106px] w-full items-end justify-between gap-20 bg-gradient-to-t from-grey-dark-40 to-transparent py-20 px-28 ${
                        key === active ? "opacity-1" : "opacity-0"
                      }`}
                    >
                      <div className="grid grid-cols-1">
                        <div className="w-full text-left text-16 font-semibold text-white sm:text-18">
                          {therapist.name}
                        </div>
                        <div className="w-full truncate overflow-ellipsis text-left text-14 text-white">
                          {therapist.designation}
                        </div>
                      </div>
                      <div className="flex h-32 items-center justify-center rounded-12 bg-grey-light-40 px-20 text-14 text-white">
                        {therapist.Country}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="hidden w-full text-center text-14 text-white">
                {page} / {pages}
              </div>
              <div className="flex w-full items-center justify-center gap-20 sm:gap-30 md:gap-40">
                <button
                  className="group relative flex h-60 w-60 items-center justify-center rounded-full bg-gradient-to-bl from-[#FF0000] to-[#FAF6F6]"
                  onClick={() => setActive(Math.min(therapists.length, active + 1))}
                >
                  <div className="tr opacity-1 absolute top-[50%] left-[50%] h-[54px] w-[54px] translate-x-[-50%] translate-y-[-50%] transform rounded-full bg-blue group-hover:opacity-0"></div>
                  <MdClose className="tr relative text-24 text-white group-hover:text-grey-dark" />
                </button>
                <button
                  className="group relative flex h-60 w-60 items-center justify-center rounded-full bg-gradient-to-bl from-[#A091FF] to-[#FF91E7]"
                  onClick={() =>
                    therapistTop && !therapistTop.isBookmarkTherapist ? onBookmark(therapistTop.therapistId) : ""
                  }
                >
                  <div
                    className={`tr absolute top-[50%] left-[50%] h-[54px] w-[54px] translate-x-[-50%] translate-y-[-50%] transform rounded-full bg-blue ${
                      therapistTop && therapistTop.isBookmarkTherapist ? "opacity-0" : "opacity-1 group-hover:opacity-0"
                    }`}
                  ></div>
                  <MdBookmark className="tr relative text-24 text-white " />
                </button>
              </div>
            </div>
          </div>
        )}
      </WrapperPage>
    </>
  )
}

export default Browse
