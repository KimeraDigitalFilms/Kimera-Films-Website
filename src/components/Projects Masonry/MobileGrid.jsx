import React from "react"
import { motion, useTransform, useScroll } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import list from "./list.js"
import { useWindowSize } from "../../utils/useWindowSize.jsx"

function MobileGrid({ setSelected }) {
  return (
    <>
      <HorizontalScrollCarousel setSelected={setSelected} />
    </>
  )
}

export default MobileGrid

const HorizontalScrollCarousel = ({ setSelected }) => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  const { width } = useWindowSize()
  const [scroll, setScroll] = useState(width >= 517 ? "-95%" : "-98%")
  useEffect(() => {
    setScroll(width >= 517 ? "-95%" : "-98%")
  }, [width])
  const x = useTransform(scrollYProgress, [0, 1], ["0%", scroll])

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex h-2/3 gap-x-10">
          {list.map((card, i) => {
            return (
              <Card
                card={card}
                key={i}
                ind={i}
                item={list[i]}
                setSelected={setSelected}
              />
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

const Card = ({ card, item, setSelected, ind }) => {
  return (
    <div
      key={card.id}
      className={`${ind % 2 ? "self-end" : "self-start"} relative w-[300px] overflow-hidden`}
    >
      <motion.img
        loading="lazy"
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          setSelected(item)
        }}
        className="mx-auto inline w-fit overflow-hidden hover:cursor-pointer"
        src={item.poster}
        alt={item.title}
      />
    </div>
  )
}
