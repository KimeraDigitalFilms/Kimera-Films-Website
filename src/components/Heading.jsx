import React, { useRef } from "react"
import { useScroll, useTransform, motion } from "framer-motion"

function Heading({ text }) {
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
        style={{ opacity }}
        ref={ref}
        className="font-FoundersGrotesk mt-3 w-full py-5 text-center text-[300px] leading-[200px] text-secondary1"
      >
        {text}
      </motion.h1>
    </>
  )
}

export default Heading
