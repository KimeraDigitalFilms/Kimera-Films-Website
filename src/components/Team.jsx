import React from "react";
import { motion, easeOut } from "framer-motion";
import Polaroid from "./Polaroid";

function Team() {
  return (
    <div className="mt-24">
      <div className="overflow-hidden">
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
          className="font-serif font-weight text-center text-secondary1 text-7xl "
        >
          Our Team
        </motion.h1>
      </div>
      <div className="flex flex-col gap-y-[250px] mt-20">
        <div className="flex flex-nowrap justify-evenly items-center gap-x-10 w-full">
          <div className="">
            <Polaroid
              name={"Hassan Ahmed"}
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZCldKgmO2Hs0UGk6nRClAjATKoF9x2liYYA&usqp=CAU"
              }
              desig={"Head of Content Development"}
            />
          </div>
          <div className="font-Dancing text-secondary1 w-1/3 text-3xl">
            A self-trained dual blade wielder, trained in the arts of Writing
            and Direction. Hassaan is responsible for ideation,
            conceptualisation, and spearheading the process of pre-production
            while overwatching parts of production and post production.
          </div>
        </div>
        <div className="flex flex-nowrap justify-evenly items-center gap-x-10 w-full">
          
          <div className="font-Dancing text-secondary1 w-1/3 text-3xl">
          A true magician with people. From marketing to casting to overseeing enormous crews, he makes it all look effortless. With years of experience both in front and behind the camera, Tushar is Leading the way for Kimera’s marketing, Production and Sales.
          </div>

            <Polaroid
              name={"Tushar Singh"}
              src={
                "https://cdn.britannica.com/05/187505-050-6BB9F835/Benedict-Cumberbatch-2014.jpg"
              }
              desig={"Head of Production & Marketing"}
            />
    
        </div>
        <div className="flex flex-nowrap justify-evenly items-center gap-x-10 w-full">
          <div className="">
            <Polaroid
              name={"Bashar Parvez"}
              src={
                "https://akm-img-a-in.tosshub.com/indiatoday/images/story/media_bank/202309/elon-musk-252648408-16x9.jpg?VersionId=9KYZpqpoY3WvH8eVZg54mmkpTGfvPCWj&size=690:388"
              }
              desig={"Head of Post-Production"}
            />
          </div>
          <div className="font-Dancing text-secondary1 w-1/3 text-3xl">
            The powerhouse cyborg of Kimera. The machines are sentient beings but with his superior technical prowess and knowledge under his rule they listen to him. Bashar has honed and mastered all the domains of Post Production, be it Editing, Animation or SFX.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
