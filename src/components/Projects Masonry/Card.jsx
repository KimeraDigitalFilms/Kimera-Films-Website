import React from "react";
import { motion } from "framer-motion";

function Card({ setSelected, item }) {

  

  return (
    <>
      <div className="box-content w-full   z-[50]">
        <motion.div
          // className={`flex justify-center items-center mx-auto justify-self-center place-items-center `}
        >
          {/* <motion.img
            layout
            layoutId={item.id}
       
            whileTap={{ scale: 0.95 }}
      
            onClick={() => {
              setSelected(item);
            }}
            className="mx-auto inline  w-fit overflow-hidden hover:cursor-pointer"
            src={item.img}
            alt=""
          /> */}
          <motion.video 
          muted
          loop
          
          onMouseEnter={(e)=>{
e.target.play()
          }}
          onMouseLeave={(e)=>{
            e.target.pause()
          }}
           layout
           playsInline
           layoutId={item.id}
           className="mx-auto inline w-full  overflow-hidden hover:cursor-pointer"
           whileTap={{ scale: 0.95 }}
          onClick={() => {
            setSelected(item);
          }}
          src={item.vid}/>
         
        </motion.div>
      </div>
    </>
  );
}

export default Card;
