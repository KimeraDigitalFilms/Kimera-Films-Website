import React from 'react'
import { useRef } from "react";
import Reveal from "./Reveal";
import { AnimatePresence, motion } from "framer-motion";

function Text_Scroller({list}) {
    const refP=useRef(null)

  return (
    <AnimatePresence>

   <motion.div
             ref={refP}
             variants={{
                 open: {
                     opacity: 1,
                    },
                    closed: {
                        opacity: 0,
                    },
                }}
                initial="closed"
                animate="open"
                exit="closed"
                transition={{ duration: 0.1 }}
                className="container w-[500px] relative flex flex-col h-[450px] justify-start items-start overflow-scroll text-white"
                >
             <div className="py-[40%]">
              {list.map((phrase, id) => {
                  return (
                      <Reveal refP={refP} content={phrase} key={id}/>
                    );
                })}
                </div>
            </motion.div>
                </AnimatePresence>
  )
}

export default Text_Scroller
