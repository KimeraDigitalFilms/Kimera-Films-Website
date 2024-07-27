// import { FiBarChart, FiBell, FiDollarSign, FiPlay } from "react-icons/fi";
import { AnimatePresence, delay, motion, easeOut } from "framer-motion"
import { useWindowSize } from "./useWindowSize"
import { useEffect, useState } from "react"
import "./Accordion.css"
import { useRef } from "react"
import Reveal from "./Reveal"

const Accordion = () => {
  const [open, setOpen] = useState(items[0].id)

  return (
    <section
      // style={{
      //   backgroundImage: "url(https://img.freepik.com/premium-photo/photo-abstract-line-background_931878-84749.jpg)",
      //   backgroundRepeat: 'no-repeat',
      //   backgroundPosition: 'center',
      //   backgroundSize: 'cover',
      // }}
      className="screen-padding mt-[150px]"
    >
      <div className="mb-10 overflow-hidden">
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
          What We Do
        </motion.h1>
      </div>
      <p className="mb-10 text-center text-2xl text-secondary1">
        In order to create something new, one needs to pay attention and listen
        to what makes it stand out.
      </p>
      <div className="mx-auto flex h-fit w-full max-w-7xl flex-col overflow-hidden">
        {items.map((item) => {
          return (
            <Panel
              key={item.id}
              open={open}
              setOpen={setOpen}
              id={item.id}
              // Icon={item.Icon}
              title={item.title}
              imgSrc={item.imgSrc}
              list={item.list}
              desc={item.desc}
            />
          )
        })}
      </div>
    </section>
  )
}

