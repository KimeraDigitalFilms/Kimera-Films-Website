import React, { useRef } from "react"
import { useScroll, useTransform, motion, useInView } from "framer-motion"
import ShowReel from "./ShowReel"
import { Link } from "react-router-dom"
import { useWindowSize } from "../../utils/useWindowSize"

function Featured() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  })

  const videoRef = useRef(null)
  const isInView = useInView(videoRef)

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4])
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5])
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6])
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8])
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9])

  const videos = [
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbKnGZQfGZl7AaWeLFEUphgLqbbGYGOvwyvA&usqp=CAU",
      scale: scale4,
    },
    {
      src: "/featured_videos/2.mp4",
      scale: scale5,
    },
    {
      src: "/featured_videos/1.webm",
      scale: scale6,
    },
    {
      src: "/featured_videos/3.webm",
      scale: scale5,
    },
    {
      src: "/featured_videos/5.webm",
      scale: scale6,
    },
    {
      src: "/featured_videos/4.webm",
      scale: scale8,
    },
    {
      src: "/featured_videos/6.webm",
      scale: scale9,
    },
  ]

  const { width } = useWindowSize()

  return (
    <>
      <div
        ref={ref}
        className={
          "relative mx-auto mt-20 h-[300vh] [@media(max-width:1119px)]:mb-20"
        }
      >
        <div className={"sticky top-0 h-[100vh] overflow-hidden"}>
          <motion.div
            className="flex h-full w-full items-center justify-center"
          >
            <ShowReel scale={scale4} viewRef={videoRef} />
          </motion.div>

          <motion.div
            style={{ scale: scale5 }}
            className={
              "el absolute top-0 flex h-full w-full items-center justify-center"
            }
          >
            <div
              className={"relative -top-[30vh] left-[5vw] h-[30vh] w-[35vw]"}
            >
              <video
                muted
                autoPlay
                loop
                playsInline
                src={videos[1].src}
                alt="video"
                className="h-full w-full select-none object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            style={{ scale: scale6 }}
            className={
              "el absolute top-0 flex h-full w-full items-center justify-center"
            }
          >
            <div
              className={"relative -left-[25vw] -top-[10vh] h-[45vh] w-[20vw]"}
            >
              <video
                muted
                autoPlay
                loop
                playsInline
                src={videos[2].src}
                alt="video"
                className="h-full w-full select-none object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            style={{ scale: scale5 }}
            className={
              "el absolute top-0 flex h-full w-full items-center justify-center"
            }
          >
            <div className={"relative left-[27.5vw] h-[25vh] w-[25vw]"}>
              <video
                muted
                autoPlay
                playsInline
                loop
                src={videos[3].src}
                alt="video"
                className="h-full w-full select-none object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            style={{ scale: scale6 }}
            className={
              "el absolute top-0 flex h-full w-full items-center justify-center"
            }
          >
            <div
              className={"relative left-[5vw] top-[27.5vh] h-[25vh] w-[20vw]"}
            >
              <video
                muted
                autoPlay
                loop
                playsInline
                src={videos[4].src}
                alt="video"
                className="h-full w-full select-none object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            style={{ scale: scale8 }}
            className={
              "el absolute top-0 flex h-full w-full items-center justify-center"
            }
          >
            <div
              className={
                "relative -left-[22.5vw] top-[27.5vh] h-[25vh] w-[30vw]"
              }
            >
              <video
                muted
                autoPlay
                playsInline
                loop
                src={videos[5].src}
                alt="video"
                className="h-full w-full select-none object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            style={{ scale: scale9 }}
            className={
              "el absolute top-0 flex h-full w-full items-center justify-center"
            }
          >
            <div
              className={"relative left-[25vw] top-[22.5vh] h-[15vh] w-[15vw]"}
            >
              <video
                muted
                autoPlay
                loop
                playsInline
                src={videos[6].src}
                alt="video"
                className="h-full w-full select-none object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
      {width >= 1120 && (
        <>
          <Heading />
          <div className="mb-40 mt-10 flex flex-col items-center justify-start gap-y-10">
            <h2 className="mx-auto w-4/5 text-center font-NeueMontrealLight text-2xl text-secondary2">
              WE CRAFT IMPACTFUL CONTENT FOR CLIENTS ACROSS A RANGE OF
              INDUSTRIES, INCLUDING BROADCAST, FILM, GAMES, BRANDS,
              EXPERIENTIAL, AND THEMED ENTERTAINMENT.
            </h2>
            <Link
              to="/gallery"
              className="scale-100 rounded-full bg-buttonBg px-5 py-2 font-NeueMontrealLight text-4xl uppercase tracking-wide text-primary transition-all hover:scale-110 active:scale-95"
            >
              View Gallery
            </Link>
          </div>
        </>
      )}
    </>
  )
}

export default Featured

function Heading() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`start end`, `end start`],
  })
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.7, 1],
    [0.1, 1, 1, 0.1]
  )
  return (
    <>
      <motion.h1
        style={{ opacity }}
        ref={ref}
        className="mt-3 w-full select-none py-5 text-center font-FoundersGrotesk text-[300px] leading-[200px] text-secondary1"
      >
        <span className="pl-2 text-[310px]">FEATURED</span>
        <br />
        PROJECTS
      </motion.h1>
    </>
  )
}
