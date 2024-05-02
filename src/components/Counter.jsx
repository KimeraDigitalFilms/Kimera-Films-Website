import React from "react";
import CountUp from "react-countup";
import Spotlight from "./Spotlight.jsx";
function Counter() {
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-y-10 screen-padding mb-10 justify-center">
      <div className="flex justify-center">
        <Spotlight
          content={"Revenue"}
          style={"text-5xl font-Oswald font-light"}
        />
      </div>
      <div className="flex justify-center">
        <Spotlight
          content={"Clients"}
          style={"text-5xl font-Oswald font-light"}
        />
      </div>
      <div className="flex justify-center">
        <Spotlight
          content={"Projects"}
          style={"text-5xl font-Oswald font-light"}
        />
      </div>
      <CountUp
        enableScrollSpy
        scrollSpyOnce
        scrollSpyDelay={300}
        start={1237}
        end={2000}
        duration={3.5}
        suffix="$"
        className="text-5xl text-center font-light font-Oswald text-white"
      />
      <CountUp
        enableScrollSpy
        scrollSpyOnce
        scrollSpyDelay={300}
        end={30}
        duration={3.5}
        start={0}
        className="text-5xl text-center font-light font-Oswald text-white"
      />
      <CountUp
        enableScrollSpy
        scrollSpyOnce
        scrollSpyDelay={300}
        end={56}
        start={0}
        duration={3.5}
        className="text-5xl text-center font-light font-Oswald text-white"
      />
    </div>
  );
}

export default Counter;
