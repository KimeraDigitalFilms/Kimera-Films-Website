import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion"
import { useWindowSize } from "../../utils/useWindowSize"
import { useState, useRef } from "react"
import "./Accordion.css"
import Reveal from "./Reveal"

function Heading({ text }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`start end`, `end start`],
  })
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.7, 1],
    [0.1, 1, 1, 0.1]
  )
  return (
    <>
      <motion.h1
        style={{ opacity }}
        ref={ref}
        className={`font-FoundersGrotesk mt-3 w-full py-5 text-center text-[180px] leading-[150px] text-secondary1 [@media(min-width:524px)]:text-[250px] [@media(min-width:524px)]:leading-[200px] [@media(min-width:630px)]:text-[300px] [@media(min-width:630px)]:leading-[230px] [@media(min-width:720px)]:text-[350px]`}
      >
        {text}
      </motion.h1>
    </>
  )
}

const Accordion = () => {
  const [open, setOpen] = useState(items[0].id)
  return (
    <section className="screen-padding mt-[150px]">
      <Heading text={"WHAT WE DO"} />
      <div className="mx-auto mt-20 flex h-fit w-full max-w-7xl flex-col overflow-hidden rounded-lg shadow-xl shadow-shadow">
        {items.map((item) => {
          return (
            <Panel
              key={item.id}
              open={open}
              setOpen={setOpen}
              id={item.id}
              title={item.title}
              vid={item.vid}
              list={item.list}
              desc={item.desc}
            />
          )
        })}
      </div>
    </section>
  )
}

const Panel = ({ open, setOpen, id, title, vid, list, desc }) => {
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
          className="font-NeueMontreal hidden text-wrap text-3xl lg:block"
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
              // className="relative h-full w-full overflow-hidden bg-gradient-to-br from-white/20 to-white/5 backdrop-blur"
              className="relative h-full w-full overflow-hidden"
            >
              <motion.div
                variants={descriptionVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="w-full overflow-hidden px-4 py-2 text-secondary1"
              >
                <p className="text-secondary2 text-lg">{desc}</p>
              </motion.div>

              {/* <motion.div
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
              </motion.div>*/}
              <div className="ml-20 flex h-full w-full flex-nowrap justify-center gap-x-10 py-10">
                <motion.video
                  src={vid}
                  autoPlay
                  loop
                  muted
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
                  // preload="none"
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="ml-10 mt-5 h-[225px] w-[400px] rounded-lg"
                ></motion.video>

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
                  style={{
                    scrollSnapType: "y mandatory !important",
                    scrollBehavior: "smooth !important",
                    scrollSnapPointsY: "repeat(10px)",
                  }}
                  className="container relative flex h-[225px] w-[650px] flex-col items-start justify-start overflow-x-hidden overflow-y-scroll text-secondary1"
                  data-lenis-prevent
                >
                  <div className="py-[9.5%]">
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
    y: "7%",
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
    vid: "/service_videos/Brand Forge 2.webm",
    list: [
      "Brand Positioning",
      "Tone of Voice",
      "Naming Consultation",
      "Strategic Objectives Planning",
      "Brand Narrative Development",
      "Tagline Development",
      "Creative Conceptualization",
      "Visual Identity Design",
      "Logo Design",
      "Brand Collateral Design",
      "Packaging Design",
      "Art Direction",
      "Stationery Design",
      "Copywriting",
      "Brand Messaging",
    ],
    desc: "Developing exclusive brand identities and captivating stories that cut through the noise, resonating with your audience and setting you apart in the market. Our tailored approach blends creativity and strategy to define your essence and drive meaningful connections.",
  },
  {
    id: 2,
    title: "MOTION CANVAS",
    // Icon: FiPlay,
    vid: "/service_videos/Motion canvas 2.webm",
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
    vid: "/service_videos/Marketing Momentum 2.webm",
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
]
