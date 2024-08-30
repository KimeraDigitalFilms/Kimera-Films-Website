import React, { useContext, useRef } from "react"
import { useScroll, useTransform, motion } from "framer-motion"
import colorContext from "../context/ColorContext"
function Heading({ text }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    // layoutEffect: false,
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
        className="font-FoundersGrotesk mt-3 w-full py-5 text-center text-9xl leading-[45px] text-secondary1 min-[645px]:text-[230px] min-[645px]:leading-[90px] min-[830px]:text-[300px] min-[830px]:leading-[120px]"
      >
        BRANDS <br />{" "}
        <span className="text-[55px] min-[645px]:text-[100px] min-[830px]:text-[130px]">
          We've Worked With
        </span>
      </motion.h1>
    </>
  )
}

const Ticker = () => {
  return (
    <section className="py-4">
      {/* <div className="mb-10 overflow-hidden">
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
          Brands We've Worked With
        </motion.h1>
      </div> */}

      <Heading />

      <div className="flex overflow-hidden">
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
      </div>
      <div className="mt-4 flex overflow-hidden">
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
      </div>
    </section>
  )
}

const TranslateWrapper = ({ children, reverse }) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      className="flex gap-8 px-2"
    >
      {children}
    </motion.div>
  )
}

const LogoItem = ({
  Icon,
  zoom = 1,
  bright = 1,
  invert = 0,
  invertInWhite = 0,
}) => {
  const { canvasBg } = useContext(colorContext)
  return (
    <div
      href="/"
      rel="nofollow"
      target="_blank"
      className="flex h-16 w-16 items-center justify-center px-2 md:h-24 md:w-24"
    >
      {/* <Icon className="text-4xl md:text-5xl" /> */}
      {canvasBg !== "#ffffff" ? (
        <img
          src={Icon}
          alt="clientLogo"
          style={{
            filter: `grayscale(100%) brightness(${bright}) invert(${invert}%)`,
            transform: `scale(${zoom})`,
          }}
          className={`w-full`}
          loading="lazy"
        />
      ) : (
        <img
          src={Icon}
          alt="clientLogo"
          style={{
            filter: `grayscale(100%) invert(${invertInWhite}%)`,
            transform: `scale(${zoom})`,
          }}
          className="w-full"
          loading="lazy"
        />
      )}
    </div>
  )
}
// ${zoom && `scale-[${zoom}]`} ${bright && `brightness-[${bright}]`}

const LogoItemsTop = () => (
  <>
    <LogoItem
      Icon={"/client logos/Media.Monks_idx7Tjoce-_1.webp"}
      bright={2}
      invert={100}
    />
    {/* <LogoItem Icon={"/client logos/Media.Monks.svg"} /> */}
    <LogoItem
      Icon={"/client logos/Burgundy Logo.webp"}
      zoom={1.5}
      invertInWhite={100}
    />
    <LogoItem Icon={"/client logos/Balaji_Telefilms_Logo.webp"} />
    <LogoItem
      Icon={"/client logos/dal cheeni logo 2.webp"}
      invert={100}
      bright={0.5}
      zoom={1.5}
    />
    <LogoItem
      Icon={"/client logos/bhandarkarentertainment_logo.webp"}
      invert={100}
    />
    <LogoItem Icon={"/client logos/colors tv logo.webp"} invert={100} />
    <LogoItem
      Icon={"/client logos/BJ Logo.webp"}
      bright={1}
      zoom={1.2}
      invert={100}
    />
    <LogoItem
      Icon={"/client logos/G.D GOENLA GLOBAL SCHOOL NOIDA.webp"}
      zoom={2.1}
      bright={0.8}
      invert={100}
    />
    <LogoItem Icon={"/client logos/KK JEWELLERS.webp"} invertInWhite={100} />
    <LogoItem
      Icon={"/client logos/KeyWest-07.webp"}
      zoom={1.5}
      bright={1.25}
      invertInWhite={100}
    />
    <LogoItem Icon={"/client logos/NDTV INDIA.webp"} invert={100} />
  </>
)

const LogoItemsBottom = () => (
  <>
    <LogoItem
      Icon={"/client logos/hell-energy-drink-logo-A1B6479A6F-seeklogo.com.webp"}
    />
    <LogoItem Icon={"/client logos/RAMAGYA SPORTS ACADEMY.webp"} />
    <LogoItem Icon={"/client logos/logo ip.webp"} />
    <LogoItem Icon={"/client logos/YRF LOGO.webp"} />
    <LogoItem Icon={"/client logos/RAMAGYA SCHOOL.webp"} bright={2} />
    <LogoItem Icon={"/client logos/unnamed.webp"} />
    <LogoItem Icon={"/client logos/SARVJAN.webp"} invert={100} />
    <LogoItem Icon={"/client logos/RAMAGYA FOUNDATION.webp"} bright={2} />
    <LogoItem Icon={"/client logos/SWeety crush logo.webp"} invert={100} />
    <LogoItem
      Icon={"/client logos/SWAMI_LOGO_FIX.webp"}
      zoom={1.25}
      invertInWhite={100}
    />
    <LogoItem Icon={"/client logos/Viacom18.webp"} bright={1.5} />
    <LogoItem Icon={"/client logos/VW Logo.webp"} invertInWhite={100} />
  </>
)

export default Ticker
