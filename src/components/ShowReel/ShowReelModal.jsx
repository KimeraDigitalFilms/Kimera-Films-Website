import { AnimatePresence, motion } from "framer-motion"

const ShowReelModal = ({ isOpen, setIsOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            document.body.style.overflowY = "scroll"
            setIsOpen(false)
          }}
          className="fixed inset-0 z-50 grid cursor-pointer place-items-center overflow-x-hidden overflow-y-scroll bg-slate-900/20 p-8 backdrop-blur-xl"
          data-lenis-prevent
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            className="relative w-full max-w-[1000px] cursor-default rounded-lg bg-primary p-2 text-white shadow-xl"
          >
            <div className="relative z-10 h-full w-full object-cover">
              <div
                style={{
                  position: "relative",
                  paddingLeft: "50%",
                  paddingBottom: "35%",
                  paddingTop: "35%",
                  paddingRight: "50%",
                  width: "100%",
                  height: "100%",
                  overflowX: "hidden",
                }}
                className=""
              >
                <iframe
                  title="reelModal"
                  loading="lazy"
                  src="https://www.youtube-nocookie.com/embed/co3oF61Lm6k?si=obnDMZmXGPns34Tj&amp;playlist=co3oF61Lm6k&amp;mute=0&amp;controls=1&amp;autoplay=1&amp;loop=1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                  }}
                  frameBorder="0"
                  webkitallowfullscreen
                  mozallowfullscreen
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ShowReelModal
