import React from 'react'
import ModelElement from './ModelElement'
import { Canvas } from '@react-three/fiber'
import { motion,easeOut } from 'framer-motion'
function About() {
  return (
    <div className='screen-padding mb-44'>
   <div className='flex flex-nowrap justify-center items-center '>
   <Canvas className='about3d' 
   >
        <ModelElement/>
      </Canvas>
       <div className="overflow-hidden pointer-events-none">
        <motion.h1
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.4, ease: easeOut }}
          style={{
            WebkitUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
          }}
          className="font-AvenirBook font-weight text-left text-secondary1 text-7xl "
          >
          About Us
        </motion.h1>
      </div>
      </div>
    <div className='flex flex-col text-secondary1 font-thin text-2xl'> 
    Welcome to KIMERA, where creativity is our DNA. We are a living, breathing fusion of artistic minds. Just like the creature from Greek mythology, Kimera represents the convergence of diverse talents— directors, designers, analysts, Vfx artists, writers, web developers, growth strategists, cinematographers, sound artists, performance marketers and more.
    <br/>
     {/* <br/><br/> */}
And like the creature it embodies, Kimera only plans to keep growing its heads.

<div className='flex flex-nowrap items-center mt-10'>
<div className='text-secondary1 w-3/4 text-2xl font-thin'>
At Kimera, we boldly defy creative norms and celebrate the art of finesse. We're the preferred choice for leading brands because we understand their language while continuously pushing boundaries.
<br/><br/>
Our process begins with uncovering the essence of your idea or brand, crafting it into a compelling and strategic narrative, and expertly executing your brand vision. Each step of this journey is fueled by passion, innovation, and an unwavering commitment to distinction.
</div>
<Canvas className='about3d' 
   >
        <ModelElement/>
      </Canvas>
</div>
    </div>
    </div>
  )
}

export default About
