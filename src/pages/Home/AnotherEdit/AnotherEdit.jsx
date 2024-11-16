// /* eslint-disable no-unused-vars */
// import React from 'react';
// import banner3 from "../../../assets/banner3.png";
// const AnotherEdit = () => {
//     return (
//         <>
//       <div className="flex items-center justify-center  bg-black text-center text-white pt-14">
//         <div>
//           <h1
//             className="text-3xl md:text-5xl font-semibold mb-4"
//             style={{ fontFamily: "Atma, sans-serif", fontWeight: 600 }}
//           >
//             Generate and debug code. Automate <br /> repetitive tasks. Learn new APIs.
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
//         <img className="w-4/5" src={banner3} alt="" />
//       </div>
//     </>
//     );
// };

// export default AnotherEdit;

/* eslint-disable no-unused-vars */
import React from "react";
import banner3 from "../../../assets/banner3.png";

const AnotherEdit = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center bg-black text-center text-white pt-14 px-4">
        <div>
          <h1
            className="text-xl md:text-3xl lg:text-5xl font-semibold mb-4"
            style={{ fontFamily: "Atma, sans-serif", fontWeight: 600 }}
          >
            Generate and debug code. Automate <br className="hidden md:block" />
            repetitive tasks. Learn new APIs.
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
          src={banner3}
          alt="Another Edit Banner"
        />
      </div>
    </>
  );
};

export default AnotherEdit;
