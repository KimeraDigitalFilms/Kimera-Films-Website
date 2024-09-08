import React, { useEffect, useState } from "react"
import Ticker from "../components/Ticker"
import Preloader from "../components/Preloader"
import ScrollTopButton from "../components/ScrollTopButton"
import Team from "../components/Team"
import LogoGimmick from "../components/LogoGimmick/LogoGimmick"
import Featured from "../components/ShowReel/Featured"
import Footer from "../components/Footer"
import Hero from "../components/Hero/Hero"
import PageTransition from "../components/PageTransition"
import About from "../components/About"
import Accordion from "../components/Service_Accordian/Accordion"

function Home() {
  const [vis, setVis] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" })
  }, [])

  return (
    <>
      <div id="home">
        {!vis ? (
          sessionStorage.getItem("preloaded") ? (
            <>{setVis(true)}</>
          ) : (
            <Preloader setVis={setVis} />
          )
        ) : (
          <>
            <Hero />
            <ScrollTopButton />
            <Accordion />
            <Featured />
            <About />
            <Team />
            <LogoGimmick />
            <Ticker />
            <Footer />
          </>
        )}
      </div>
    </>
  )
}

// export default Home

const WrappedHome = PageTransition(Home)

export default WrappedHome
