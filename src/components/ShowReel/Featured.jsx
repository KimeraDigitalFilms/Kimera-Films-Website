import React, { useRef } from "react"
import { useScroll, useTransform, motion, useInView } from "framer-motion"
import ShowReel from "./ShowReel"
import { Link } from "react-router-dom"
// import Heading from "../Heading"

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

  //  useEffect(()=>{
  // const vid=document.getElementById('reel')
  // if (isInView){
  //     vid.play()
  // }else{
  //     vid.pause()
  // }
  //  },[isInView])

  return (
    <>
      <div ref={ref} className={"relative mx-auto mt-20 h-[300vh]"}>
        <div className={"sticky top-0 h-[100vh] overflow-hidden"}>
          {/* <motion.div
          style={{ scale: scale4 }}
          className={
            "el w-full h-full top-0 absolute flex items-center justify-center"
          }
        >
          <div ref={videoRef} className={" relative w-[25vw] h-[25vh]"}>
            <motion.video playsInline id="reel" muted autoPlay loop src="/videos/random1.mp4" className="w-full h-full z-50"></motion.video>
            <img src={videos[0].src} alt="image" className="object-cover w-full h-full"/>
          </div>
        </motion.div> */}
          <motion.div
            //  style={{ scale: scale4 }}
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
                src={videos[1].src}
                alt="video"
                className="h-full w-full object-cover"
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
                src={videos[2].src}
                alt="video"
                className="h-full w-full object-cover"
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
                loop
                src={videos[3].src}
                alt="video"
                className="h-full w-full object-cover"
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
                src={videos[4].src}
                alt="video"
                className="h-full w-full object-cover"
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
                loop
                src={videos[5].src}
                alt="video"
                className="h-full w-full object-cover"
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
                src={videos[6].src}
                alt="video"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* <div className="overflow-hidden py-1">
          <motion.h1
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.4, ease: easeOut }}
            style={{
              WebkitUserSelect: "none",
              msUserSelect: "none",
              userSelect: "none",
            }}
            className="font-weight text-center font-AvenirBook text-7xl text-secondary1"
          >
            Featured Projects
          </motion.h1>
        </div> */}
      <Heading/>
      <div className="mb-40 mt-10 flex flex-col items-center justify-start gap-y-10">
        <h2 className="text-secondary2 font-NeueMontrealLight mx-auto w-4/5 text-center text-2xl">
          WE CRAFT IMPACTFUL CONTENT FOR CLIENTS ACROSS A RANGE OF INDUSTRIES,
          INCLUDING BROADCAST, FILM, GAMES, BRANDS, EXPERIENTIAL, AND THEMED
          ENTERTAINMENT.
        </h2>
        <Link
          to="/gallery"
          className="bg-buttonBg font-NeueMontrealLight scale-100 rounded-full px-5 py-2 text-4xl uppercase tracking-wide text-primary transition-all hover:scale-110 active:scale-95"
        >
          View Gallery
        </Link>
      </div>
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
        className='font-FoundersGrotesk mt-3 w-full py-5 text-center text-[300px] leading-[200px] text-secondary1 select-none'
      >
        <span className="text-[310px] pl-2">FEATURED</span><br />PROJECTS
      </motion.h1>
    </>
  )
}
