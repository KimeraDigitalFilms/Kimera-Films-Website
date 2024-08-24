import React, { useEffect, useRef, useState } from "react"
import {
  easeOut,
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
  // const [opacity,setOpacity]=useState(0.3)
  const fontSize = useTransform(
    scrollYProgress,
    [0.4, 0.5, 0.7],
    ["40%", "250%", "40%"]
  )
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
        style={{ opacity, x, fontStyle: font }}
        transition={{ delay: 0 }}
        ref={ref}
        className="font-NeueMontrealLight my-3 w-full py-5 text-left text-4xl"
      >
        {content}
      </motion.div>
    </>
  )
}

export default Reveal
