import React, { useState } from "react";
import Distortion from "../components/Distortion/Distortion";
import Ticker from "../components/Ticker";
import Preloader from "../components/Preloader";
import Services from "../components/Services";

import Team from "../components/Team";
import LogoGimmick from "../components/LogoGimmick";
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
      <div className=""
        id="home"
        onLoad={() => {
          setTimeout(() => {
            setReady(1);
            // console.log("yo")
          }, 2500);
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
          {!vis ?
       (
            <Preloader ready={ready} setVis={setVis} />
          )
         : (
          <>
          <Services/>
          
       <Team/>
<LogoGimmick/>
            <Ticker/>
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
