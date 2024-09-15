import { useState, useEffect } from "react"
import React from "react"
import List from "./List.jsx"
import Modal from "./Modal"
import Logo from "../Logo/Logo"
import MobileGrid from "./MobileGrid"

function GridComponent() {
  const [selected, setSelected] = useState(null)

  const [mobile, setMobile] = useState(window.innerWidth < 550 ? true : false)

  useEffect(() => {
    setMobile(window.innerWidth < 550 ? true : false)
  }, [window.innerWidth])

  return (
    <>
      <div className="my-5 w-full">
        <div
          className={`absolute left-0 top-[100vh] -z-40 h-[300vh] w-full [@media(min-width:701px)]:h-[550vh] [@media(min-width:801px)]:h-[830vh]`}
        >
          <Logo
            src={"/logo.svg"}
            style={` bg-primary/60 [@media(min-width:680px)]:w-[500px] [@media(min-width:555px)]:w-[400px] w-[300px] sticky left-[20%] [@media(min-width:900px)]:left-[30%] [@media(min-width:555px)]:top-[25%] top-[35%] -z-40 `}
          />
        </div>
        {mobile ? (
          <MobileGrid setSelected={setSelected} />
        ) : (
          <List setSelected={setSelected} />
        )}
        <Modal selected={selected} setSelected={setSelected} />
      </div>
    </>
  )
}

export default GridComponent
