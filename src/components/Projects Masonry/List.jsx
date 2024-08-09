import React from "react"
import Card from "./Card"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import "./List.css"
import { easeOut } from "framer-motion/dom"

function List({ setSelected }) {
  const list = [
    {
      // vid: "https://www.youtube.com/embed/WWituJt63Nk?si=E_0VK8xBIahGiQzr",
      vid: "https://www.youtube.com/embed/P1G1WaRVLDs?si=E8BH5trsbpUicpYP",
      title: "Project 1",
      poster: "/thumbnails/Crossfit.webp",
    },
    {
      vid: "https://www.youtube.com/embed/rOvfSnJDLVw?si=wyrp31prNJefGdhW",
      title: "Project 2",
      poster: "/thumbnails/Ramagya Second Video.00_00_00_00.Still001.webp",
    },
    {
      vid: "https://www.youtube.com/embed/ld3zekD5vCU?si=3-xFh7rkT-qH74kM",
      // vid:"https://youtube.com/embed/lSbLpLFEglE?si=JK3rqfpr_FcOi0ks", //shorts
      title: "Project 3",
      poster: "/thumbnails/Dance.webp",
    },
    {
      // vid: "https://player.vimeo.com/video/21066530?h=1183d78d8b",
      vid: "https://www.youtube.com/embed/44Agu6gBS84?si=kJulzN-AqRVBH8uR",
      title: "Project 4",
      poster: "/thumbnails/Crossfit.webp",
    },
    {
      // vid: "https://player.vimeo.com/video/394673541?h=3e4e45cb06",
      vid: "https://www.youtube.com/embed/WWituJt63Nk?si=untMgr2ciiD9Qcpc",
      title: "Project 5",
      poster: "/thumbnails/Crossfit.webp",
    },
    {
      // vid: "https://player.vimeo.com/video/253316833?h=0363f35d21",
      vid: "https://www.youtube.com/embed/IQvC50eAUyc?si=fYiJ-3sMQ8KaXu8X",
      title: "Project 6",
      poster: "/thumbnails/Crossfit.webp",
    },
    {
      vid: "https://www.youtube.com/embed/G5VODLMa0L8?si=kfwk_-Fqg0tSRSHd",
      title: "Project 7",
      poster:
        "/thumbnails/Employee Hiring Final Render 1080p.00_02_30_23.Still001.webp",
    },
    {
      vid: "https://www.youtube.com/embed/tVGypPk4LBM?si=A0TlDX_R9fHofW47",
      title: "Project 8",
      poster: "/thumbnails/VW WITH CHANGES.00_01_06_04.Still002.webp",
    },
    {
      vid: "https://www.youtube.com/embed/oENRpM-CqXc?si=Tc8RIrt1ZdzjW2dn",
      title: "Project 9",
      poster: "/thumbnails/Ramagya.webp",
    },
    {
      vid: "https://www.youtube.com/embed/INiViDtjWoc?si=ZW6JWfhsob0mZ5SM",
      title: "Project 10",
      poster: "/thumbnails/Crossfit.webp",
    },
    {
      vid: "https://www.youtube.com/embed/liiiKGroM1s?si=ogK-Qpe-WxEbZnZJ",
      title: "Project 11",
      poster:
        "/thumbnails/Candy_Ad_v033_ProRes4444 (1).00_00_28_15.Still001.webp",
    },
    {
      // vid: "https://www.youtube.com/embed/P1G1WaRVLDs?si=owuRqnA9BsAoN4Ju",
      vid: "https://www.youtube.com/embed/JHtji0bru5Q?si=TAAeiHgMTAuA3pFY",
      title: "Project 12",
      poster: "/thumbnails/Keywest 2K.00_00_55_17.Still001.webp",
    },
    {
      vid: "https://www.youtube.com/embed/FeVfiTgfsyE?si=X2cxau-KyXZ6lzDN",
      title: "Project 13",
      poster: "/thumbnails/Crossfit.webp",
    },
    {
      vid: "https://www.youtube.com/embed/0MWLJoOxN-I?si=ulxqcZPJyR110E_b",
      title: "Project 14",
      poster: "/thumbnails/Crossfit.webp",
    },
    {
      vid: "https://www.youtube.com/embed/4vxrRiY4cNo?si=3X-1GkPqt8FVHgIj",
      title: "Project 15",
      poster: "/thumbnails/Crossfit.webp",
    },
    {
      vid: "https://www.youtube.com/embed/2_YFjkCWbPY?si=iQb3qdVJxxY4YSOs",
      title: "Project 16",
      poster: "/thumbnails/Crossfit.webp",
    },
    {
      vid: "https://www.youtube.com/embed/rJVnNfREh2c?si=-oiyoJ6YOl4trQEb", //ye sahi hai
      title: "Project 17",
      poster: "/thumbnails/Crossfit.webp",
    },
    {
      vid: "https://www.youtube.com/embed/NLcNFVAz06Q?si=w5I8rH5rvog9mLDT",
      title: "Project 18",
      poster: "/thumbnails/Pedal Tennis 1.00_00_14_15.Still002.webp",
    },
    {
      vid: "https://www.youtube.com/embed/CaeyUgFUEM8?si=WVtUwteedlXWLXzP",
      title: "Project 19",
      poster: "/thumbnails/Football Paid (1).00_00_24_09.Still001.webp",
    },
    {
      vid: "https://www.youtube.com/embed/t1s2buHQsMw?si=WgRkYWzG3xhbGdtc",
      title: "Project 20",
      poster: "/thumbnails/Cricket 4k.00_00_11_09.Still001.webp",
    },
    {
      vid: "https://www.youtube.com/embed/gvK_HBJOhZQ?si=qnN08VIJXxNUcC2k",
      title: "Project 21",
      poster: "/thumbnails/Pilates.webp",
    }
  ]


  return (
    <>
      <motion.div
        id="grid"
        className="screen-padding h-[670vh] w-full gap-x-4 gap-y-7"
        // className="columns-1 md:columns-2 xl:columns-3  gap-x-0"
      >
        <Card setSelected={setSelected} item={list[0]} style={"col-span-4"} />
        <Card
          setSelected={setSelected}
          item={list[1]}
          style={"col-span-6 col-start-9 row-start-2"}
        />
        <Card setSelected={setSelected} item={list[2]} style={"col-span-2"} />

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
        <Card
          setSelected={setSelected}
          item={list[16]}
          style={"col-span-4 row-start-[36] col-start-2"}
        />
        <Card
          setSelected={setSelected}
          item={list[17]}
          style={"col-span-4 row-start-[38] col-start-10"}
        />
        <Card
          setSelected={setSelected}
          item={list[18]}
          style={"col-span-2 row-start-[42] col-start-10"}
        />
        <Card
          setSelected={setSelected}
          item={list[19]}
          style={"col-span-5 row-start-[40] col-start-2"}
        />
        <Card
          setSelected={setSelected}
          item={list[20]}
          style={"col-span-3 row-start-[44] col-start-4"}
        />
      </motion.div>
    </>
  )
}

export default List
