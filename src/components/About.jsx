import React from "react"
import { motion } from "framer-motion"
import Heading from "./Heading"
function About() {
  return (
    <div className="screen-padding mx-auto mb-36 w-11/12">
      {/* <div className="flex flex-nowrap items-center justify-center">
        <div className="pointer-events-none overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.4, ease: "easeOut" }}
            style={{
              WebkitUserSelect: "none",
              msUserSelect: "none",
              userSelect: "none",
            }}
            className="font-weight text-left font-AvenirBook text-7xl text-secondary1"
          >
            About Us
          </motion.h1>
      </div>
        </div> */}
      <Heading text={"ABOUT US"} />

      <div className="text-secondary2 font-NeueMontrealLight mt-4 w-full text-justify p-3 text-2xl">
        Welcome to KIMERA, where creativity is our DNA. We are a living,
        breathing fusion of artistic minds. Just like the creature from Greek
        mythology, Kimera represents the convergence of diverse talents —
        directors, designers, analysts, Vfx artists, writers, web developers,
        growth strategists, cinematographers, sound artists, performance
        marketers and more.
        {/* <br /> */}
        {/* <br/><br/> */}
        And like the creature it embodies, Kimera only plans to keep growing its
        heads.
      </div>

      <div className="text-secondary2 text-justify font-NeueMontrealLight flex w-full flex-nowrap gap-x-7 p-3 text-2xl">
        <div className="w-1/2">
          <video src="/About_Us.webm" loop muted autoPlay className=""></video>
        </div>
        <p className="w-1/2">
          At Kimera, we boldly defy creative norms and celebrate the art of
          finesse. We're the preferred choice for leading brands because we
          understand their language while continuously pushing boundaries.{" "}
          <br />
          <br />
          Our process begins with uncovering the essence of your idea or brand,
          crafting it into a compelling and strategic narrative, and expertly
          executing your brand vision. Each step of this journey is fueled by
          passion, innovation, and an unwavering commitment to distinction.
        </p>
      </div>
    </div>
  )
}

export default About
