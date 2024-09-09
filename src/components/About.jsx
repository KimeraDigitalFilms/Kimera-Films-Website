import React, { useRef } from "react"
import { useScroll, useTransform, motion } from "framer-motion"

function Heading({ text }) {
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
        className={`mt-3 [@media(min-width:546px)]:mb-20 w-full py-5 text-center font-FoundersGrotesk text-[80px] text-secondary1 [@media(min-width:1072px)]:text-[300px] [@media(min-width:370px)]:text-[100px] [@media(min-width:546px)]:text-[150px] [@media(min-width:737px)]:text-[200px] [@media(min-width:897px)]:text-[250px]`}
      >
        {text}
      </motion.h1>
    </>
  )
}

function About() {
  return (
    <div className="screen-padding mx-auto [@media(min-width:405px)]:mb-36 w-11/12 text-lg [@media(min-width:405px)]:text-xl [@media(min-width:546px)]:text-2xl">
      <Heading text={"ABOUT US"} />

      <div className="mt-4 w-full p-3 text-justify font-NeueMontrealLight text-secondary2">
        Welcome to KIMERA, where creativity is our DNA. We are a living,
        breathing fusion of artistic minds. Just like the creature from Greek
        mythology, Kimera represents the convergence of diverse talents —
        directors, designers, analysts, Vfx artists, writers, web developers,
        growth strategists, cinematographers, sound artists, performance
        marketers and more. And like the creature it embodies, Kimera only plans
        to keep growing its heads.
      </div>

      <div className="flex w-full flex-wrap gap-x-7 gap-y-5 p-3 text-justify font-NeueMontrealLight text-secondary2 [@media(min-width:1000px)]:flex-nowrap">
        <div className="[@media(min-width:1000px)]:w-1/2">
          <video src="/About_Us.webm" loop muted autoPlay className="" />
        </div>
        <p className="[@media(min-width:1000px)]:w-1/2">
          At Kimera, we boldly defy creative norms and celebrate the art of
          finesse. We're the preferred choice for leading brands because we
          understand their language while continuously pushing boundaries.{" "}
          <br />
          <br />
          Our process begins with uncovering the essence of your idea or brand,
          crafting it into a compelling and strategic narrative, and expertly
          executing your brand vision. Each step of this journey is fueled by
          passion, innovation, and an unwavering commitment to distinction.
        </p>
      </div>
    </div>
  )
}

export default About
