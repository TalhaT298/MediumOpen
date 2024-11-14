/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";

const Prompt = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Top Section */}
      <div className="flex flex-1">
        {/* Left Section */}
        <div className="w-3/5 flex flex-col border border-white">
          <div className="h-3/5  border-b border-white">
            <div
              className="flex flex-col text-xl text-center justify-center items-center"
              style={{ fontFamily: "Atma, sans-serif", fontWeight: 400 }}
            >
              <p>
                আপনি কি আমাকে{" "}
                <span className="font-extrabold">[বিষয় বা নিবন্ধ]</span> এর মূল
                বিষয়বস্তু সংক্ষেপে বলতে পারেন?
              </p>
              <p>
                উদাহরণ: "আপনি কি আমাকে জলবায়ু পরিবর্তন সম্পর্কিত নিবন্ধটির মূল
                বিষয়গুলো সংক্ষেপে বলতে পারেন?"
              </p>
              <p>
                ব্যাখ্যা: এটি দীর্ঘ পাঠকে সংক্ষিপ্ত আকারে জানার সুযোগ দেয়, মূল
                ধারণাগুলি সহজে বোঝা যায়।
              </p>
            </div>
          </div>
          <div className="h-2/5 ">
          <div
              className="flex flex-col text-xl text-center justify-center items-center"
              style={{ fontFamily: "Atma, sans-serif", fontWeight: 400 }}
            >
              <p>
              আমি{" "}
                <span className="font-extrabold">[বিশেষ বিষয়]</span> সম্পর্কে কোন গুরুত্বপূর্ণ বিষয়গুলো জানা উচিত?
              </p>
              <p>
              উদাহরণ: "মেশিন লার্নিং সম্পর্কে কোন গুরুত্বপূর্ণ বিষয়গুলো জানা উচিত?
              </p>
              <p>
              ব্যাখ্যা: এটি দ্রুত বিষয়ে একটি সংক্ষিপ্ত ধারণা বা রিফ্রেশারের জন্য উপযুক্ত।
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-2/5 flex flex-col border border-white">
          <div className="h-4/5   border-b border-white">
          <div
              className="flex flex-col text-2xl text-center justify-center items-center"
              style={{ fontFamily: "Atma, sans-serif", fontWeight: 400 }}
            >
              <p>
              আপনি কি{" "}
                <span className="font-extrabold">[ধারণা] </span>  সহজ ভাষায় ব্যাখ্যা করতে পারবেন?
              </p>
              <p>
              উদাহরণ: "ব্লকচেইন সহজ ভাষায় ব্যাখ্যা করতে পারবেন?"
              </p>
              <p>
              ব্যাখ্যা: এটি জটিল ধারণাগুলোকে সহজ ভাষায় ব্যাখ্যা করতে সাহায্য করে।
              </p>
            </div>
          </div>
          <div className="h-1/5 ">
          <div
              className="flex flex-col text-xs text-center justify-center items-center"
              style={{ fontFamily: "Atma, sans-serif", fontWeight: 400 }}
            >
              <p>
              মানুষ সাধারণত{" "}
                <span className="font-extrabold">[বিষয়] </span> সম্পর্কে কোন কোন প্রশ্ন করে?
              </p>
              <p>
              উদাহরণ: "মানুষ সাধারণত ব্যক্তিগত অর্থনীতি সম্পর্কে কোন প্রশ্নগুলো করে?"
              </p>
              <p>
              ব্যাখ্যা: এটি সাধারণ প্রশ্নগুলো জানতে সাহায্য করে, যা লেখালেখি বা আলোচনার জন্য উপযোগী।
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Section --------------------------------------------*/}
      <div className="flex flex-1 border-x border-white">
        {/* Left Part: 3 equal vertical parts */}
        <div className="w-1/2 flex flex-col border-r border-white">
          <div className="flex-1   border-b border-white">
          <div
              className="flex flex-col text-base text-center justify-center items-center"
              style={{ fontFamily: "Atma, sans-serif", fontWeight: 400 }}
            >
              <p>
              আপনি কি {" "}
                <span className="font-extrabold">[থিম বা চরিত্র]</span>  নিয়ে একটি সৃজনশীল গল্প তৈরি করতে পারেন?
              </p>
              <p>
              উদাহরণ: "আপনি কি একজন গোয়েন্দা সম্পর্কে একটি গল্প তৈরি করতে পারেন, যে প্রযুক্তি ব্যবহার করে অপরাধ সমাধান করে?"
              </p>
              <p>
              ব্যাখ্যা: এটি গল্প রচনার অনুপ্রেরণা দেয়, চর্চা বা বিনোদনের জন্য উপযোগী।
              </p>
            </div>
          </div>
          <div className="flex-1   border-b border-white">
          <div
              className="flex flex-col text-base text-center justify-center items-center"
              style={{ fontFamily: "Atma, sans-serif", fontWeight: 400 }}
            >
              <p>
              আমাকে {" "}
                <span className="font-extrabold">[প্রকল্প বা কন্টেন্টের ধরন]</span>এর জন্য কিছু আইডিয়া ভাবতে সাহায্য করুন।
              </p>
              <p>
              উদাহরণ: "আমাকে স্বাস্থ্যকর খাদ্য নিয়ে একটি ব্লগ পোস্টের জন্য কিছু আইডিয়া দিতে পারেন?"
              </p>
              <p>
              ব্যাখ্যা: এটি বিভিন্ন আইডিয়া জোগাড় করতে সাহায্য করে, যা লেখালেখির প্রাথমিক দিক হিসেবে কাজে লাগে।
              </p>
            </div>
          </div>
          <div className="flex-1 ">
          <div
              className="flex flex-col text-base text-center justify-center items-center"
              style={{ fontFamily: "Atma, sans-serif", fontWeight: 400 }}
            >
              <p>
              আপনি কি {" "}
                <span className="font-extrabold">[থিম বা চরিত্র]</span>  নিয়ে একটি সৃজনশীল গল্প তৈরি করতে পারেন?
              </p>
              <p>
              উদাহরণ: "আপনি কি একজন গোয়েন্দা সম্পর্কে একটি গল্প তৈরি করতে পারেন, যে প্রযুক্তি ব্যবহার করে অপরাধ সমাধান করে?"
              </p>
              <p>
              ব্যাখ্যা: এটি গল্প রচনার অনুপ্রেরণা দেয়, চর্চা বা বিনোদনের জন্য উপযোগী।
              </p>
            </div>
          </div>
        </div>

        {/* Right Part: Full Height */}
        <div className="w-1/2 ">{/* Right Part */}</div>
      </div>

      {/* New Bottom Section ---------*/}
      <div className="flex flex-1 border-y border-x border-white">
        {/* Right Part: Two Equal Stacked Sections */}
        <div className="w-1/2 flex flex-col">
          <div className="flex-1  border-b border-white">
            {/* Upper Right Part */}
          </div>
          <div className="flex-1 ">{/* Lower Right Part */}</div>
        </div>
        {/* Left Part: One Full Section */}
        <div className="w-3/5 flex flex-col border border-white">
          <div className="h-3/5  border-b border-white">
            {/* Upper Left (60% of left section) */}
          </div>
          <div className="h-2/5 ">{/* Lower Left (40% of left section) */}</div>
        </div>
      </div>
    </div>
  );
};

export default Prompt;
