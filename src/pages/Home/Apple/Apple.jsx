// /* eslint-disable no-unused-vars */
// import React from "react";
// import chat8 from "../../../assets/banner8.png";
// const Apple = () => {
//   return (
//     <div className="py-10">
//       <div className="flex items-center justify-center ">
//         <div className="w-2/5 p-8 text-white bg-zinc-900 h-[550px]">
//           <div className="flex items-center justify-center ">
//             <div className="pt-40">
//               <div className="flex flex-col items-start">
//                 <h1 className="text-3xl font-bold mb-4">Apple & ChatGPT</h1>
//                 <p className="text-xl items-start">
//                   At WWDC in June 2024, we announced a partnership with Apple to
//                   integrate ChatGPT into experiences within iOS, iPadOS, and
//                   macOS.
//                 </p>
//                 <a href=""><p>Learn More</p></a>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="w-2/5 flex items-center justify-center bg-blue-100">
//           <div className="b   h-[545px]  flex items-center justify-center">
//             <div className="w-[520px] h-[550px] ">
//               <img src={chat8} alt="" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Apple;

/* eslint-disable no-unused-vars */
import React from "react";
import chat8 from "../../../assets/banner8.png";

const Apple = () => {
  return (
    <div className="py-10">
      <div className="flex flex-col md:flex-row items-center justify-center">
        {/* Text Section */}
        <div className="w-full md:w-2/5 p-6 md:p-8 text-white bg-zinc-900 h-auto md:h-[550px]">
          <div className="flex flex-col items-center md:items-start justify-center h-full">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">
              Apple & ChatGPT
            </h1>
            <p className="text-base md:text-xl text-center md:text-left mb-4">
              At WWDC in June 2024, we announced a partnership with Apple to
              integrate ChatGPT into experiences within iOS, iPadOS, and macOS.
            </p>
            <a
              href="#"
              className="text-blue-400 underline text-sm md:text-base hover:text-blue-300"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-2/5 flex items-center justify-center bg-blue-100">
          <div className="bg-white w-full md:w-auto h-auto md:h-[550px] flex items-center justify-center">
            <div className="w-full max-w-[520px] h-auto md:h-[550px]">
              <img
                src={chat8}
                alt="Apple and ChatGPT"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apple;
