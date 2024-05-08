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
            <div className="relative  w-full h-full object-cover">
              <video
                preload="none"
                poster="/thumbnails/random3.png"
                loop
                playsInline
                controls
                src="/videos/random3.mp4"
                className="w-full h-full"
              ></video>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ShowReelModal;
