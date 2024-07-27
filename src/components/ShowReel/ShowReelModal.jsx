import { AnimatePresence, motion } from "framer-motion"
import { FiAlertCircle } from "react-icons/fi"
// import { useState } from "react";

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
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            // onClick={
            //   (e) =>
            //     e.stopPropagation()
            // }
            className="relative w-[800px] cursor-default rounded-lg bg-primary p-2 text-white shadow-xl"
          >
            <div className="relative z-10 h-full w-full object-cover">
              {/* <video
                preload="none"
                poster="/thumbnails/random3.png"
                loop
                autoPlay
                muted
                playsInline
                controls
                src="/videos/random3.mp4"
                className="w-full hover:cursor-pointer h-full"
              ></video> */}
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
                  // src="https://player.vimeo.com/video/938376141?h=4bb8442f8d&autoplay=1&loop=1&title=0&byline=0&muted=0&controls=1"
                  src="https://www.youtube-nocookie.com/embed/cnoM8scJZ98?si=DkhtAp6qt8s0wNrX&amp;playlist=cnoM8scJZ98&amp;controls=1&amp;autoplay=1&amp;loop=1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  // style={{ position:'relative',width: "25vw !important", height: "25vh !important",padding:0 }}
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                  }}
                  // className="w-full h-full"
                  frameBorder="0"
                  // allow="autoplay; fullscreen; picture-in-picture"
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
