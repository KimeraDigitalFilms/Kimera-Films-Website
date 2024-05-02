import React, { useState } from "react";
import Distortion from "../components/Distortion/Distortion";
import TickerComponent from "../components/Ticker/Ticker";
import Intro from "../components/Intro";
import Counter from "../components/Counter";
import Preloader from "../components/Preloader";


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
        id="home"
        onLoad={() => {
          setTimeout(() => {
            setReady(1);
            // console.log("yo")
          }, 2500);
        }}
      >
        {!vis ? (
          sessionStorage.getItem("preloaded") ? (
            <>{setVis(true)}</>
          ) : (
            <Preloader ready={ready} setVis={setVis} />
          )
        ) : (
          <>
            {/* <Distortion/> */}
            {/* <Intro /> */}
            {/* <TickerComponent /> */}
            {/* <Counter/> */}
          </>
        )}
      </div>
    </>
  );
}

export default Home;
