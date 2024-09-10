import React, { useRef, useState,useEffect } from "react"
import Logo from "../Logo/Logo"
import { useScroll, motion, useTransform, easeOut } from "framer-motion"
import { useWindowSize } from "../../utils/useWindowSize"
import "./LogoGimmick.css"

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

  const [mobile, setMobile] = useState(window.innerWidth < 700 ? 1 : 0)

  useEffect(() => {
    setMobile(window.innerWidth < 700 ? 1 : 0)
  }, [window.innerWidth])

  // const { width } = useWindowSize()
  return (
    <>
      {!mobile && (
        <div
          id="logoGimmick"
          ref={ref}
          className="relative top-[-60px] h-[150vh] [@media(min-width:1190px)]:mb-[100px] [@media(min-width:1190px)]:h-[200vh]"
        >
          <motion.div className="sticky top-0 h-screen overflow-hidden transition-all delay-0 ease-linear">
            <motion.h1
              //text
              id="gimmickText"
              transition={{ ease: "linear", delay: 0 }}
              style={{ translateX: textX }}
              className="absolute left-[5%] top-[40%] w-full font-RecoletaBold tracking-wider text-secondary2 transition-transform delay-0 ease-linear "
            >
              Where Creativity Converges,
              <br /> Boundaries Dissolve.
            </motion.h1>
            <motion.div
              transition={{ ease: "linear", delay: 0 }}
              style={{ scale, rotate, translateX }}
              className="mt-10 transition-transform delay-0 ease-linear"
            >
              <Logo
                id={"gimmickLogo"}
                src={"/logo.svg"}
                style={"bg-primary ml-10 mt-20"}
              />{" "}
              {/*logo */}
            </motion.div>
          </motion.div>
          {/* </div> */}
        </div>
      )}
    </>
  )
}

export default LogoGimmick
