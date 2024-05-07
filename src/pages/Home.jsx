import React, { useState } from "react";
import Ticker from "../components/Ticker";
import Preloader from "../components/Preloader";
import Services from "../components/Services";
import ScrollTopButton from "../components/ScrollTopButton";
import Team from "../components/Team";
import LogoGimmick from "../components/LogoGimmick";
import Featured from "../components/Featured";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

function Home() {
  const [ready, setReady] = useState(0);
  const [vis, setVis] = useState(false);
  // document.addEventListener("readystatechange", (e) => {
  //   if (e.target.readyState === "interactive") {
  //     setReady(1);
  //   } else if (e.target.readyState === "complete") {
  //     setTimeout(() => {
  //       setReady(2);
  //     }, 500);
  //   }
  // });

  return (
    <>
      <div
        className=""
        id="home"
        onLoad={() => {
          setTimeout(() => {
            setReady(1);
            // console.log("yo")
          }, 2400);
        }}
      >
        {/* {!vis 
        ? 
        (
          sessionStorage.getItem("preloaded") ? (
            <>{setVis(true)}</>
          ) : (
            <Preloader ready={ready} setVis={setVis} />
          )
        ) : ( */}
        {!vis ? (
          <Preloader ready={ready} setVis={setVis} />
        ) : (
          <>
          <Hero/>
          <ScrollTopButton/>
            <Services />
            <Featured />
            <Team />
            <LogoGimmick />
            <Ticker />
            <Footer/>
          </>
        )}
        {/* <Services/>
          
       <Team/>
<LogoGimmick/>
            <Ticker/> */}
      </div>
    </>
  );
}

export default Home;
