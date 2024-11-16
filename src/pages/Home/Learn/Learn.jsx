// /* eslint-disable no-unused-vars */
// import React from 'react';
// import banner4 from "../../../assets/banner4.png";
// const Learn = () => {
//     return (
//         <>
//       <div className="flex items-center justify-center  bg-black text-center text-white pt-14">
//         <div>
//           <h1
//             className="text-3xl md:text-5xl font-semibold mb-4"
//             style={{ fontFamily: "Atma, sans-serif", fontWeight: 600 }}
//           >
//             Learn something new. Dive into a <br /> hobby. Answer complex questions.
//           </h1>
//           <a
//             href="https://chatgpt.com/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <p className="text-white underline text-lg mt-4 cursor-pointer">
//               Learn more about writing with ChatGPT &gt;
//             </p>
//           </a>
//         </div>
//       </div>
//       <div className="flex justify-center items-center h-screen">
//         <img className="w-4/5" src={banner4} alt="" />
//       </div>
//     </>
//     );
// };

// export default Learn;

/* eslint-disable no-unused-vars */
import React from "react";
import banner4 from "../../../assets/banner4.png";

const Learn = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center bg-black text-center text-white pt-14 px-4">
        <div>
          <h1
            className="text-xl md:text-3xl lg:text-5xl font-semibold mb-4"
            style={{ fontFamily: "Atma, sans-serif", fontWeight: 600 }}
          >
            Learn something new. Dive into a <br className="hidden md:block" />
            hobby. Answer complex questions.
          </h1>
          <a
            href="https://chatgpt.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-white underline text-sm md:text-lg mt-4 cursor-pointer">
              Learn more about writing with ChatGPT &gt;
            </p>
          </a>
        </div>
      </div>

      {/* Banner Section */}
      <div className="flex justify-center items-center h-auto md:h-screen p-4">
        <img
          className="w-full md:w-4/5 object-contain"
          src={banner4}
          alt="Learn Banner"
        />
      </div>
    </>
  );
};

export default Learn;
