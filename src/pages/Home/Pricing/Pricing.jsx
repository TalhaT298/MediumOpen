/* eslint-disable no-unused-vars */
import React from 'react';

const Pricing = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 p-8  text-white">
            {/* Free Plan */}
            <div className="w-full md:w-1/2 lg:w-1/3 bg-zinc-800 rounded-lg p-6 h-[550px]">
                <h3 className="text-xl font-bold">Free</h3>
                <p className="text-4xl font-semibold my-4">$0 <span className="text-lg font-normal">/ month</span></p>
                <p className="text-white">For individuals just getting started with ChatGPT</p>
                <button className="bg-white text-black font-bold py-2 px-4 rounded-full mt-4">Start now</button>
                <ul className="mt-6 space-y-2 font-extrabold">
                    <li>✔ Assistance with writing, problem solving and more</li>
                    <li>✅ Access to GPT-4o mini</li>
                    <li>✅ Limited access to GPT-4o</li>
                    <li>✅ Limited access to data analysis, file uploads, vision, web browsing, and image generation</li>
                    <li>✅ Use custom GPTs</li>
                </ul>
            </div>

            {/* Plus Plan */}
            <div className="w-full md:w-1/2 lg:w-1/3 bg-zinc-800 rounded-lg p-6">
                <h3 className="text-xl font-bold">Plus</h3>
                <p className="text-4xl font-semibold my-4">$20 <span className="text-lg font-normal">/ month</span></p>
                <p className="text-white">For individuals looking to amplify their productivity</p>
                <button className="bg-white text-black font-bold py-2 px-4 rounded-full mt-4">Start now</button>
                <ul className="mt-6 space-y-2">
                    <li>✅ Access to OpenAI o1-preview, OpenAI o1-mini</li>
                    <li>✅ Access to GPT-4, GPT-4o, GPT-4o mini</li>
                    <li>✅ Up to 5x more messages for GPT-4o</li>
                    <li>✅ Access to data analysis, file uploads, vision, and web browsing</li>
                    <li>✅ Access to Advanced Voice Mode</li>
                    <li>✅ DALL-E image generation</li>
                    <li>✅ Create and use custom GPTs</li>
                    <li>✅ Early access to new features</li>
                </ul>
            </div>
        </div>
    );
};

export default Pricing;
