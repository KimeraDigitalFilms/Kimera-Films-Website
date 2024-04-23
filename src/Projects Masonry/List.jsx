import React from "react";
import Card from "./Card";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
function List({ setSelected }) {

  const list = [
    { id: 1, vid: "/videos/random1.mp4", title: "Project 1" },
    { id: 2, vid: "/videos/random2.mp4", title: "Project 2" },
    { id: 3, vid: "/videos/random3.mp4", title: "Project 3" },
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
    <motion.div className="columns-2  break-inside-avoid xl:columns-3 gap-x-0">
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
          >
            <Card setSelected={setSelected} item={item} />
          </motion.div>
        );
      })}
    </motion.div>
  );
}

export default List;
