import React from "react";
import Card from "./Card";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./List.css";
import { easeOut } from "framer-motion/dom";

function List({ setSelected }) {
  const list = [
    {
      // vid: "https://player.vimeo.com/video/938376141?h=4bb8442f8d",
      vid: "https://www.youtube.com/embed/WWituJt63Nk?si=E_0VK8xBIahGiQzr",
      title: "Project 1",
      poster: "/thumbnails/random1.png",
    },
    {
      // vid: "https://player.vimeo.com/video/137250145?h=ff9fe4f114",
      vid: "https://www.youtube.com/embed/rOvfSnJDLVw?si=wyrp31prNJefGdhW",
      title: "Project 2",
      poster: "/thumbnails/random2.png",
    },
    {
      // vid: "https://player.vimeo.com/video/926940023?h=c46a7dc9aa",
      vid: "https://www.youtube.com/embed/ld3zekD5vCU?si=3-xFh7rkT-qH74kM",
      // vid:"https://youtube.com/embed/lSbLpLFEglE?si=JK3rqfpr_FcOi0ks", //shorts
      title: "Project 3",
      poster: "/thumbnails/random3.png",
    },
    {

      // vid: "https://player.vimeo.com/video/21066530?h=1183d78d8b",
      vid: "https://www.youtube.com/embed/44Agu6gBS84?si=kJulzN-AqRVBH8uR",
      title: "Project 4",
      poster: "/thumbnails/random4.png",
    },
    {
      // vid: "https://player.vimeo.com/video/394673541?h=3e4e45cb06",
      vid: "https://www.youtube.com/embed/WWituJt63Nk?si=untMgr2ciiD9Qcpc",
      title: "Project 5",
      poster: "/thumbnails/random5.png",
    },
    {
      // vid: "https://player.vimeo.com/video/253316833?h=0363f35d21",
      vid: "https://www.youtube.com/embed/IQvC50eAUyc?si=fYiJ-3sMQ8KaXu8X",
      title: "Project 6",
      poster: "/thumbnails/random6.png",
    },
    {
      // vid: "https://player.vimeo.com/video/213079877?h=1552b59c80",
      vid: "https://www.youtube.com/embed/G5VODLMa0L8?si=kfwk_-Fqg0tSRSHd",
      title: "Project 7",
      poster: "/thumbnails/random7.png",
    },
    {
      // vid: "https://player.vimeo.com/video/176189702?h=663625b3bd",
      vid: "https://www.youtube.com/embed/tVGypPk4LBM?si=A0TlDX_R9fHofW47",
      title: "Project 8",
      poster: "/thumbnails/random8.png",
    },
    {
      vid: "https://www.youtube.com/embed/oENRpM-CqXc?si=Tc8RIrt1ZdzjW2dn",
      title: "Project 9",
      poster: "/thumbnails/random8.png",
    },
    {
      vid: "https://www.youtube.com/embed/INiViDtjWoc?si=ZW6JWfhsob0mZ5SM",
      title: "Project 10",
      poster: "/thumbnails/random8.png",
    },
    {
      vid: "https://www.youtube.com/embed/liiiKGroM1s?si=ogK-Qpe-WxEbZnZJ",
      title: "Project 11",
      poster: "/thumbnails/random8.png",
    },
    {
      vid: "https://www.youtube.com/embed/P1G1WaRVLDs?si=owuRqnA9BsAoN4Ju",
      title: "Project 12",
      poster: "/thumbnails/random8.png",
    },
    {
      vid: "https://www.youtube.com/embed/FeVfiTgfsyE?si=X2cxau-KyXZ6lzDN",
      title: "Project 13",
      poster: "/thumbnails/random8.png",
    },
    {
      vid: "https://www.youtube.com/embed/0MWLJoOxN-I?si=ulxqcZPJyR110E_b",
      title: "Project 14",
      poster: "/thumbnails/random8.png",
    },
    {
      vid: "https://www.youtube.com/embed/4vxrRiY4cNo?si=3X-1GkPqt8FVHgIj",
      title: "Project 15",
      poster: "/thumbnails/random8.png",
    },
    {
      vid: "https://www.youtube.com/embed/2_YFjkCWbPY?si=iQb3qdVJxxY4YSOs",
      title: "Project 16",
      poster: "/thumbnails/random8.png",
    }
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
        className="screen-padding gap-y-7 gap-x-4 w-full h-[500vh] "
      // className="columns-1 md:columns-2 xl:columns-3  gap-x-0"
      >
        <Card setSelected={setSelected} item={list[0]} style={"col-span-4"} />
        <Card setSelected={setSelected} item={list[1]}
          style={"col-span-6 col-start-9 row-start-2"}
        />
        <Card
          setSelected={setSelected}
          item={list[2]}
          style={"col-span-2"}
        />

        <Card
          setSelected={setSelected}
          item={list[3]}
          style={"col-span-5 col-start-8 row-start-11"}
        />
        <Card
          setSelected={setSelected}
          item={list[4]}
          style={"col-span-3 col-start-5 row-start-6"}
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
          style={"col-span-2 col-start-8 row-start-[16]"}
        />
        <Card
          setSelected={setSelected}
          item={list[8]}
          style={"col-span-4 row-start-[18] col-start-1"}
        />
        <Card
          setSelected={setSelected}
          item={list[9]}
          style={"col-span-2 row-start-[22] col-start-3"}
        />
        <Card
          setSelected={setSelected}
          item={list[10]}
          style={"col-span-6 row-start-[20] col-start-8"}
        />
        <Card
          setSelected={setSelected}
          item={list[11]}
          style={"col-span-4 row-start-[25] col-start-8"}
        />  
        <Card
          setSelected={setSelected}
          item={list[12]}
          style={"col-span-4 row-start-[27] col-start-1"}
        />
        <Card
          setSelected={setSelected}
          item={list[13]}
          style={"col-span-2 row-start-[31] col-start-5"}
        />
        <Card
          setSelected={setSelected}
          item={list[14]}
          style={"col-span-3 row-start-[32] col-start-10"}
        />
        <Card
          setSelected={setSelected}
          item={list[15]}
          style={"col-span-3 row-start-[33] col-start-1"}
        />

      </motion.div>
    </>
  );
}

export default List;
