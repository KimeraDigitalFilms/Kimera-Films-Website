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
        <Video isOpen={isOpen} />
      </motion.section>
      <ShowReelModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}

const Video = () => {
  const [hovered, setHovered] = useState(false)

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
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
            }}
            frameBorder="0"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
          />
        </div>
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
