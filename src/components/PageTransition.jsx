import React from "react"
import { motion } from "framer-motion"

function PageTransition(OGComponent) {
  return () => (
    <>
      <OGComponent />
      <motion.div
        className="fixed left-0 top-0 z-[1000] flex h-screen w-full origin-bottom items-center justify-center bg-black"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      ></motion.div>
      <motion.div
        className="fixed left-0 top-0 z-[1000] flex h-screen w-full origin-top items-center justify-center bg-black"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1 className="w-5/6 text-center text-5xl text-white">
          {
            [
              "Here's looking at you, kid.",
              "Branding is the art of differentiation.",
              "You can't handle the truth!",
              "To infinity and beyond!",
              "An idea can turn to dust or magic, depending on the talent that rubs against it.",
              "You had me at 'hello'.",
              "Marketing without data is like driving with your eyes closed.",
              "Picture abhi baki hai mere dost!",
              "Creativity is the most valuable asset, because it is the rarest.",
              "Cinema, movies, and magic have always been closely associated. The very earliest people who made film were magicians.",
              "It is a matter of what's in the frame and what's out.",
            ][Math.floor(Math.random() * 11)]
          }
        </h1>
      </motion.div>
    </>
  )
}

export default PageTransition
