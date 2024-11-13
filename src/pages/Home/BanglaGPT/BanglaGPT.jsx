/* eslint-disable no-unused-vars */
import React from "react";
import banner from "../../../assets/banner.png";

const BanglaGPT = () => {
  return (
    <>
      <div className="flex items-center justify-center  bg-black text-center text-white">
        <div>
          <h1
            className="text-3xl md:text-5xl font-semibold mb-4"
            style={{ fontFamily: "Atma, sans-serif", fontWeight: 600 }}
          >
            Writes, brainstorms, edits,
            <br /> and explores ideas with বাংলাGPT
          </h1>
          <p className="text-gray-400 underline text-lg mt-4 cursor-pointer">
            Learn more about writing with ChatGPT &gt;
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center h-screen">
        <img className="w-4/5" src={banner} alt="" />
      </div>
    </>
  );
};

export default BanglaGPT;
