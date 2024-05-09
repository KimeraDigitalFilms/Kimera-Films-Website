import React from "react";
import { motion } from "framer-motion";

function PageTransition(OGComponent) {
  return () => (
    <>
      <OGComponent />
      <motion.div
        className="fixed top-0 left-0 w-full h-screen bg-black origin-bottom flex justify-center items-center z-[2000]"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      ></motion.div>
      <motion.div
        className="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-black origin-top z-[2000]"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1 className="text-white text-5xl">
          {["GFG_1", "GeeksForGeeks",
    "Geeks", "Computer Science Portal"][(Math.floor(Math.random() * ["GFG_1", "GeeksForGeeks",
    "Geeks", "Computer Science Portal"].length))]}
        </h1>
      </motion.div>
    </>
  );
}

export default PageTransition;
