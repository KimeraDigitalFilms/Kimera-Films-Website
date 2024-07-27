import { motion, easeOut } from "framer-motion"
import {
  SiNike,
  Si3M,
  SiAbstract,
  SiAdobe,
  SiAirtable,
  SiAmazon,
  SiBox,
  SiBytedance,
  SiChase,
  SiCloudbees,
  SiBurton,
  SiBmw,
  SiHeroku,
  SiBuildkite,
  SiCouchbase,
  SiDailymotion,
  SiDeliveroo,
  SiEpicgames,
  SiGenius,
  SiGodaddy,
} from "react-icons/si"
// import { IconType } from "react-icons";

const Ticker = () => {
  return (
    <section className="py-4">
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
          Brands We've Worked With
        </motion.h1>
      </div>
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
      className="flex gap-4 px-2"
    >
      {children}
    </motion.div>
  )
}

const LogoItem = ({ Icon }) => {
  return (
    <div
      href="/"
      rel="nofollow"
      target="_blank"
      className="flex h-16 w-16 items-center justify-center px-2 md:h-24 md:w-24"
    >
      {/* <Icon className="text-4xl md:text-5xl" /> */}
      <img src={Icon} alt="clientLogo" />
    </div>
  )
}

const LogoItemsTop = () => (
  <>
    <LogoItem Icon={"/client logos/Media.Monks_idx7Tjoce-_1.png"} />
    <LogoItem Icon={"/client logos/Burgundy Logo.png"} />
    <LogoItem Icon={"/client logos/Balaji_Telefilms_Logo.png"} />
    <LogoItem Icon={"/client logos/dal cheeni logo 2.png"} />
    <LogoItem Icon={"/client logos/bhandarkarentertainment_logo.jpeg"} />
    <LogoItem Icon={"/client logos/colors tv logo.png"} />
    <LogoItem Icon={"/client logos/BJ Logo.png"} />
    <LogoItem Icon={"/client logos/G.D GOENLA GLOBAL SCHOOL NOIDA.png"} />
    <LogoItem Icon={"/client logos/KK JEWELLERS  logo) copy.png"} />
    <LogoItem Icon={"/client logos/KeyWest-07.jpg"} />
  </>
)

const LogoItemsBottom = () => (
  <>
    <LogoItem
      Icon={"/client logos/hell-energy-drink-logo-A1B6479A6F-seeklogo.com.png"}
    />
    <LogoItem Icon={"/client logos/RAMAGYA SPORTS ACADEMY.png"} />
    <LogoItem Icon={"/client logos/logo ip.png"} />
    <LogoItem Icon={"/client logos/YRF LOGO.png"} />
    <LogoItem Icon={"/client logos/RAMAGYA SCHOOL.png"} />
    <LogoItem Icon={"/client logos/unnamed.png"} />
    <LogoItem Icon={"/client logos/SARVJAN.png"} />
    <LogoItem Icon={"/client logos/RAMAGYA FOUNDATION.png"} />
    <LogoItem Icon={"/client logos/SWeety crush logo.jpeg"} />
    <LogoItem Icon={"/client logos/SWAMI_LOGO_FIX.png"} />
  </>
)

export default Ticker
