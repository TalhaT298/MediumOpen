/* eslint-disable no-unused-vars */
import React from 'react';
import chat7 from "../../../assets/banner7.png";
const DalE = () => {
    return (
        <div className="py-10">
      <div className="flex items-center justify-center ">
        <div className="w-2/5 p-8 text-white bg-zinc-900 h-[550px]">
          <div className="flex items-center justify-center ">
            <div className="pt-40">
              <div className="flex flex-col items-start">
                <h1 className="text-3xl font-bold mb-4">Create images</h1>
                <p className="text-xl items-start">
                Ask ChatGPT to create images using a simple sentence or detailed paragraph.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-2/5 flex items-center justify-center bg-blue-100">
          <div className="b   h-[550px]  flex items-center justify-center">
            <div className="w-[520px] h-[550px] ">
              <img src={chat7} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default DalE;