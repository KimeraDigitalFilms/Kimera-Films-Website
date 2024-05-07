import React, { useEffect } from "react";
import Distortion from "../components/Distortion/Distortion";
import LogoGimmick from "../components/LogoGimmick";
import Featured from "../components/Featured";
import Example from "../components/ShowReel/ShowReel";

function Dummy() {
  useEffect(()=>{
    window.scrollTo({top: 0, left: 0,behavior:'instant'})
  },[])
  return (
    <div>
      {/* <Distortion
        containerId={"1"}
        imageId={"1img"}
        src={"https://pixlr.com/images/index/ai-image-generator-one.webp"}
      />
      <Distortion
        containerId={"2"}
        imageId={"2img"}
        src={
          "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        }
      /> */}
      {/* <LogoGimmick/> */}
      {/* <Featured /> */}
      <Example/>
    </div>
  );
}

export default Dummy;
