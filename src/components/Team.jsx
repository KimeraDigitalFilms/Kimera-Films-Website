import React, { useEffect, useRef, useState } from "react"
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
        className="mt-3 w-full py-5 text-center font-FoundersGrotesk text-[150px] text-secondary1 [@media(min-width:305px)]:leading-[110px] [@media(min-width:395px)]:text-[200px] [@media(min-width:510px)]:text-[250px] [@media(min-width:510px)]:leading-[180px] [@media(min-width:685px)]:text-[350px] [@media(min-width:685px)]:leading-[230px]"
      >
        {text}
      </motion.h1>
    </>
  )
}

function Team() {
  const { width } = useWindowSize()
  return (
    <div className="mt-0 [@media(min-width:405px)]:mt-24">
      <Heading text={"OUR TEAM"} />
      <div className="screen-padding flex flex-col gap-y-[250px] [@media(min-width:405px)]:mt-20">
        {width >= 860 ? (
          <>
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
          </>
        ) : (
          <>
            <MobileCarousel />
          </>
        )}
      </div>
    </div>
  )
}

const MobileCarousel = () => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })
  const { width } = useWindowSize()
  const [scroll, setScroll] = useState(
    width >= 585
      ? "-45%"
      : width >= 433
        ? "-60%"
        : width >= 380
          ? "-65%"
          : "-70%"
  )
  useEffect(() => {
    setScroll(
      width >= 585
        ? "-45%"
        : width >= 433
          ? "-60%"
          : width >= 380
            ? "-65%"
            : "-70%"
    )
  }, [width])
  const x = useTransform(scrollYProgress, [0, 1], ["1%", scroll])

  return (
    <section ref={targetRef} className="relative h-[250vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div> */}
        <motion.div
          style={{ x }}
          className="flex flex-nowrap items-center justify-evenly gap-x-10 [@media(min-width:750px)]:gap-x-20"
        >
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
        </motion.div>
      </div>
    </section>
  )
}

export default Team

const Card = ({ content, name, desig, src }) => {
  const { width } = useWindowSize()
  return (
    <div className="group relative w-[300px] max-w-[300px] overflow-hidden rounded-lg border-[0.3px] border-secondary1 bg-primaryBg p-0.5 shadow-xl shadow-shadow transition-all duration-500 [@media(min-width:455px)]:max-w-sm [@media(min-width:670px)]:w-[350px] [@media(min-width:780px)]:w-[400px]">
      <div className="relative z-10 flex h-[580px] flex-col items-center justify-start overflow-hidden rounded-[7px] bg-primaryBg p-8 transition-colors duration-500 [@media(min-width:680px)]:h-[670px]">
        {width >= 750 ? (
          <Distortion
            containerId={name.split()[0]}
            imageId={name.split()[0] + "Img"}
            src={src}
          />
        ) : (
          <img
            src={src}
            alt="name"
            className="w-[250px] rounded-lg [@media(min-width:670px)]:w-[300px]"
            // style={{width:'300px',height:"300px"}}
          />
        )}

        <h2 className="relative z-10 mb-1 mt-3 w-full text-center font-NeueMontreal text-3xl font-bold text-primary">
          {name}
        </h2>
        <h4 className="relative z-10 mb-3 w-full text-center font-NeueMontreal text-base font-semibold text-secondary2 [@media(min-width:670px)]:text-lg">
          {desig}
        </h4>
        <p className="relative z-10 text-justify font-InclusiveSans text-xs text-secondary2 [@media(min-width:680px)]:text-sm">
          {content}
        </p>
      </div>
    </div>
  )
}