const Panel = ({ open, setOpen, id, title, imgSrc, list, desc }) => {
  const { width } = useWindowSize()
  const isOpen = open === id
  const refP = useRef(null)

  return (
    <>
      <button
        className="group relative flex flex-row-reverse flex-wrap items-center border-b-[1px] border-r-[1px] border-slate-200 bg-white p-3 transition-colors hover:cursor-default"
        onMouseEnter={() => setOpen(id)}
      >
        <span
          style={
            {
              //             writingMode: 'vertical-lr',
              // textOrientation: 'upright',
              // letterSpacing:'1px'
            }
          }
          className="hidden text-wrap font-Oswald text-3xl lg:block"
        >
          {title}
        </span>
        <span className="block text-xl font-light lg:hidden">{title}</span>
        {/* <div className="w-6 lg:w-full aspect-square bg-indigo-600 text-white grid place-items-center">
          <Icon />
        </div> */}
        {/* <span className="w-4 h-4 bg-white group-hover:bg-slate-50 transition-colors border-r-[1px] border-b-[1px] lg:border-b-0 lg:border-t-[1px] border-slate-200 rotate-45 absolute bottom-0 lg:bottom-[50%] right-[50%] lg:right-0 translate-y-[50%] translate-x-[50%] z-20" /> */}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              key={`panel-${id}`}
              // variants={width && width > 1024 ? panelVariants : panelVariantsSm}
              variants={panelVariantsSm}
              initial="closed"
              animate="open"
              exit="closed"
              // style={{background:'linear-gradient(135deg,rgba(255,255,255,0.1),rgba(255,255,255,0))',
              // WebkitBackdropFilter:'blur(10px)',
              //   backdropFilter:'blur(10px)'
              // }}
              className="relative h-full w-full overflow-hidden bg-gradient-to-br from-white/20 to-white/5 backdrop-blur"
            >
              <motion.div
                variants={descriptionVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="absolute bottom-9 left-0 w-full overflow-hidden px-4 py-2 text-secondary1"
              >
                <p>{desc}</p>
              </motion.div>

              <motion.div
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
                className="absolute right-14 top-14"
              >
                <motion.div
                  style={{ rotate: "45deg" }}
                  initial={{ y: 0, opacity: 1 }}
                  animate={{ y: -30, opacity: 1 }}
                  transition={{ repeat: Infinity, duration: 1, delay: 0.7 }}
                  className="absolute border-l-2 border-t-2 border-l-secondary1 border-t-secondary1 p-[7px]"
                ></motion.div>
                <motion.div
                  style={{ rotate: "45deg" }}
                  initial={{ y: 0, opacity: 1 }}
                  animate={{ y: -15, opacity: 1 }}
                  transition={{ repeat: Infinity, duration: 1, delay: 0.7 }}
                  className="absolute border-l-2 border-t-2 border-l-secondary1 border-t-secondary1 p-[7px]"
                ></motion.div>
                <motion.div className="absolute rotate-45 border-l-2 border-t-2 border-l-secondary1 border-t-secondary1 p-[7px]"></motion.div>
              </motion.div>
              <div className="flex h-full w-full flex-nowrap justify-center gap-x-10 py-10">
                <motion.div
                  variants={{
                    open: {
                      opacity: 1,
                      // visibility: "visible"
                    },
                    closed: {
                      opacity: 0,
                      // visibility: "hidden"
                    },
                  }}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="ml-10 h-[300px] w-[400px] rounded-lg"
                  style={{
                    backgroundImage: `url(${imgSrc})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></motion.div>

                <motion.div
                  ref={refP}
                  variants={{
                    open: {
                      opacity: 1,
                      // visibility: "visible"
                    },
                    closed: {
                      opacity: 0,
                      // visibility: "hidden"
                    },
                  }}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  transition={{ duration: 0.1 }}
                  className="container relative flex h-[300px] w-[550px] flex-col items-start justify-start overflow-x-hidden overflow-y-scroll text-secondary1"
                >
                  <div className="py-[25%]">
                    {list.map((phrase, id) => {
                      return <Reveal refP={refP} content={phrase} key={id} />
                    })}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Accordion

const panelVariants = {
  open: {
    width: "100%",
    height: "100%",

    // opacity:'1'
  },
  closed: {
    // opacity:'0',
    width: "0%",
    height: "100%",
  },
}

const panelVariantsSm = {
  open: {
    width: "100%",
    height: "500px",
  },
  closed: {
    width: "100%",
    height: "0px",
  },
}

const descriptionVariants = {
  open: {
    opacity: 1,
    y: "0%",
    transition: {
      delay: 0.125,
    },
  },
  closed: { opacity: 0, y: "100%" },
}
// const descriptionVariants = {
//   open: {
//     visibility: 'visible',transition: {delay:0.25}

//   },
//   closed: { visibility: 'hidden' },
// }

const items = [
  {
    id: 1,
    title: "BRAND FORGE",
    // Icon: FiDollarSign,
    imgSrc:
      "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    list: [
      "Brand Positioning",
      "Tone of Voice",
      "Naming Consultation",
      "Strategic Objectives Planning",
      " Brand Narrative Development",
      "Messaging Architecture",
      "Verbal Branding",
      "Tagline Development",

      "Creative Conceptualization",
      "Visual Identity Design",
      "Logo Design",
      "Brand Collateral Design",
      "Packaging Design",
      "Art Direction",
      "Stationery Design",
      "Signage Design",

      "Copywriting",
      "Website Copywriting",
      "Social Media Copy",
      "Brand Messaging",
    ],
    desc: "Developing exclusive brand identities and captivating stories that cut through the noise, resonating with your audience and setting you apart in the market. Our tailored approach blends creativity and strategy to define your essence and drive meaningful connections.",
  },
  {
    id: 2,
    title: "MOTION CANVAS",
    // Icon: FiPlay,
    imgSrc:
      "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
    list: [
      "AD Film Production",
      "Music Video Production",
      "Feature Films and TV Series",

      "Animation",
      "Visual Effects",

      "Editorial Production",
      "Social Media Asset Production",
      "Printing",
      "Stationary Asset Production",
      "Creative Coding",
    ],
    desc: "Breathing life into stories with captivating visuals that leave an indelible mark on viewers. Our studio is dedicated to crafting immersive experiences that ignite excitement. Let us transform your ideas into dynamic elements that spark engagement and elevate your brand's presence to new heights.",
  },
  {
    id: 3,
    title: "MARKETING MOMENTUM",
    // Icon: FiBell,
    imgSrc:
      "https://images.unsplash.com/photo-1578450671530-5b6a7c9f32a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    list: [
      "Competitor Analysis",
      "Audience Research",

      "Creative Strategy",
      "Brand Strategy Development",
      "Website Design",
      "Application Design",
      "Social Media Content",
      "Merchandise Design",
      "Search Engine Optimization",
      "Search Engine Marketing",
      "Augmented Reality Filters",

      "Advertising Campaigns",
      "Digital Marketing",
      "User Experience",
      "Email Campaigns",
      "Social Media Filters",
    ],
    desc: "Amplifying your brand's reach and impact through strategic marketing solutions designed to maximize exposure and engagement. From targeted campaigns to engaging content, we craft creative strategies that propel your brand forward and unlock new opportunities for growth.",
  },
  //   {
  //     id: 4,
  //     title: "Grow faster",
  //     // Icon: FiBarChart,
  //     imgSrc:
  //       "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
  // list:[
  //   "Design",
  //   "User Interface",
  //   "User Experience",
  //   "Search Engine Optimization",
  //   "Web Design",
  // ]
  //   },
]
