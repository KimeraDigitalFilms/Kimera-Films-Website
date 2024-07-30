import React, { useEffect, useState } from "react"
import Ticker from "../components/Ticker"
import Preloader from "../components/Preloader"
// import Services from "../components/Services";
import ScrollTopButton from "../components/ScrollTopButton"
import Team from "../components/Team"
import LogoGimmick from "../components/LogoGimmick"
import Featured from "../components/ShowReel/Featured"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import PageTransition from "../components/PageTransition"
import About from "../components/About"
import Accordion from "../components/Service_Accordian/Accordion"


function Home() {
  // const [ready, setReady] = useState(0);
  const [vis, setVis] = useState(false)

  // document.addEventListener("DOMContentLoaded", () => {
  //   setReady(1);
  //   // if (document.readyState==='complete'){
  //   // }
  //     // setTimeout(() => {
  //     // }, 2400);
  // });
  // useEffect(()=>{
  //   setReady(1);
  // },[])
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" })
  }, [])

  return (
    <>
      <div
        className=""
        id="home"
        // onLoad={() => {
        //   setReady(1);
        //   setTimeout(() => {

        //   }, 2400);
        // }}
      >
        {/* {!vis ? (
          <Preloader ready={ready} setVis={setVis} />
        ) : ( */}
        {!vis 
        ? 
        (
          sessionStorage.getItem("preloaded") ? (
            <>{setVis(true)}</>
          ) : (
            <Preloader  setVis={setVis} />
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
        {/* <Services/>
          
       <Team/>
<LogoGimmick/>
            <Ticker/> */}
      </div>
    </>
  )
}

// export default Home

const WrappedHome = PageTransition(Home)

export default WrappedHome
