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
    <div
      id="logoGimmick"
      ref={ref}
      className="relative top-[-60px] mb-[100px] h-[200vh]"
    >
      {/* <div className="w-full h-full absolute  bg-blue-500"> */}
      <motion.div className="sticky top-0 h-screen overflow-hidden transition-all delay-0 ease-linear">
        <motion.h1 //text
          transition={{ ease: "linear", delay: 0 }}
          style={{ translateX: textX }}
          className="text-secondary2 font-FoundersGrotesk absolute top-[50%] w-full text-8xl tracking-wider transition-transform delay-0 ease-linear"
        >
          Innovate. Create. Engage.
        </motion.h1>
        <motion.div
          transition={{ ease: "linear", delay: 0 }}
          style={{ scale, rotate, translateX }}
          className="h-fit transition-transform delay-0 ease-linear"
        >
          <Logo src={"/logo.svg"} style={"h-[650px] bg-primary ml-10 mt-10"} />{" "}
          {/*logo */}
        </motion.div>
      </motion.div>
      {/* </div> */}
    </div>
  )
}

export default LogoGimmick
