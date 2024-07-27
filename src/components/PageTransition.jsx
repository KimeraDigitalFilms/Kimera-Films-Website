import React from 'react'
import { motion } from 'framer-motion'

function PageTransition(OGComponent) {
  return () => (
    <>
      <OGComponent />
      <motion.div
        className="fixed left-0 top-0 z-[1000] flex h-screen w-full origin-bottom items-center justify-center bg-black"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      ></motion.div>
      <motion.div
        className="fixed left-0 top-0 z-[1000] flex h-screen w-full origin-top items-center justify-center bg-black"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1 className="text-5xl text-white">
          {
            ['GFG_1', 'GeeksForGeeks', 'Geeks', 'Computer Science Portal'][
              Math.floor(
                Math.random() *
                  ['GFG_1', 'GeeksForGeeks', 'Geeks', 'Computer Science Portal']
                    .length
              )
            ]
          }
        </h1>
      </motion.div>
    </>
  )
}

export default PageTransition
