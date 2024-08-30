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
        className={`font-FoundersGrotesk min-[1072]:text-[300px] mt-3 w-full py-5 text-center min-[737px]:text-[200px] text-[100px] min-[546px]:text-[150px] min-[897px]:text-[250px] text-secondary1`}
      >
        {text}
      </motion.h1>
    </>
  )
}

function About() {
  return (
    <div className="screen-padding mx-auto mb-36 w-11/12 min-[546px]:text-2xl text-xl">
      <Heading text={"ABOUT US"} />

      <div className="text-secondary2 font-NeueMontrealLight mt-4 w-full p-3 text-justify ">
        Welcome to KIMERA, where creativity is our DNA. We are a living,
        breathing fusion of artistic minds. Just like the creature from Greek
        mythology, Kimera represents the convergence of diverse talents —
        directors, designers, analysts, Vfx artists, writers, web developers,
        growth strategists, cinematographers, sound artists, performance
        marketers and more. And like the creature it embodies, Kimera only plans
        to keep growing its heads.
      </div>

      <div className="text-secondary2 font-NeueMontrealLight min-[1000px]:flex-nowrap flex w-full gap-x-7 p-3 text-justify flex-wrap gap-y-5">
        <div className="min-[1000px]:w-1/2">
          <video src="/About_Us.webm" loop muted autoPlay className="" />
        </div>
        <p className="min-[1000px]:w-1/2">
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
