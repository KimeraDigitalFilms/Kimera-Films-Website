import React from "react"
import GridComponent from "../components/Projects Masonry/GridComponent"
import { easeOut, motion } from "framer-motion"
import { useEffect } from "react"
import PageTransition from "../components/PageTransition"

function Projects() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" })
  }, [])
  return (
    <div className="flex w-full flex-col">
      <div className="mb-20 mt-24 flex h-[80vh] w-full flex-nowrap items-center justify-around [@media(max-width:600px)]:flex-col-reverse">
        <div className="flex w-1/3 flex-col items-start justify-center gap-y-3 [@media(max-width:600px)]:items-center">
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2, duration: 0.4, ease: easeOut }}
              style={{
                WebkitUserSelect: "none",
                msUserSelect: "none",
                userSelect: "none",
              }}
              className="font-weight font-serif text-5xl text-secondary1 [@media(min-width:905px)]:text-7xl"
            >
              Creative,
            </motion.h1>
          </div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.4, duration: 0.4, ease: easeOut }}
              style={{
                WebkitUserSelect: "none",
                msUserSelect: "none",
                userSelect: "none",
              }}
              className="font-weight font-serif text-5xl text-secondary1 [@media(min-width:905px)]:text-7xl"
            >
              Aesthetic,
            </motion.h1>
          </div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.6, duration: 0.4, ease: easeOut }}
              style={{
                WebkitUserSelect: "none",
                msUserSelect: "none",
                userSelect: "none",
              }}
              className="font-weight pb-1 font-serif text-5xl text-secondary1 [@media(min-width:905px)]:text-7xl"
            >
              Impactful.
            </motion.h1>
          </div>
        </div>

        <video
          src="/Gallery.webm"
          autoPlay
          muted
          loop
          className="w-[200px] [@media(max-width:600px)]:w-[300px] [@media(min-width:640px)]:w-[300px] [@media(min-width:905px)]:w-[400px]"
        />
      </div>

      <GridComponent />
    </div>
  )
}

const WrappedProjects = PageTransition(Projects)

export default WrappedProjects
