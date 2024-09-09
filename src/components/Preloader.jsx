import React, { useContext, useEffect } from "react"
import { useState } from "react"
import Logo from "./Logo/Logo"
import { motion, useAnimate } from "framer-motion"
import colorContext from "../context/ColorContext"

function Preloader({ setVis }) {
  // const [ready, setReady] = useState(0);

  const { loadColor } = useContext(colorContext)

  const [scope, animate] = useAnimate()
  const [scope2, animate2] = useAnimate()

  const [enter, setEnter] = useState(false)

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }
  async function loaderAnimate() {
    await animate(
      scope.current,
      { scaleX: 0 },
      { duration: 0.01, type: "spring" }
    )
    // console.log(ready);
    await animate(scope.current, {
      background: loadColor,
      boxShadow: `0px 0px 30px 4px ${loadColor}`,
    })
    await animate(
      scope.current,
      { scaleX: 0.4 },
      { duration: 1.5, type: "spring", ease: "easeOut" }
    )
    await animate(
      scope.current,
      { scaleX: 0.78 },
      { duration: 1, type: "spring", ease: "easeInOut" }
    )
    await animate(
      scope.current,
      { scaleX: 1 },
      { duration: 1, type: "spring", delay: 0.5 }
    )
    setEnter(true)
    revealAnimate()
    sessionStorage.setItem("preloaded", "true")
  }

  //remove preloader towards top
  const revealAnimate = async () => {
    await animate2(
      scope2.current,
      {
        translateY: "-100%",
      },
      { duration: 0.4, ease: "easeIn", delay: 0.3 }
    )
    setVis(true)
  }

  useEffect(() => {
    // console.log(document.readyState)
    // if (ready === 1) {
    //   setTimeout(() => {
    //     loaderAnimate2();
    //   }, 2400);
    //   // console.log(ready)
    // } else {
    //   loaderAnimate1();
    // }
    // loaderAnimate1()
    // setTimeout(() => {
    //   loaderAnimate2()
    // }, 2400)
    loaderAnimate()
  }, [])

  return (
    <motion.div
      ref={scope2}
      id="preloader"
      className={`screen-padding absolute top-0 z-[2000] flex h-screen w-screen items-center justify-center bg-black`}
    >
      <motion.div
        variants={variants}
        animate={enter ? "hidden" : "visible"}
        transition={{ duration: 0.4 }}
        className="flex h-fit w-full flex-col flex-nowrap items-center justify-center gap-x-4 gap-y-5 [@media(min-width:1080px)]:flex-row"
      >
        <motion.div
          initial={{ rotate: "0deg" }}
          animate={{ rotate: "360deg" }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="w-20 rounded-full p-2"
        >
          <Logo src={"/logo.svg"} style="w-full bg-primary" />
        </motion.div>

        <div
          id="parent_progress"
          className="h-[1px] w-[700px] overflow-visible rounded-lg bg-primaryFg"
        >
          <motion.div
            id="progress"
            ref={scope}
            className="flex h-full w-full origin-left rounded-lg bg-transparent"
          ></motion.div>
        </div>
        <Text />
      </motion.div>
    </motion.div>
  )
}

export default Preloader

const Text = () => {
  const [scope, animate] = useAnimate()

  async function MoveUp() {
    const sequence = [
      [scope.current, { y: -40 }, { duration: 0.7, ease: "backInOut" }],
      [scope.current, { y: -80 }, { duration: 0.7, ease: "backInOut" }],
      [scope.current, { y: -120 }, { duration: 0.7, ease: "backInOut" }],
      [scope.current, { y: -160 }, { duration: 0.7, ease: "backInOut" }],
    ]
    await animate(sequence, { repeat: Infinity, repeatType: "loop" })
  }
  useEffect(() => {
    MoveUp()
  }, [])
  return (
    <div className="block overflow-hidden">
      <motion.div ref={scope} className="h-[40px] text-white">
        <span className="flex h-[40px] items-center text-3xl [@media(max-width:1079px)]:justify-center">
          Brand Design
        </span>
        <span className="flex h-[40px] items-center text-3xl [@media(max-width:1079px)]:justify-center">
          Film Production
        </span>
        <span className="flex h-[41px] items-center text-3xl [@media(max-width:1079px)]:justify-center">
          Digital Marketing
        </span>
        <span className="flex h-[40px] items-center text-3xl [@media(max-width:1079px)]:justify-center">
          Animation
        </span>
        <span className="flex h-[40px] items-center text-3xl [@media(max-width:1079px)]:justify-center">
          Brand Design
        </span>
      </motion.div>
    </div>
  )
}
