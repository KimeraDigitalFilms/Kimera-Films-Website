import { useState, useRef } from "react"
import React from "react"
import List from "./List"
import Modal from "./Modal"
import Logo from "../Logo/Logo"

function GridComponent() {
  const [selected, setSelected] = useState(null)

  return (
    <>
      <div className="my-5 w-full">
        <div className={`absolute left-0 top-[100vh] -z-40 h-[940vh] w-full`}>
          <Logo
            src={"/logo.svg"}
            style={` bg-primary/60 w-[500px] sticky left-[30%] top-[25%] -z-40 `}
          />
        </div>
        <List setSelected={setSelected} />
        <Modal selected={selected} setSelected={setSelected} />
      </div>
    </>
  )
}

export default GridComponent
