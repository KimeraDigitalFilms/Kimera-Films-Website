import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

function Card({ setSelected, item, style }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 0.3], [0, 1])

  return (
    <>
      <div className={`box-content w-full ${style}`}>
        <motion.div
          style={{ scale }}
          transition={{ ease: "easeOut", type: "spring" }}
          ref={ref}
          className={`mx-auto flex place-items-center items-center justify-center justify-self-center`}
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
        </motion.div>
      </div>
    </>
  )
}

export default Card
