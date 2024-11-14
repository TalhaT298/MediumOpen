/* eslint-disable no-unused-vars */
import React from 'react';

const Prompt = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Top Section */}
      <div className="flex flex-1">
        {/* Left Section */}
        <div className="w-3/5 flex flex-col border border-white">
          <div className="h-3/5 bg-red-400 border-b border-white">
            {/* Upper Left (60% of left section) */}
          </div>
          <div className="h-2/5 bg-blue-400">
            {/* Lower Left (40% of left section) */}
          </div>
        </div>

        {/* Right Section */}
        <div className="w-2/5 flex flex-col border border-white">
          <div className="h-4/5 bg-green-400 border-b border-white">
            {/* Upper Right (80% of right section) */}
          </div>
          <div className="h-1/5 bg-yellow-400">
            {/* Lower Right (20% of right section) */}
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="flex flex-1 border-t border-white">
        {/* Left Part: 3 equal vertical parts */}
        <div className="w-1/2 flex flex-col border-r border-white">
          <div className="flex-1 bg-purple-400 border-b border-white">
            {/* 1st Left Part */}
          </div>
          <div className="flex-1 bg-pink-400 border-b border-white">
            {/* 2nd Left Part */}
          </div>
          <div className="flex-1 bg-teal-400">
            {/* 3rd Left Part */}
          </div>
        </div>

        {/* Right Part: Full Height */}
        <div className="w-1/2 bg-gray-400">
          {/* Right Part */}
        </div>
      </div>

      {/* New Bottom Section */}
      <div className="flex flex-1 border-t border-white">
        {/* Left Part: One Full Section */}
        <div className="w-1/2 bg-indigo-400 border-r border-white">
          {/* Left Single Part */}
        </div>

        {/* Right Part: Two Equal Stacked Sections */}
        <div className="w-1/2 flex flex-col">
          <div className="flex-1 bg-lime-400 border-b border-white">
            {/* Upper Right Part */}
          </div>
          <div className="flex-1 bg-orange-400">
            {/* Lower Right Part */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prompt;
