import React, { useEffect, useRef, useState } from "react"
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion"
function Reveal({ content, refP }) {
  const ref = useRef(null)
  const [font, setFont] = useState("cursive")

  const { scrollYProgress } = useScroll({
    layoutEffect: false,
    target: ref,
    container: refP,
    offset: [`start end`, `end start`],
  })
  const opacity = useTransform(scrollYProgress, [0.3, 0.5, 0.8], [0.3, 1, 0.3])

  const x = useTransform(
    scrollYProgress,
    [0.1, 0.3, 0.5, 0.7, 0.9],
    [-5, 30, 70, 30, -5]
  )

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.6 && latest > 0.45) {
      setFont("italic")
    } else {
      setFont("normal")
    }
  })
  return (
    <>
      <motion.div
        style={{ opacity, x, fontStyle: font, scrollSnapAlign: "center" }}
        transition={{ delay: 0 }}
        ref={ref}
        className="text-2xl my-3 w-full py-5 text-left font-NeueMontrealLight [@media(min-width:1130px)]:text-4xl [@media(min-width:1065px)]:text-3xl"
      >
        {content}
      </motion.div>
    </>
  )
}

export default Reveal
