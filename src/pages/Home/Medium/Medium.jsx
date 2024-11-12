/* eslint-disable no-unused-vars */
import React from 'react';

const Medium = () => {
    return (
        <div className="flex flex-col items-center justify-center h-80  bg-black text-white">
            <h1 className="text-xl font-light" style={{ fontFamily: "Atma, sans-serif", fontWeight: 400 }}> বাংলাGPT</h1>
            <h2 className="text-4xl font-extrabold mt-4 mb-2 text-center" style={{ fontFamily: "Atma, sans-serif", fontWeight: 600 }}>
                Get answers. Find inspiration. <br /> Be more productive.
            </h2>
            <p className="text-lg font-light mt-2 mb-8 text-center max-w-md">
               বাংলা GPT এমন একটি প্ল্যাটফর্ম, যেখানে আপনি বাংলা প্রম্পটের মাধ্যমে সহজেই বাংলায় ChatGPT-এর ব্যবহার আরও কার্যকরভাবে করতে পারবেন।
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
