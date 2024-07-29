import React, { useRef } from "react"
import Logo from "./Logo/Logo"
import { useScroll, motion, useTransform, easeOut } from "framer-motion"

function LogoGimmick() {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  })

  let translateX = useTransform(scrollYProgress, [0, 0.5], ["0px", "-60%"])
  let scale = useTransform(scrollYProgress, [0, 0.5], [1, 2.42])
  let rotate = useTransform(scrollYProgress, [0, 0.5], ["0deg", "-5deg"])

  let textX = useTransform(scrollYProgress, [0.6, 0.8], ["-100%", "30%"], {
    ease: easeOut,
  })

  return (
    <div id="logoGimmick" ref={ref} className="relative mb-[200px] h-[200vh]">
      <motion.div className="sticky top-0 h-screen overflow-hidden transition-all delay-0 ease-linear">
        <motion.h1 //text
          transition={{ ease: "linear", delay: 0 }}
          style={{ translateX: textX }}
          className="absolute top-[50%] text-6xl font-bold text-secondary1 transition-transform delay-0 ease-linear"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </motion.h1>
        <motion.div
          transition={{ ease: "linear", delay: 0 }}
          style={{ scale, rotate, translateX }}
          className="h-fit transition-transform delay-0 ease-linear"
        >
          <Logo src={"/logo.svg"} style={"h-[700px] bg-primary ml-10"} />          {/*logo */}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default LogoGimmick
