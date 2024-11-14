/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";

const Prompt = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Top Section */}
      <div className="flex flex-1">
        {/* Left Section */}
        <div className="w-3/5 flex flex-col border border-white">
          <div className="h-3/5  border-b border-white">
            <div
              className="flex flex-col text-xl text-center justify-center items-center"
              style={{ fontFamily: "Atma, sans-serif", fontWeight: 400 }}
            >
              <p>
                আপনি কি আমাকে{" "}
                <span className="font-extrabold">[বিষয় বা নিবন্ধ]</span> এর মূল
                বিষয়বস্তু সংক্ষেপে বলতে পারেন?
              </p>
              <p>
                উদাহরণ: "আপনি কি আমাকে জলবায়ু পরিবর্তন সম্পর্কিত নিবন্ধটির মূল
                বিষয়গুলো সংক্ষেপে বলতে পারেন?"
              </p>
              <p>
                ব্যাখ্যা: এটি দীর্ঘ পাঠকে সংক্ষিপ্ত আকারে জানার সুযোগ দেয়, মূল
                ধারণাগুলি সহজে বোঝা যায়।
              </p>
            </div>
          </div>
          <div className="h-2/5 ">
          
          {/* Lower Left (40% of left section) */}</div>
        </div>

        {/* Right Section */}
        <div className="w-2/5 flex flex-col border border-white">
          <div className="h-4/5   border-b border-white">
            {/* Upper Right (80% of right section) */}
          </div>
          <div className="h-1/5 ">
            {/* Lower Right (20% of right section) */}
          </div>
        </div>
      </div>

      {/* Middle Section --------------------------------------------*/}
      <div className="flex flex-1 border-x border-white">
        {/* Left Part: 3 equal vertical parts */}
        <div className="w-1/2 flex flex-col border-r border-white">
          <div className="flex-1   border-b border-white">
            {/* 1st Left Part */}
          </div>
          <div className="flex-1   border-b border-white">
            {/* 2nd Left Part */}
          </div>
          <div className="flex-1 ">{/* 3rd Left Part */}</div>
        </div>

        {/* Right Part: Full Height */}
        <div className="w-1/2 ">{/* Right Part */}</div>
      </div>

      {/* New Bottom Section ---------*/}
      <div className="flex flex-1 border-y border-x border-white">
        {/* Right Part: Two Equal Stacked Sections */}
        <div className="w-1/2 flex flex-col">
          <div className="flex-1  border-b border-white">
            {/* Upper Right Part */}
          </div>
          <div className="flex-1 ">{/* Lower Right Part */}</div>
        </div>
        {/* Left Part: One Full Section */}
        <div className="w-3/5 flex flex-col border border-white">
          <div className="h-3/5  border-b border-white">
            {/* Upper Left (60% of left section) */}
          </div>
          <div className="h-2/5 ">{/* Lower Left (40% of left section) */}</div>
        </div>
      </div>
    </div>
  );
};

export default Prompt;
