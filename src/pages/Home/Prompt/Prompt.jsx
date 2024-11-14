/* eslint-disable no-unused-vars */
import React from 'react';

const Prompt = () => {
  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="w-3/5 flex flex-col border border-white">
        <div className="h-3/5  border-b border-white">
          {/* Upper Left (60% of left section) */}
        </div>
        <div className="h-2/5 ">
          {/* Lower Left (40% of left section) */}
        </div>
      </div>

      {/* Right Section */}
      <div className="w-2/5 flex flex-col border border-white">
        <div className="h-4/5  border-b border-white">
          {/* Upper Right (80% of right section) */}
        </div>
        <div className="h-1/5 ">
          {/* Lower Right (20% of right section) */}
        </div>
      </div>
    </div>
  );
};

export default Prompt;
