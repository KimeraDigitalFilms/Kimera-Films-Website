import React from "react";

const Button = ({ content,style }) => {
  return (
    <div className={`w-[200px] h-[100px] bg-purple-950 rounded-md relative cursor-pointer ${style}`}>
      <button
        className={`w-[200px] h-[100px] bg-primary-dark rounded-md absolute -top-1 -left-1 active:top-0 active:left-0 p-4 group overflow-hidden py-6`}
      >
        <div className="text-white relative flex justify-center items-center h-full ">
          <div className="w-full h-2/5 bg-purple-200 opacity-40 absolute rotate-[135deg] -left-52 transition-all duration-700 group-hover:left-44" />
          <p className="font-extrabold text-3xl">{content}</p>
        </div>
        <div></div>
      </button>
    </div>
  );
};

export default Button;
