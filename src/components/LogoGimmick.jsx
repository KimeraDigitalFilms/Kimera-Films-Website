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
      className="relative top-[-60px] [@media(min-width:1190px)]:mb-[100px] h-[150vh] [@media(min-width:1190px)]:h-[200vh]"
    >
      {/* <div className="w-full h-full absolute  bg-blue-500"> */}
      <motion.div className="sticky top-0 h-screen overflow-hidden transition-all delay-0 ease-linear">
        <motion.h1 //text
          transition={{ ease: "linear", delay: 0 }}
          style={{ translateX: textX }}
          className="absolute top-[40%] [@media(min-width:1190px)]:top-[50%] w-full font-RecoletaBold text-4xl [@media(min-width:1005px)]:text-5xl tracking-wider text-secondary2 transition-transform delay-0 ease-linear [@media(min-width:1280px)]:text-6xl"
        >
          Where Creativity Converges,
          <br /> Boundaries Dissolve.
        </motion.h1>
        <motion.div
          transition={{ ease: "linear", delay: 0 }}
          style={{ scale, rotate, translateX }}
          className=" transition-transform delay-0 ease-linear"
        >
          <Logo
            src={"/logo.svg"}
            style={
              "h-[500px] [@media(min-width:1190px)]:h-[650px] bg-primary ml-10 mt-10"
            }
          />{" "}
          {/*logo */}
        </motion.div>
      </motion.div>
      {/* </div> */}
    </div>
  )
}

export default LogoGimmick
