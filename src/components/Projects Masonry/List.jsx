import React from "react"
import Card from "./Card"
import { motion } from "framer-motion"
import "./List.css"
import list from "./list.js"

function List({ setSelected }) {
  return (
    <>
      <motion.div
        id="grid"
        className="screen-padding h-[310vh] w-full gap-x-4 gap-y-7 [@media(min-width:2075px)]:h-[980vh] [@media(min-width:536px)]:h-[380vh] [@media(min-width:601px)]:h-[480vh] [@media(min-width:701px)]:h-[550vh] [@media(min-width:801px)]:h-[830vh]"
        // className="columns-1 md:columns-2 xl:columns-3  gap-x-0"
      >
        <Card
          setSelected={setSelected}
          item={list[0]}
          style={"col-span-4 col-start-2"}
        />
        <Card
          setSelected={setSelected}
          item={list[1]}
          style={"col-span-3 col-start-8 row-start-2"}
        />
        <Card
          setSelected={setSelected}
          item={list[2]}
          style={"col-span-3 col-start-3 row-start-5"}
        />

        <Card
          setSelected={setSelected}
          item={list[3]}
          style={"col-span-3 col-start-7 row-start-7"}
        />
        <Card
          setSelected={setSelected}
          item={list[4]}
          style={"col-span-3 col-start-3 row-start-9"}
        />
        <Card
          setSelected={setSelected}
          item={list[5]}
          style={"col-span-2 col-start-7 row-start-11"}
        />
        <Card
          setSelected={setSelected}
          item={list[6]}
          style={"col-span-3 col-start-3 row-start-[13] "}
        />
        <Card
          setSelected={setSelected}
          item={list[7]}
          style={"col-span-2 col-start-8 row-start-[15]"}
        />
        <Card
          setSelected={setSelected}
          item={list[8]}
          style={"col-span-1 row-start-[17] col-start-5"}
        />
        <Card
          setSelected={setSelected}
          item={list[9]}
          style={"col-span-2 row-start-[18] col-start-7"}
        />
        <Card
          setSelected={setSelected}
          item={list[10]}
          style={"col-span-3 row-start-[21] col-start-4"}
        />
        <Card
          setSelected={setSelected}
          item={list[11]}
          style={"col-span-3 row-start-[24] col-start-7"}
        />
        <Card
          setSelected={setSelected}
          item={list[12]}
          style={"col-span-3 row-start-[26] col-start-3"}
        />
        <Card
          setSelected={setSelected}
          item={list[13]}
          style={"col-span-3 row-start-[28] col-start-7"}
        />
        <Card
          setSelected={setSelected}
          item={list[14]}
          style={"col-span-2 row-start-[30] col-start-3"}
        />
        <Card
          setSelected={setSelected}
          item={list[15]}
          style={"col-span-2 row-start-[32] col-start-7"}
        />
        <Card
          setSelected={setSelected}
          item={list[16]}
          style={"col-span-3 row-start-[33] col-start-3"}
        />
        <Card
          setSelected={setSelected}
          item={list[17]}
          style={"col-span-3 row-start-[35] col-start-7"}
        />
        <Card
          setSelected={setSelected}
          item={list[18]}
          style={"col-span-2 row-start-[38] col-start-7"}
        />
        <Card
          setSelected={setSelected}
          item={list[19]}
          style={"col-span-3 row-start-[39] col-start-3"}
        />
        <Card
          setSelected={setSelected}
          item={list[20]}
          style={"col-span-2 row-start-[41] col-start-8"}
        />
        <Card
          setSelected={setSelected}
          item={list[21]}
          style={"col-span-3 row-start-[42] col-start-4"}
        />
        <Card
          setSelected={setSelected}
          item={list[22]}
          style={"col-span-2 row-start-[43] col-start-9"}
        />
        <Card
          setSelected={setSelected}
          item={list[23]}
          style={"col-span-2 row-start-[45] col-start-3"}
        />
        <Card
          setSelected={setSelected}
          item={list[24]}
          style={"col-span-2 row-start-[46] col-start-6"}
        />
        <Card
          setSelected={setSelected}
          item={list[25]}
          style={"col-span-2 row-start-[47] col-start-9"}
        />
        <Card
          setSelected={setSelected}
          item={list[26]}
          style={"col-span-3 row-start-[49] col-start-4"}
        />
        <Card
          setSelected={setSelected}
          item={list[27]}
          style={"col-span-2 row-start-[51] col-start-8"}
        />
        <Card
          setSelected={setSelected}
          item={list[28]}
          style={"col-span-3 row-start-[53] col-start-4"}
        />
      </motion.div>
    </>
  )
}

export default List
