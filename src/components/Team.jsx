import React from "react"
import { motion, easeOut } from "framer-motion"
import Distortion from "./Distortion/Distortion.jsx"
// import Polaroid from "./Polaroid";
import { FiCloudLightning } from "react-icons/fi"
import Heading from "./Heading.jsx"

function Team() {
  return (
    <div className="mt-24">
      {/* <div className="overflow-hidden">
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
          className="font-weight text-center font-AvenirBook text-7xl text-secondary1"
        >
          Our Team
        </motion.h1>
      </div> */}
      <Heading text={"OUR TEAM"} />

      <div className="mt-20 flex flex-col gap-y-[250px]">
        <div className="flex w-full flex-wrap items-center justify-evenly gap-y-14">
          <Card
            src={"/Hassaan_1x1.webp"}
            name={"Hassaan Ahmed"}
            desig={"Head of Content Development"}
            content={
              "The creative force behind Kimera’s storytelling magic, Hassaan shapes brand narratives, guiding projects from concept to completion with a keen eye for detail. His expertise in crafting compelling scripts and overseeing creative direction ensures that every project not only aligns with the vision but also captivates and resonates with our audience. Hassaan’s leadership keeps Kimera’s creative spirit alive, turning ideas into impactful, cohesive stories."
            }
          />
          <Card
            name={"Tushar Singh"}
            desig={"Head of Production & Marketing"}
            src={"/Tushar_1x1.webp"}
            content={
              "The orchestrator of Kimera’s operational excellence, Tushar expertly balances strategic planning with seamless execution across marketing, production, and sales. His leadership ensures that every project aligns with Kimera’s vision while maintaining smooth and efficient operations. Tushar's ability to manage complex logistics and large teams transforms creative concepts into successful, well-executed initiatives."
            }
          />

          <Card
            name={"Bashar Parvez"}
            desig={"Head of Post-Production"}
            src={"/Bashar_1x1.webp"}
            content={
              "The catalyst for Kimera’s technological brilliance, Bashar blends technical mastery with artistic insight, driving innovation in post-production, animation, VFX, SFX & brand design. His expertise turns creative ideas into cutting-edge realities, ensuring that every project leverages the latest advancements to achieve high-impact results. Bashar’s role bridges technology and creativity, pushing the boundaries of what’s possible."
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
  )
}

export default Team

const Card = ({ content, name, desig, src }) => {
  return (
    <div className="group relative w-full max-w-sm overflow-hidden rounded-lg border-[0.3px] border-secondary1 bg-primaryBg p-0.5 shadow-xl shadow-shadow transition-all duration-500">
      <div className="relative z-10 flex flex-col items-center justify-center overflow-hidden rounded-[7px] bg-primaryBg p-8 transition-colors duration-500">
        {/* <FiCloudLightning className="relative z-10 mb-10 mt-2 rounded-full border-2 border-indigo-500 bg-slate-900 p-4 text-7xl text-indigo-500" /> */}
        <Distortion
          containerId={name.split()[0]}
          imageId={name.split()[0] + "Img"}
          src={src}
        />

        <h2 className="font-NeueMontreal relative z-10 mb-1 mt-3 w-full text-center text-3xl font-bold text-primary">
          {name}
        </h2>
        <h3 className="font-NeueMontreal text-secondary2 relative z-10 mb-3 w-full text-center text-lg font-semibold">
          {desig}
        </h3>
        <p className="font-InclusiveSans text-secondary2 relative z-10 text-center text-base">
          {content}
        </p>
      </div>
    </div>
  )
}
