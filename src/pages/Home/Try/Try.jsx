/* eslint-disable no-unused-vars */
import { RiseOutlined } from '@ant-design/icons';
import React from 'react';

const Try = () => {
    return (
        <div className='pt-10'>
            <div className="flex items-center justify-center bg-zinc-900 rounded-md py-10">
    <div className="p-10 text-center rounded-lg">
        <p className="text-white text-4xl font-semibold mb-6" style={{ fontFamily: "Atma, sans-serif", fontWeight: 600 }}>Join hundreds of millions of <br /> users and try বাংলাGPT today.</p>
        <button className="px-6 py-2 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition">
            Try ChatGPT <RiseOutlined />
        </button>
    </div>
</div>

        </div>
    );
};

export default Try;