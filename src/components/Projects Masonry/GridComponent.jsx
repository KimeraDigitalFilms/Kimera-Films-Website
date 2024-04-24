import { useState } from "react";
import React from "react";
import List from "./List";
import Modal from "./Modal";

function GridComponent() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div className='w-full h-[300vh] my-5 '>
        <List setSelected={setSelected}/>
        <Modal selected={selected} setSelected={setSelected} />
      </div>
    </>
  );
}

export default GridComponent;
