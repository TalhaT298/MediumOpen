// /* eslint-disable no-unused-vars */
// import React from "react";
// import chat6 from "../../../assets/banner6.png";
// const Talk = () => {
//   return (
//     <div className="py-10">
//       <div className="flex items-center justify-center ">
//         <div className="w-2/5 p-8 text-white bg-zinc-900 h-[550px]">
//           <div className="flex items-center justify-center ">
//             <div className="pt-40">
//               <div className="flex flex-col items-start">
//                 <h1 className="text-2xl font-bold mb-4">Talk about an image</h1>
//                 <p className="text-xl items-start">
//                   Take or upload an image and ask ChatGPT about it.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="w-2/5 flex items-center justify-center bg-blue-100">
//           <div className="b   h-[550px]  flex items-center justify-center">
//             <div className="w-[520px] h-[550px] ">
//               <img src={chat6} alt="" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Talk;


/* eslint-disable no-unused-vars */
import React from "react";
import chat6 from "../../../assets/banner6.png";

const Talk = () => {
  return (
    <div className="py-10">
      <div className="flex flex-col md:flex-row items-center justify-center">
        {/* Text Section */}
        <div className="w-full md:w-2/5 p-6 md:p-8 text-white bg-zinc-900 h-auto md:h-[550px]">
          <div className="flex flex-col items-center md:items-start justify-center h-full">
            <h1 className="text-xl md:text-2xl font-bold mb-4">Talk about an image</h1>
            <p className="text-base md:text-xl text-center md:text-left">
              Take or upload an image and ask ChatGPT about it.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-2/5 flex items-center justify-center bg-blue-100">
          <div className="bg-white w-full md:w-auto h-auto md:h-[550px] flex items-center justify-center">
            <div className="w-full max-w-[520px] h-auto md:h-[550px]">
              <img
                src={chat6}
                alt="Talk about an image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Talk;
