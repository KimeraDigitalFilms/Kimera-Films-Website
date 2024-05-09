import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";
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
            document.body.style.overflow = "scroll";
            setIsOpen(false);
          }}
          className="bg-slate-900/20 backdrop-blur-xl p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className=" text-white p-2 bg-primary
             rounded-lg w-[800px] shadow-xl cursor-default relative "
          >
            <div className="relative z-10 w-full h-full object-cover">
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
              <div style={{position:'relative',paddingLeft:'50%', paddingBottom:'35%',paddingTop:'35%',paddingRight:'50%', width: "25vw !important", height: "25vh !important",overflowX:'hidden' }}
          className="-z-10"
          >
          <iframe
          id="reel"
            src="https://player.vimeo.com/video/938376141?h=4bb8442f8d&autoplay=1&loop=1&title=0&byline=0&muted=0&controls=1"
            // style={{ position:'relative',width: "25vw !important", height: "25vh !important",padding:0 }}
            style={{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}}
            // className="w-full h-full"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
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
  );
};

export default ShowReelModal;
