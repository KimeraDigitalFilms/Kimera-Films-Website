import React from "react";
import Card from "./Card";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import './List.css'
function List({ setSelected }) {

  const list = [
    { id: 1, vid: "/videos/random1.mp4", title: "Project 1" },
    { id: 2, vid: "/videos/random2.mp4", title: "Project 2" },
    { id: 3, vid: "/videos/random3.mp4", title: "Project 3" },
    { id: 4, vid: "/videos/random4.mp4", title: "Project 4" },
    { id: 5, vid: "/videos/random5.mp4", title: "Project 5" },
    { id: 6, vid: "/videos/random6.mp4", title: "Project 6" },
    { id: 7, vid: "/videos/random7.mp4", title: "Project 7" },
    { id: 8, vid: "/videos/random8.mp4", title: "Project 8" },
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
    <motion.div id="grid" className="columns-1 md:columns-2 xl:columns-3  gap-x-0">
      {list.map((item, k) => {
        return (
          <motion.div
            key={item.id}
            variants={{
              hidden: {
                opacity: 0,
              },
              visible: {
                opacity: 1,
                transition: {
                  delay: 0.1 * k,
                },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
          >
            <Card setSelected={setSelected} item={item} />
          </motion.div>
        );
      })}
    </motion.div>
  );
}

export default List;
