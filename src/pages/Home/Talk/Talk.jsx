/* eslint-disable no-unused-vars */
import React from 'react';
import chat6 from "../../../assets/banner6.png";
const Talk = () => {
    return (
        <div className="py-10">
        <div className="flex items-center justify-center ">
          <div className="w-2/5 p-8 text-white bg-zinc-900 h-[550px]">
            <div className="flex items-center justify-center ">
              <div className="pt-40">
                <div className="flex flex-col items-start">
                  <h1 className="text-2xl font-bold mb-4">
                  Talk about an image
                  </h1>
                  <p className="text-xl items-start">
                  Take or upload an image and ask ChatGPT about it.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-2/5 flex items-center justify-center bg-blue-100">
            <div className="bg-white  w- h-[550px]  flex items-center justify-center">
              <div className="w-[520px] h-[550px] ">
                <img src={chat6} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Talk;