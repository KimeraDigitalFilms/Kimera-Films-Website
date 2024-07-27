import React from "react";
import { motion, easeOut } from "framer-motion";
import Distortion from "./Distortion/Distortion.jsx";
// import Polaroid from "./Polaroid";
import { FiCloudLightning } from "react-icons/fi";

function Team() {
  return (
    <div className="my-24">
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
          className="font-AvenirBook font-weight text-center text-secondary1 text-7xl "
        >
          Our Team
        </motion.h1>
      </div>

      <div className="flex flex-col gap-y-[250px] mt-20">
        <div className="flex flex-wrap gap-y-14 justify-evenly items-center w-full">
          <Card
          src={'/Hassaan_1x1.webp'}
            name={"Hassaan Ahmed"}
            desig={"Head of Content Development"}
            content={
              "A self-trained dual blade wielder, trained in the arts of Writing and Direction. Hassaan is responsible for ideation, conceptualisation, and spearheading the process of pre-production while overwatching parts of production and post production."
            }
          />
          <Card
            name={"Tushar Singh"}
            desig={"Head of Production & Marketing"}
            src={'/Tushar_1x1.webp'}
            content={
              "A true magician with people. From marketing to casting to overseeing enormous crews, he makes it all look effortless. With years of experience both in front and behind the camera, Tushar is Leading the way for Kimera’s marketing, Production and Sales."
            }
          />

          <Card
            name={"Bashar Parvez"}
            desig={"Head of Post-Production"}
            src={'/Bashar_1x1.webp'}
            content={
              "The powerhouse cyborg of Kimera. The machines are sentient beings but with his superior technical prowess and knowledge under his rule they listen to him. Bashar has honed and mastered all the domains of Post Production, be it Editing, Animation or SFX."
            }
          />
          {/* <div>
            <Distortion
              containerId={"Hassaan"}
              imageId={"HassaanImg"}
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZCldKgmO2Hs0UGk6nRClAjATKoF9x2liYYA&usqp=CAU"
              }
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
            A true magician with people. From marketing to casting to overseeing
            enormous crews, he makes it all look effortless. With years of
            experience both in front and behind the camera, Tushar is Leading
            the way for Kimera’s marketing, Production and Sales.
          </div>

          <Distortion
            containerId={"Tushar"}
            imageId={"TusharImg"}
            src={
              "https://hips.hearstapps.com/hmg-prod/images/robert-downey-jr-attends-the-96th-oscars-nominees-luncheon-news-photo-1708713684.jpg"
            }
          />
        </div>

        <div className="flex flex-nowrap justify-evenly items-center gap-x-10 w-full">
          <Distortion
            containerId={"Bashar"}
            imageId={"BasharImg"}
            src={
              "https://akm-img-a-in.tosshub.com/indiatoday/images/story/media_bank/202309/elon-musk-252648408-16x9.jpg?VersionId=9KYZpqpoY3WvH8eVZg54mmkpTGfvPCWj&size=690:388"
            }
          />

          <div className="font-Dancing text-secondary1 w-1/3 text-3xl">
            The powerhouse cyborg of Kimera. The machines are sentient beings
            but with his superior technical prowess and knowledge under his rule
            they listen to him. Bashar has honed and mastered all the domains of
            Post Production, be it Editing, Animation or SFX.
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Team;


const Card = ({ content, name, desig,src }) => {
  return (
    <div className="group relative  w-full max-w-sm overflow-hidden rounded-lg bg-primaryFg p-0.5 transition-all duration-500 border border-secondary1 ">
      <div className="relative z-10 flex flex-col items-center justify-center overflow-hidden rounded-[7px]  p-8 transition-colors duration-500 bg-primaryFg ">
        {/* <FiCloudLightning className="relative z-10 mb-10 mt-2 rounded-full border-2 border-indigo-500 bg-slate-900 p-4 text-7xl text-indigo-500" /> */}
        <Distortion
          containerId={name.split()[0]}
          imageId={name.split()[0] + "Img"}
          src={
            src
          }
        />

        <h2 className="relative z-10 mb-3 mt-3 w-full text-3xl font-bold text-center text-primary">
          {name}
        </h2>
        <h3 className="relative z-10 mb-3 w-full text-lg text-center  font-semibold text-secondary1">
          {desig}
        </h3>
        <p className="relative z-10 text-base text-secondary1 font-thin text-center">
          {content}
        </p>
      </div>
    </div>
  );
};
