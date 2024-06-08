import React from "react";
import Card from "./Card";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./List.css";
import { easeOut } from "framer-motion/dom";

function List({ setSelected }) {
  const list = [
    {
      id: 1,
      // vid: "https://player.vimeo.com/video/938376141?h=4bb8442f8d",
      vid: "https://www.youtube.com/embed/lghlkDA1gVY?si=tqnGNqkf7O04d0mr",
      title: "Project 1",
      poster: "/thumbnails/random1.png",
    },
    {
      id: 3,
      // vid: "https://player.vimeo.com/video/926940023?h=c46a7dc9aa",
      vid: "https://www.youtube.com/embed/J6MoxGiH5QM?si=PlluxLeNSdWzGEBv",
      title: "Project 3",
      poster: "/thumbnails/random3.png",
    },
    {
      id: 2,
      // vid: "https://player.vimeo.com/video/137250145?h=ff9fe4f114",
      vid: "https://www.youtube.com/embed/SKx1Av4aTxk?si=PC9VJJEhi_92XbvQ",
      title: "Project 2",
      poster: "/thumbnails/random2.png",
    },
    {
      id: 4,
      // vid: "https://player.vimeo.com/video/21066530?h=1183d78d8b",
      vid: "https://www.youtube.com/embed/k7bF22rKLN0?si=9HuU3Hkwn7ek0y6z",
      title: "Project 4",
      poster: "/thumbnails/random4.png",
    },
    {
      id: 5,
      // vid: "https://player.vimeo.com/video/394673541?h=3e4e45cb06",
      vid: "https://www.youtube.com/embed/2YeSgjFeNwU?si=V8r89STjb3h6nPga",
      title: "Project 5",
      poster: "/thumbnails/random5.png",
    },
    {
      id: 6,
      // vid: "https://player.vimeo.com/video/253316833?h=0363f35d21",
      vid: "https://www.youtube.com/embed/YZ4W964hocA?si=eLnRAWYFVv1cik_M",
      title: "Project 6",
      poster: "/thumbnails/random6.png",
    },
    {
      id: 7,
      // vid: "https://player.vimeo.com/video/213079877?h=1552b59c80",
      vid: "https://www.youtube.com/embed/3ryID_SwU5E?si=a_VY29jHk9bUt4uB",
      title: "Project 7",
      poster: "/thumbnails/random7.png",
    },
    {
      id: 8,
      // vid: "https://player.vimeo.com/video/176189702?h=663625b3bd",
      vid: "https://www.youtube.com/embed/n8PfTlzsbdY?si=TfO4IhEGsxYoTmyp",
      title: "Project 8",
      poster: "/thumbnails/random8.png",
    },
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
