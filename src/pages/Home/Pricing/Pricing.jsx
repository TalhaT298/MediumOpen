/* eslint-disable no-unused-vars */
import React from 'react';

const Pricing = () => {
    return (
        < >
        <div className='flex flex-col text-center py-5 pt-28'>
          <h1
            className="text-3xl md:text-5xl font-semibold mb-4"
            style={{ fontFamily: "Atma, sans-serif", fontWeight: 600 }}
          >
            Get started with বাংলাGPT today
          </h1>
          <a
            href="https://chatgpt.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-white underline text-lg mt-4 cursor-pointer">
            View pricing plans &gt;
            </p>
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 p-8  text-white">
            
            {/* Free Plan */}
            <div className="w-full md:w-1/2 lg:w-2/5 bg-zinc-800 rounded-lg p-6 h-[580px]">
                <h3 className="text-xl font-bold">Free</h3>
                <p className="text-2xl font-semibold my-4">$0 <span className="text-lg font-normal">/ month</span></p>
                <p className="text-white">For individuals just getting started with ChatGPT</p>
                <button className="bg-white text-black font-bold py-2 px-4 rounded-full mt-4">Start now</button>
                <ul className="mt-6 space-y-2 font-bold">
                    <li>✔ Assistance with writing, problem solving and more</li>
                    <li>✔ Access to GPT-4o mini</li>
                    <li>✅ Limited access to GPT-4o</li>
                    <li>✅ Limited access to data analysis, file uploads, vision, web browsing, and image generation</li>
                    <li>✅ Use custom GPTs</li>
                </ul>
            </div>

            {/* Plus Plan */}
            <div className="w-full md:w-1/2 lg:w-2/5 bg-zinc-800 rounded-lg p-6 h-[580px]">
                <h3 className="text-xl font-bold">Plus</h3>
                <p className="text-2xl font-semibold my-4">$20 <span className="text-lg font-normal">/ month</span></p>
                <p className="text-white">For individuals looking to amplify their productivity</p>
                <button className="bg-white text-black font-bold py-2 px-4 rounded-full mt-4">Start now</button>
                <ul className="mt-6 space-y-2 font-bold">
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
        </>
    );
};

export default Pricing;
