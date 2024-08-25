import React from "react"
import Card from "./Card"
import { motion } from "framer-motion"
import "./List.css"

function List({ setSelected }) {
  const list = [
    {
      vid: "https://www.youtube.com/embed/JHtji0bru5Q?si=TAAeiHgMTAuA3pFY",
      title: "Project 1",
      poster: "/thumbnails/Keywest_Madhur.webp",
    },
    {
      vid: "https://www.youtube.com/embed/2_YFjkCWbPY?si=iQb3qdVJxxY4YSOs",
      title: "Project 2",
      poster: "/thumbnails/Hell.webp",
    },
    {
      vid: "https://www.youtube.com/embed/gvK_HBJOhZQ?si=qnN08VIJXxNUcC2k",
      title: "Project 3",
      poster: "/thumbnails/Pilates.webp",
    },
    {
      vid: "https://www.youtube.com/embed/liiiKGroM1s?si=ogK-Qpe-WxEbZnZJ",
      title: "Project 4",
      poster: "/thumbnails/Candy.webp",
    },
    {
      vid: "https://www.youtube.com/embed/P1G1WaRVLDs?si=E8BH5trsbpUicpYP",
      title: "Project 5",
      poster: "/thumbnails/Keywest_Intro.webp",
    },
    {
      vid: "https://www.youtube.com/embed/tVGypPk4LBM?si=A0TlDX_R9fHofW47",
      title: "Project 6",
      poster: "/thumbnails/VW.webp",
    },
    {
      vid: "https://www.youtube.com/embed/V9003tH-8Q4?si=cwvsu4NyEmKJO8Ip",
      title: "Project 7",
      poster: "/thumbnails/Combined_Testimonial.webp",
    },
    {
      vid: "https://www.youtube.com/embed/INiViDtjWoc?si=ZW6JWfhsob0mZ5SM",
      title: "Project 8",
      poster: "/thumbnails/Sarvjan_Investor.webp",
    },
    {
      vid: "https://www.youtube.com/embed/ld3zekD5vCU?si=3-xFh7rkT-qH74kM",
      title: "Project 9",
      poster: "/thumbnails/Dance.webp",
    },
    {
      vid: "https://www.youtube.com/embed/0MWLJoOxN-I?si=ulxqcZPJyR110E_b",
      title: "Project 10",
      poster: "/thumbnails/Bobal.webp",
    },
    {
      vid: "https://www.youtube.com/embed/FeVfiTgfsyE?si=X2cxau-KyXZ6lzDN",
      title: "Project 11",
      poster: "/thumbnails/Wingreens.webp",
    },
    {
      vid: "https://www.youtube.com/embed/CaeyUgFUEM8?si=WVtUwteedlXWLXzP",
      title: "Project 12",
      poster: "/thumbnails/Football.webp",
    },
    {
      vid: "https://www.youtube.com/embed/rJVnNfREh2c?si=-oiyoJ6YOl4trQEb",
      title: "Project 13",
      poster: "/thumbnails/Crossfit.webp",
    },
    {
      vid: "https://www.youtube.com/embed/G5VODLMa0L8?si=kfwk_-Fqg0tSRSHd",
      title: "Project 14",
      poster: "/thumbnails/Sarvjan_Hiring.webp",
    },
    {
      vid: "https://www.youtube.com/embed/rOvfSnJDLVw?si=wyrp31prNJefGdhW",
      title: "Project 15",
      poster: "/thumbnails/Ramagya1.webp",
    },
    {
      vid: "https://www.youtube.com/embed/o495uJy2x2w?si=mlkYXrqofualstkN",
      title: "Project 16",
      poster: "/thumbnails/Influencer.webp",
    },
    {
      vid: "https://www.youtube.com/embed/WWituJt63Nk?si=untMgr2ciiD9Qcpc",
      title: "Project 17",
      poster: "/thumbnails/Reel 2 Foundation.00_00_38_42.Still001.webp",
    },
    {
      vid: "https://www.youtube.com/embed/IQvC50eAUyc?si=fYiJ-3sMQ8KaXu8X",
      title: "Project 18",
      poster: "/thumbnails/Doggy1.webp",
    },

    {
      vid: "https://www.youtube.com/embed/oENRpM-CqXc?si=Tc8RIrt1ZdzjW2dn",
      title: "Project 19",
      poster: "/thumbnails/Ramagya2.webp",
    },

    {
      vid: "https://www.youtube.com/embed/4vxrRiY4cNo?si=3X-1GkPqt8FVHgIj",
      title: "Project 20",
      poster: "/thumbnails/Habanero.webp",
    },
    {
      vid: "https://www.youtube.com/embed/9QRWpmsx3Ws?si=WOuOu0KmkX_QjUb0",
      title: "Project 21",
      poster: "/thumbnails/Ladies 1.00_00_39_01.Still001.webp",
    },

    {
      vid: "https://www.youtube.com/embed/t1s2buHQsMw?si=WgRkYWzG3xhbGdtc",
      title: "Project 22",
      poster: "/thumbnails/Cricket.webp",
    },

    {
      vid: "https://www.youtube.com/embed/FEkP1gIjYrg?si=MjEm12mVfWagj9xw",
      title: "Project 23",
      poster: "/thumbnails/Doggy2.webp",
    },
    {
      vid: "https://www.youtube.com/embed/lafqwHugfEk?si=i7erhLRxxCIwRd_B",
      title: "Project 24",
      poster: "/thumbnails/Ladies 3.00_00_26_27.Still001.webp",
    },
    {
      vid: "https://www.youtube.com/embed/7ev0oJxYnN8?si=mhahyPiMGFoYKpsu",
      title: "Project 25",
      poster: "/thumbnails/Doggy3.webp",
    },
    {
      vid: "https://www.youtube.com/embed/nTUEDnHsxvA?si=E8veK-MIHzUaMVjM",
      title: "Project 26",
      poster: "/thumbnails/PTM.webp",
    },
    {
      vid: "https://www.youtube.com/embed/44Agu6gBS84?si=kJulzN-AqRVBH8uR",
      title: "Project 27",
      poster: "/thumbnails/Ramagya3.webp",
    },
    {
      vid: "https://www.youtube.com/embed/NLcNFVAz06Q?si=w5I8rH5rvog9mLDT",
      title: "Project 28",
      poster: "/thumbnails/Tennis.webp",
    },
    {
      vid: "https://www.youtube.com/embed/aAmCkozIr-I?si=765uXYOZdTwGvlc1",
      title: "Project 29",
      poster: "/thumbnails/Ramagya4.webp",
    },
  ]

  return (
    <>
      <motion.div
        id="grid"
        className="screen-padding h-[940vh] w-full gap-x-4 gap-y-7"
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
          style={"col-span-3 col-start-5 row-start-6"}
        />
        <Card
          setSelected={setSelected}
          item={list[4]}
          style={"col-span-3 col-start-1 row-start-7"}
        />
        <Card
          setSelected={setSelected}
          item={list[5]}
          style={"col-span-5 col-start-8 row-start-11"}
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
          style={"col-span-4 row-start-[36] col-start-5"}
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
        <Card
          setSelected={setSelected}
          item={list[21]}
          style={"col-span-3 row-start-[45] col-start-9"}
        />
        <Card
          setSelected={setSelected}
          item={list[22]}
          style={"col-span-4 row-start-[48] col-start-2"}
        />
        <Card
          setSelected={setSelected}
          item={list[23]}
          style={"col-span-4 row-start-[50] col-start-10"}
        />
        <Card
          setSelected={setSelected}
          item={list[24]}
          style={"col-span-3 row-start-[52] col-start-1"}
        />
        <Card
          setSelected={setSelected}
          item={list[25]}
          style={"col-span-2 row-start-[53] col-start-8"}
        />
        <Card
          setSelected={setSelected}
          item={list[26]}
          style={"col-span-3 row-start-[56] col-start-2"}
        />
        <Card
          setSelected={setSelected}
          item={list[27]}
          style={"col-span-4 row-start-[59] col-start-8"}
        />
        <Card
          setSelected={setSelected}
          item={list[28]}
          style={"col-span-2 row-start-[61] col-start-3"}
        />
      </motion.div>
    </>
  )
}

export default List
