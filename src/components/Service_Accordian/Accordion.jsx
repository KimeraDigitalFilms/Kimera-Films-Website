import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import { useWindowSize } from "../../utils/useWindowSize"
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
        className={`mt-3 w-full py-5 text-center font-FoundersGrotesk text-[150px] leading-[150px] text-secondary1 [@media(min-width:376px)]:text-[180px] [@media(min-width:524px)]:text-[250px] [@media(min-width:524px)]:leading-[200px] [@media(min-width:630px)]:text-[300px] [@media(min-width:630px)]:leading-[230px] [@media(min-width:720px)]:text-[350px]`}
      >
        {text}
      </motion.h1>
    </>
  )
}

const Accordion = () => {
  const [open, setOpen] = useState(items[0].id)

  const { width } = useWindowSize()
  return (
    <section className="screen-padding mt-[150px]">
      <Heading text={"WHAT WE DO"} />
      {width >= 1058 ? (
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
      ) : (
        <MobileServices />
      )}
    </section>
  )
}

const MobileServices = () => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  const { width } = useWindowSize()
  const [scroll, setScroll] = useState(
    width >= 940
      ? "-35%"
      : width >= 860
        ? "-40%"
        : width >= 860
          ? "-50%"
          : width >= 425
            ? "-60%"
            : width >= 375
              ? "-65%"
              : "-70%"
  )
  useEffect(() => {
    setScroll(
      width >= 940
        ? "-35%"
        : width >= 860
          ? "-40%"
          : width >= 860
            ? "-50%"
            : width >= 425
              ? "-60%"
              : width >= 375
                ? "-65%"
                : "-70%"
    )
  }, [width])

  const x = useTransform(scrollYProgress, [0, 1], ["1%", scroll])

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-10">
          {items.map((item, i) => {
            return <Card item={item} key={i} />
          })}
        </motion.div>
      </div>
    </section>
  )
}

const Card = ({ item }) => {
  return (
    <>
      <div className="flex w-[300px] flex-col text-secondary1 [@media(min-width:445px)]:w-[350px] [@media(min-width:570px)]:w-[450px]">
        <video
          src={item.vid}
          autoPlay
          loop
          muted
          className="mb-5 h-[169px] w-[300px] rounded-lg [@media(min-width:570px)]:h-[225px] [@media(min-width:570px)]:w-[400px]"
        ></video>
        <h2 className="mb-4 text-2xl font-semibold uppercase [@media(min-width:570px)]:text-3xl">
          {item.title}
        </h2>
        <ul
        //  className="marker:text-secondary1 list-disc"
        >
          {item.list.map((service, i) => {
            return (
              <li
                key={i}
                className="text-sm font-medium [@media(min-width:680px)]:text-base"
              >
                {service}
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

const Panel = ({ open, setOpen, id, title, vid, list, desc }) => {
  const isOpen = open === id
  const refP = useRef(null)

  return (
    <>
      <button
        className="group relative flex flex-row-reverse flex-wrap items-center border-b-[1px] border-r-[1px] border-slate-200 bg-white p-3 transition-colors hover:cursor-default"
        onMouseEnter={() => setOpen(id)}
      >
        <span className="hidden text-wrap font-NeueMontreal text-3xl lg:block">
          {title}
        </span>
        <span className="block text-xl font-light lg:hidden">{title}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              key={`panel-${id}`}
              variants={panelVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="relative h-full w-full overflow-hidden"
            >
              <motion.div
                variants={descriptionVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="w-full overflow-hidden px-4 py-2 text-secondary1"
              >
                <p className="text-base text-secondary2 [@media(min-width:1065px)]:text-lg">
                  {desc}
                </p>
              </motion.div>

              <div className="ml-20 flex h-full w-full flex-nowrap justify-center gap-x-10 py-10">
                <motion.video
                  src={vid}
                  autoPlay
                  loop
                  muted
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
                  className="ml-10 mt-5 h-[225px] w-[400px] rounded-lg"
                ></motion.video>

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
