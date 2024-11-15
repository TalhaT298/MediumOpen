// /* eslint-disable no-unused-vars */
// import React from 'react';
// import chat2 from "../../../assets/chat2.mp4";
// const Web = () => {
//     return (
//         <div className="py-10">
      
//       <div className="flex items-center justify-center ">
//         <div className="w-2/5 p-8 text-white bg-zinc-900 h-[550px]">
//           <div className="flex items-center justify-center ">
//             <div className="pt-40">
//               <div className="flex flex-col items-start">
//                 <h1 className="text-2xl font-bold mb-4">
//                 Search the web
//                 </h1>
//                 <p className="text-xl items-start">
//                 Click the web search icon to get fast, timely <br />
//                 answers with links to relevant web sources.
//                 </p>
//                 <a href=""><p className='text-xl'>Learn More</p></a>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="w-2/5 flex items-center justify-center bg-blue-100">
//           <div className="bg-white  w- h-[550px]  flex items-center justify-center">
//             <div className="w-[520px] h-[550px] ">
//               <video
//                 src={chat2}
//                 className="w-full h-full "
//                 controls
//                 autoPlay
//                 loop
//               ></video>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     );
// };

// export default Web;

/* eslint-disable no-unused-vars */
import React from "react";
import chat2 from "../../../assets/chat2.mp4";

const Web = () => {
  return (
    <div className="py-10">
      <div className="flex flex-col md:flex-row items-center justify-center">
        {/* Text Section */}
        <div className="w-full md:w-2/5 p-6 md:p-8 text-white bg-zinc-900 h-auto md:h-[550px]">
          <div className="flex flex-col items-center md:items-start justify-center h-full">
            <h1 className="text-xl md:text-2xl font-bold mb-4">Search the web</h1>
            <p className="text-base md:text-xl mb-4 text-center md:text-left">
              Click the web search icon to get fast, timely <br />
              answers with links to relevant web sources.
            </p>
            <a href="#" className=" underline">
              Learn More
            </a>
          </div>
        </div>

        {/* Video Section */}
        <div className="w-full md:w-2/5 flex items-center justify-center bg-blue-100">
          <div className="bg-white w-full md:w-auto h-auto md:h-[550px] flex items-center justify-center">
            <div className="w-full max-w-[520px] h-auto md:h-[550px]">
              <video
                src={chat2}
                className="w-full h-full"
                controls
                autoPlay
                loop
              ></video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Web;
