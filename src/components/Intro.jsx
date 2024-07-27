import React from 'react'
import { useRef } from 'react'
import Spotlight from './Spotlight'
import { useScroll, motion, useTransform } from 'framer-motion'

function Intro() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })
  const translateY = useTransform(scrollYProgress, [0.45, 1], ['400px', '0px'])

  return (
    <div
      ref={ref}
      className="screen-padding my-20 flex h-[450px] w-full flex-nowrap items-center justify-evenly"
    >
      <div className="w-[500px]">
        <Spotlight
          content={
            'Lorem ipsum dolor sit, amet consectetur adipis. Eveniet, aliquid!'
          }
          style={'font-semibold text-6xl font-Oswald'}
        />
      </div>
      <div className="flex h-full w-1/3 flex-nowrap justify-center gap-x-14 rounded-lg">
        <div className="shadow-primary-dark/30 relative h-[400px] w-[350px] place-self-start overflow-hidden rounded-lg shadow-xl">
          <motion.div
            style={{ translateY }}
            className="bg-foreground absolute left-0 top-0 h-full w-full"
          ></motion.div>
          <img
            src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
            alt=""
            className="bg-foreground shadow-primary-dark/30 h-[400px] w-[350px] place-self-end rounded-lg object-cover shadow-xl"
          />
        </div>

        <div className="bg-foreground shadow-primary-dark/30 relative h-[400px] w-[350px] place-self-end overflow-hidden rounded-lg shadow-xl">
          <motion.div
            style={{ translateY }}
            className="bg-foreground absolute left-0 top-0 h-full w-full"
          ></motion.div>
          <img
            src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg"
            alt=""
            className="shadow-primary-dark/30 h-[400px] w-[350px] place-self-end rounded-lg object-cover shadow-xl"
          />
        </div>
      </div>
    </div>
  )
}

export default Intro
