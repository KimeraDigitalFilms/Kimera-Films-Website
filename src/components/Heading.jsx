import React, { useRef } from "react"
import { useScroll, useTransform, motion } from "framer-motion"

function Heading({ text, style }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    // layoutEffect: false,
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
      style={{opacity}}
        // style={{
        //   background: 'linear-gradient(to bottom, #FFF 100%, #FFF 60%, #FFF 40%, #FFF 20%)',
        //   backgroundSize: '200 % auto',
        //   backgroundPosition: -50 % 0,
        //   opacity,
        //   backgroundClip:'text',
        //   // transition: "background 0.5s ease",
        //   WebkitTextFillColor: "transparent",
        //   textFillColor: "transparent",
        // }}
        ref={ref}
        className={`font-FoundersGrotesk mt-3 w-full py-5 text-center text-[300px] leading-[200px] text-secondary1  ${style}`}
      >
        {text}
      </motion.h1>
    </>
  )
}

export default Heading
