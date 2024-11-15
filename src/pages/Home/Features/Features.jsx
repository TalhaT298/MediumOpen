/* eslint-disable no-unused-vars */
import React from "react";
import chat1 from "../../../assets/chat1.mp4";
const Features = () => {
  return (
    <div className="py-10">
      <div className="flex items-center justify-center  bg-black text-center pb-10 text-white">
        <div>
          <h1
            className="text-3xl md:text-5xl font-semibold mb-4"
            style={{ fontFamily: "Atma, sans-serif", fontWeight: 600 }}
          >
            Explore more features in বাংলাGPT
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-center ">
        <div className="w-2/5 p-8 text-white bg-zinc-900 h-[550px]">
          <div className="flex items-center justify-center ">
            <div className="pt-40">
              <div className="flex flex-col items-start">
                <h1 className="text-2xl font-bold mb-4">
                  Type, talk, and use it your way
                </h1>
                <p className="text-xl items-start">
                  With ChatGPT, you can type or start a real-time voice
                  conversation by tapping the soundwave icon in the mobile app.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-2/5 flex items-center justify-center bg-blue-100">
          <div className="bg-white  w- h-[550px]  flex items-center justify-center">
            <div className="w-[500px] h-[550px] ">
              <video
                src={chat1}
                className="w-full h-full rounded-lg"
                controls
                autoPlay
                loop
              ></video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
