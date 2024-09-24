import { FiMenu, FiArrowUpRight } from "react-icons/fi"
import { useEffect, useRef, useState } from "react"
import { useAnimate, motion } from "framer-motion"
import ShowReelModal from "./ShowReelModal"

const ShowReel = ({ viewRef, scale }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <motion.section
        ref={viewRef}
        style={{ scale }}
        onClick={() => {
          document.body.style.overflow = "hidden"
          setIsOpen(true)
        }}
        className="relative z-40 h-[25vh] w-[25vw] overflow-hidden"
      >
        {/* {!isOpen &&<Video />}  */}
        <Video isOpen={isOpen} />
      </motion.section>
      {/* {isOpen && <ShowReelModal isOpen={isOpen} setIsOpen={setIsOpen} />} */}
      <ShowReelModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}

const Video = ({ isOpen }) => {
  const [hovered, setHovered] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const [scope, animate] = useAnimate()
  const navRef = useRef(null)

  const handleMouseMove = ({ offsetX, offsetY, target }) => {
    // @ts-ignore
    const isNavElement = [...target.classList].includes("glass-nav")

    if (isNavElement) {
      setHovered(true)

      const top = offsetY + "px"
      const left = offsetX + "px"

      animate(scope.current, { top, left }, { duration: 0 })
    } else {
      setHovered(false)
    }
  }

  useEffect(() => {
    navRef.current?.addEventListener("mousemove", handleMouseMove)

    return () =>
      navRef.current?.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // let reel;
  // let player;
  // useEffect(() => {
  //   reel = document.getElementById("reel");
  //   player = new Vimeo.Player("reel");
  // },[]);

  // useEffect(() => {
  //   if (!isOpen) {
  //     player.play();
  //   }
  // }, [isOpen]);

  return (
    <div
      ref={navRef}
      onMouseLeave={() => setHovered(false)}
      style={{
        cursor: hovered ? "none" : "auto",
      }}
      className="glass-nav z-10 mx-auto h-full w-full max-w-6xl overflow-hidden border-transparent"
    >
      <div className="glass-nav flex h-full w-full items-center justify-between">
        <Cursor hovered={hovered} scope={scope} />

        <div
          style={{
            position: "relative",
            paddingLeft: "50%",
            paddingBottom: "35%",
            paddingTop: "35%",
            paddingRight: "50%",
            width: "25vw !important",
            height: "25vh !important",
            overflowX: "hidden",
          }}
          className="-z-10"
        >
          <iframe
            title="reel"
            loading="lazy"
            id="reel"
            src="https://www.youtube-nocookie.com/embed/co3oF61Lm6k?si=obnDMZmXGPns34Tj&amp;playlist=co3oF61Lm6k&amp;controls=0&amp;mute=1&amp;autoplay=1&amp;loop=1&amp;disablekb=1&amp;playsinline=1"
            // src="https://www.youtube-nocookie.com/embed/cnoM8scJZ98?si=DkhtAp6qt8s0wNrX&amp;playlist=cnoM8scJZ98&amp;controls=0&amp;mute=1&amp;autoplay=1&amp;loop=1&amp;disablekb=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            // src="https://player.vimeo.com/video/938376141?h=4bb8442f8d&background=1&title=0&byline=0&muted=1&controls=0"
            // style={{ position:'relative',width: "25vw !important", height: "25vh !important",padding:0 }}
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
            }}
            // className="w-full h-full"
            frameBorder="0"
            // allow="autoplay; fullscreen; picture-in-picture"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
          />
        </div>
        {/* <video
          style={{ width: "25vw !important", height: "25vh !important" }}
          muted={true}
          playsInline
          preload="none"
          poster="/thumbnails/random3.png"
          src="/videos/random3.mp4"
          id="reel"
          className="-z-10 w-[25vw] h-[25vh] object-fill"
        ></video> */}
        {/* <motion.div
          style={{ scale: scale4 }}
          className={
            "el w-full h-full top-0 -z-10 flex items-center justify-center "
          }
        >
          <div className={" relative w-[25vw] h-[25vh]"}>
            <motion.video playsInline id="reel" muted autoPlay loop src="/videos/random1.mp4" className="w-full h-full z-50"></motion.video> */}
        {/* <img src={pictures[0].src} alt="image" className="object-cover w-full h-full"/> */}
        {/* </div>
        </motion.div> */}

        {/* <div className="-z-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos magni ipsa accusamus reiciendis dicta. Incidunt nemo commodi aliquam dicta, libero ipsum voluptas odit! Sequi, eos minima facere reprehenderit perspiciatis pariatur!
        </div> */}
      </div>
    </div>
  )
}

const Cursor = ({ hovered, scope }) => {
  return (
    <motion.span
      initial={false}
      animate={{
        opacity: hovered ? 1 : 0,
        transform: `scale(${
          hovered ? 1 : 0
        }) translateX(-50%) translateY(-50%)`,
      }}
      transition={{ duration: 0.15 }}
      ref={scope}
      className="pointer-events-none absolute z-40 grid h-[50px] w-[50px] origin-[0px_0px] place-content-center rounded-full bg-gradient-to-br from-primary from-40% to-gray-400 text-sm text-secondary1"
    >
      PLAY
    </motion.span>
  )
}

export default ShowReel
