/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import Marquee from "react-fast-marquee";
// import img1 from "../../../assets/react.svg";
// import img2 from "../../../assets/vuejs.svg";

const Technology = () => {
  return (
    <div className="py-8">
      <Marquee className="pt-16" speed={50} gradient={false} direction="right">
        <div className="flex gap-4">
          <div className="border border-white p-4 rounded-md shadow-md text-center text-white text-xl md:text-4xl font-extrabold font-serif px-4">
            <p
              className="text-xl md:text-2xl font-bold font-serif"
              style={{ fontFamily: "Atma, sans-serif", fontWeight: 400 }}
            >
              Brainstorming
            </p>
          </div>
          <div className="border border-white p-4 rounded-md shadow-md text-center text-white text-xl md:text-4xl font-extrabold font-serif px-4">
            <p
              className="text-xl md:text-2xl font-bold font-serif"
              style={{ fontFamily: "Atma, sans-serif", fontWeight: 400 }}
            >
              Brainstorming
            </p>
          </div>
        </div>
      </Marquee>
      <Marquee className="my-5" direction="left" speed={50}>
        <div className="border border-white p-4 rounded-md shadow-md text-center text-white text-xl md:text-4xl font-extrabold font-serif px-4">
          <p
            className="text-xl md:text-2xl font-bold font-serif"
            style={{ fontFamily: "Atma, sans-serif", fontWeight: 400 }}
          >
            Brainstorming
          </p>
        </div>
      </Marquee>
    </div>
  );
};

export default Technology;
