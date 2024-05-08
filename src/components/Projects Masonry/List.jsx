import React from "react";
import Card from "./Card";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./List.css";
import { easeOut } from "framer-motion/dom";

function List({ setSelected }) {
  const list = [
    { id: 1, vid: "/videos/random1.mp4", title: "Project 1", poster: "/thumbnails/random1.png" },
    { id: 3, vid: "/videos/random3.mp4", title: "Project 3", poster: "/thumbnails/random3.png" },
    { id: 2, vid: "/videos/random2.mp4", title: "Project 2",  poster: "/thumbnails/random2.png" },
    { id: 4, vid: "/videos/random4.mp4", title: "Project 4",  poster: "/thumbnails/random4.png" },
    { id: 5, vid: "/videos/random5.mp4", title: "Project 5",  poster: "/thumbnails/random5.png" },
    { id: 6, vid: "/videos/random6.mp4", title: "Project 6",  poster: "/thumbnails/random6.png" },
    { id: 7, vid: "/videos/random7.mp4", title: "Project 7",  poster: "/thumbnails/random7.png" },
    { id: 8, vid: "/videos/random8.mp4", title: "Project 8",  poster: "/thumbnails/random8.png" },
  ];

  const ListVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  return (
    <>
      <motion.div
        id="grid"
        className="screen-padding gap-y-7 gap-x-4 w-full h-[250vh] "
        // className="columns-1 md:columns-2 xl:columns-3  gap-x-0"
      >
        <Card setSelected={setSelected} item={list[0]} style={"col-span-4"} />
        <Card setSelected={setSelected} item={list[1]} style={"col-span-2"} />
        <Card
          setSelected={setSelected}
          item={list[2]}
          style={"col-span-6 col-start-9 row-start-2"}
        />

        <Card
          setSelected={setSelected}
          item={list[3]}
          style={"col-span-5 col-start-10 row-start-9"}
        />
        <Card
          setSelected={setSelected}
          item={list[4]}
          style={"col-span-3  col-start-5 row-start-6"}
        />
        <Card
          setSelected={setSelected}
          item={list[5]}
          style={"col-span-3 col-start-1 row-start-7"}
        />
        <Card
          setSelected={setSelected}
          item={list[6]}
          style={"col-span-4 col-start-1 row-start-[12] "}
        />
        <Card
          setSelected={setSelected}
          item={list[7]}
          style={"col-span-5 col-start-8 row-start-[16]"}
        />
        {/* <Card
        setSelected={setSelected}
        item={list[8]}
        style={"col-span-3 row-start-15 col-start-10"}
      /> */}
      </motion.div>
    </>
  );
}

export default List;
