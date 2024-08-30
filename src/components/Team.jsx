import React, { useRef } from "react"
import Distortion from "./Distortion/Distortion.jsx"
import { motion, useScroll, useTransform } from "framer-motion"
import { useWindowSize } from "../utils/useWindowSize.jsx"

function Heading({ text }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`start end`, `end start`],
  })
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.7, 1],
    [0.1, 1, 1, 0.1]
  )
  return (
    <>
      <motion.h1
        style={{ opacity }}
        ref={ref}
        className="font-FoundersGrotesk mt-3 w-full py-5 text-center text-[200px] leading-[150px] text-secondary1 min-[510px]:text-[250px] min-[510px]:leading-[180px] min-[685px]:text-[350px] min-[685px]:leading-[230px]"
      >
        {text}
      </motion.h1>
    </>
  )
}

function Team() {
  return (
    <div className="mt-24">
      <Heading text={"OUR TEAM"} />
      <div className="screen-padding mt-20 flex flex-col gap-y-[250px]">
        <div className="flex w-full flex-wrap items-center justify-evenly gap-x-7 gap-y-14">
          <Card
            src={"/Hassaan_1x1.webp"}
            name={"Hassaan Ahmed"}
            desig={"Head of Content Development"}
            content={
              "The creative force behind Kimera’s storytelling magic, Hassaan shapes brand narratives, guiding projects from concept to completion with a keen eye for detail. His expertise in crafting compelling scripts and overseeing creative direction ensures that every project not only aligns with the vision but also captivates and resonates with our audience. Hassaan’s leadership keeps Kimera’s creative spirit alive, turning ideas into impactful, cohesive stories."
            }
          />
          <Card
            name={"Tushar Singh"}
            desig={"Head of Production & Marketing"}
            src={"/Tushar_1x1.webp"}
            content={
              "The orchestrator of Kimera’s operational excellence, Tushar expertly balances strategic planning with seamless execution across marketing, production, and sales. His leadership ensures that every project aligns with Kimera’s vision while maintaining smooth and efficient operations. Tushar's ability to manage complex logistics and large teams transforms creative concepts into successful, well-executed initiatives that exceed expectations."
            }
          />

          <Card
            name={"Bashar Parvez"}
            desig={"Head of Post-Production"}
            src={"/Bashar_1x1.webp"}
            content={
              "The catalyst for Kimera’s technological brilliance, Bashar blends technical mastery with artistic insight, driving innovation in post-production, animation, VFX, SFX & brand design. His expertise turns creative ideas into cutting-edge realities, ensuring that every project leverages the latest advancements to achieve high-impact results. Bashar’s role bridges technology and creativity, pushing the boundaries of what’s possible in the most remarkable ways."
            }
          />
        </div>
      </div>
    </div>
  )
}

export default Team

const Card = ({ content, name, desig, src }) => {
  const { width } = useWindowSize()
  return (
    <div className="group relative w-full max-w-sm overflow-hidden rounded-lg border-[0.3px] border-secondary1 bg-primaryBg p-0.5 shadow-xl shadow-shadow transition-all duration-500">
      <div className="relative z-10 flex h-[670px] flex-col items-center justify-start overflow-hidden rounded-[7px] bg-primaryBg p-8 transition-colors duration-500 min-[796px]:h-[730px]">
        {width >= 750 ? (
          <Distortion
            containerId={name.split()[0]}
            imageId={name.split()[0] + "Img"}
            src={src}
          />
        ) : (
          <img src={src} alt="name" className="object-contain" />
        )}

        <h2 className="font-NeueMontreal relative z-10 mb-1 mt-3 w-full text-center text-3xl font-bold text-primary">
          {name}
        </h2>
        <h3 className="font-NeueMontreal text-secondary2 relative z-10 mb-3 w-full text-center text-lg font-semibold">
          {desig}
        </h3>
        <p className="font-InclusiveSans text-secondary2 relative z-10 text-justify text-sm min-[796px]:text-base">
          {content}
        </p>
      </div>
    </div>
  )
}
