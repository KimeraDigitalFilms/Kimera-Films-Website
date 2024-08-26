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
    <div  className="flex w-full flex-col ">
      <div className=" mb-20 mt-24 flex h-[80vh] w-full flex-nowrap items-center justify-around">
        <div className="screen-padding flex w-1/3 flex-col items-start justify-center gap-y-3">
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
              className="font-weight font-serif text-7xl text-secondary1"
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
              className="font-weight font-serif text-7xl text-secondary1"
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
              className="font-weight pb-1 font-serif text-7xl text-secondary1"
            >
              Impactful.
            </motion.h1>
          </div>
        </div>
        {/* <div className="w-1/2 flex justify-center items-center">
          <motion.img
            initial={{ x: -200, y: -70, opacity: 0 }}
            whileInView={{ x: -200, y: -100, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2, ease: easeIn }}
            viewport={{ once: true }}
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
            alt=""
            className="w-[350px] object-cover absolute rounded-lg h-[200px]"
          />
          <motion.img
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 50, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.8, ease: easeIn }}
            viewport={{ once: true }}
            src="https://www.adobe.com/acrobat/hub/media_173d13651460eb7e12c0ef4cf8410e0960a20f0ee.jpeg?width=750&format=jpeg&optimize=medium "
            alt=""
            className="w-[400px] absolute object-cover rounded-lg h-[300px] z-10"
          />
          <motion.img
            initial={{ x: 200, y: -70, opacity: 0 }}
            whileInView={{ x: 200, y: -100, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6, ease: easeIn }}
            viewport={{ once: true }}
            src="https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg"
            alt=""
            className="w-[350px] object-cover absolute rounded-lg h-[200px]"
          />
        </div> */}
        <video src="/Gallery.webm" autoPlay muted loop className="w-[400px]" />
      </div>

      <GridComponent />
      {/* <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        style={{
          WebkitUserSelect: "none",
          msUserSelect: "none",
          userSelect: "none",
        }}
        className=" text-center text-9xl w-full h-fit text-primary font-Dancing "
      >
        ~ the end ~
      </motion.h1> */}
    </div>
  )
}

const WrappedProjects = PageTransition(Projects)

export default WrappedProjects

// export default Projects;
