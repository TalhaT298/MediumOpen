/* eslint-disable no-unused-vars */
import React from 'react';

const Medium = () => {
    return (
        <div className="flex flex-col items-center justify-center  bg-black text-white">
            <h1 className="text-xl font-light">ChatGPT</h1>
            <h2 className="text-4xl font-bold mt-4 mb-2 text-center">
                Get answers. Find inspiration. <br /> Be more productive.
            </h2>
            <p className="text-lg font-light mt-2 mb-8 text-center max-w-md">
                Free to use. Easy to try. Just ask and ChatGPT can help with writing, learning, brainstorming, and more.
            </p>
            <div className="flex gap-4">
                <button className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-300">
                    Start now
                </button>
                <button className="px-6 py-3 border border-white rounded-full font-medium hover:bg-gray-700">
                    Download the app
                </button>
            </div>
        </div>
    );
};

export default Medium;
