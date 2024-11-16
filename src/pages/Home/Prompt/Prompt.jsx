/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";

const Prompt = () => {
  return (
    <>
      <div className="lg:block hidden">
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
                    <span className="font-extrabold">[বিষয় বা নিবন্ধ]</span> এর
                    মূল বিষয়বস্তু সংক্ষেপে বলতে পারেন?
                  </p>
                  <p>
                    উদাহরণ: "আপনি কি আমাকে জলবায়ু পরিবর্তন সম্পর্কিত নিবন্ধটির
                    মূল বিষয়গুলো সংক্ষেপে বলতে পারেন?"
                  </p>
                  <p>
                    ব্যাখ্যা: এটি দীর্ঘ পাঠকে সংক্ষিপ্ত আকারে জানার সুযোগ দেয়,
                    মূল ধারণাগুলি সহজে বোঝা যায়।
                  </p>
                </div>
              </div>
              <div className="h-2/5 ">
                <div
                  className="flex flex-col text-xl text-center justify-center items-center"
                  style={{ fontFamily: "Atma, sans-serif", fontWeight: 400 }}
                >
                  <p>
                    আমি <span className="font-extrabold">[বিশেষ বিষয়]</span>{" "}
                    সম্পর্কে কোন গুরুত্বপূর্ণ বিষয়গুলো জানা উচিত?
                  </p>
                  <p>
                    উদাহরণ: "মেশিন লার্নিং সম্পর্কে কোন গুরুত্বপূর্ণ বিষয়গুলো
                    জানা উচিত?
                  </p>
                  <p>
                    ব্যাখ্যা: এটি দ্রুত বিষয়ে একটি সংক্ষিপ্ত ধারণা বা
                    রিফ্রেশারের জন্য উপযুক্ত।
                  </p>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="w-2/5 flex flex-col border border-white">
              <div className="h-4/5   border-b border-white">
                <div
                  className="flex flex-col text-2xl text-center justify-center items-center"
                  style={{ fontFamily: "Atma, sans-serif", fontWeight: 500 }}
                >
                  <p>
                    আপনি কি <span className="font-extrabold">[ধারণা] </span> সহজ
                    ভাষায় ব্যাখ্যা করতে পারবেন?
                  </p>
                  <p>উদাহরণ: "ব্লকচেইন সহজ ভাষায় ব্যাখ্যা করতে পারবেন?"</p>
                  <p>
                    ব্যাখ্যা: এটি জটিল ধারণাগুলোকে সহজ ভাষায় ব্যাখ্যা করতে
                    সাহায্য করে।
                  </p>
                </div>
              </div>
              <div className="h-1/5 ">
                <div
                  className="flex flex-col text-xs text-center justify-center items-center"
                  style={{ fontFamily: "Atma, sans-serif", fontWeight: 500 }}
                >
                  <p>
                    মানুষ সাধারণত{" "}
                    <span className="font-extrabold">[বিষয়] </span> সম্পর্কে
                    কোন কোন প্রশ্ন করে?
                  </p>
                  <p>
                    উদাহরণ: "মানুষ সাধারণত ব্যক্তিগত অর্থনীতি সম্পর্কে কোন
                    প্রশ্নগুলো করে?"
                  </p>
                  <p>
                    ব্যাখ্যা: এটি সাধারণ প্রশ্নগুলো জানতে সাহায্য করে, যা
                    লেখালেখি বা আলোচনার জন্য উপযোগী।
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
                  style={{ fontFamily: "Atma, sans-serif", fontWeight: 500 }}
                >
                  <p>
                    আপনি কি{" "}
                    <span className="font-extrabold">[থিম বা চরিত্র]</span>{" "}
                    নিয়ে একটি সৃজনশীল গল্প তৈরি করতে পারেন?
                  </p>
                  <p>
                    উদাহরণ: "আপনি কি একজন গোয়েন্দা সম্পর্কে একটি গল্প তৈরি করতে
                    পারেন, যে প্রযুক্তি ব্যবহার করে অপরাধ সমাধান করে?"
                  </p>
                  <p>
                    ব্যাখ্যা: এটি গল্প রচনার অনুপ্রেরণা দেয়, চর্চা বা বিনোদনের
                    জন্য উপযোগী।
                  </p>
                </div>
              </div>
              <div className="flex-1   border-b border-white">
                <div
                  className="flex flex-col text-base text-center justify-center items-center"
                  style={{ fontFamily: "Atma, sans-serif", fontWeight: 500 }}
                >
                  <p>
                    আমাকে{" "}
                    <span className="font-extrabold">
                      [প্রকল্প বা কন্টেন্টের ধরন]
                    </span>
                    এর জন্য কিছু আইডিয়া ভাবতে সাহায্য করুন।
                  </p>
                  <p>
                    উদাহরণ: "আমাকে স্বাস্থ্যকর খাদ্য নিয়ে একটি ব্লগ পোস্টের
                    জন্য কিছু আইডিয়া দিতে পারেন?"
                  </p>
                  <p>
                    ব্যাখ্যা: এটি বিভিন্ন আইডিয়া জোগাড় করতে সাহায্য করে, যা
                    লেখালেখির প্রাথমিক দিক হিসেবে কাজে লাগে।
                  </p>
                </div>
              </div>
              <div className="flex-1 ">
                <div
                  className="flex flex-col text-base text-center justify-center items-center"
                  style={{ fontFamily: "Atma, sans-serif", fontWeight: 500 }}
                >
                  <p>
                    আপনি কি{" "}
                    <span className="font-extrabold">[নির্দিষ্ট বিষয়] </span>{" "}
                    নিয়ে একটি কবিতা লিখতে পারেন?
                  </p>
                  <p>উদাহরণ: "আপনি কি শরতের উপর একটি কবিতা লিখতে পারেন?"</p>
                  <p>
                    ব্যাখ্যা: এটি সৃজনশীল প্রকাশের জন্য বা প্রকল্পে কাব্যিক
                    ছোঁয়া দিতে সহায়ক।
                  </p>
                </div>
              </div>
            </div>

            {/* Right Part: Full Height */}
            <div className="w-1/2 ">
              <div
                className="flex flex-col text-2xl text-center justify-center items-center pt-12"
                style={{ fontFamily: "Atma, sans-serif", fontWeight: 400 }}
              >
                <p>
                  আমার <span className="font-extrabold">[বিষয়] </span> নিয়ে
                  একটি আকর্ষণীয় শিরোনাম দরকার।
                </p>
                <p>
                  উদাহরণ: "আমার ধ্যানের উপকারিতা নিয়ে একটি আকর্ষণীয় শিরোনাম
                  দরকার।"
                </p>
                <p>ব্যাখ্যা: আকর্ষণীয় শিরোনাম পাঠকদের আকৃষ্ট করতে সহায়ক।</p>
              </div>
            </div>
          </div>

          {/* New Bottom Section ---------*/}
          <div className="flex flex-1 border-y border-x border-white">
            {/* Right Part: Two Equal Stacked Sections */}
            <div className="w-1/2 flex flex-col">
              <div className="flex-1  border-b border-white">
                <div
                  className="flex flex-col text-lg text-center justify-center items-center"
                  style={{ fontFamily: "Atma, sans-serif", fontWeight: 500 }}
                >
                  <p>
                    আমি{" "}
                    <span className="font-extrabold">[দক্ষতা বা বিষয়] </span>
                    শিখতে সেরা উপকরণগুলো কী?
                  </p>
                  <p>উদাহরণ: "পাইথন প্রোগ্রামিং শিখতে সেরা উপকরণগুলো কী?</p>
                  <p>ব্যাখ্যা: এটি মানসম্মত শিক্ষণ উপকরণের সন্ধান দেয়।</p>
                </div>
              </div>
              <div className="flex-1 ">
                <div
                  className="flex flex-col text-lg text-center justify-center items-center"
                  style={{ fontFamily: "Atma, sans-serif", fontWeight: 500 }}
                >
                  <p>
                    আমি{" "}
                    <span className="font-extrabold">[বিষয় বা দক্ষতা]</span>
                    আয়ত্ত করার জন্য একটি অধ্যয়ন পরিকল্পনা করতে সাহায্য করুন।
                  </p>
                  <p>
                    উদাহরণ: "আমি ছয় মাসে স্প্যানিশ আয়ত্ত করার জন্য একটি
                    পরিকল্পনা চাই।"
                  </p>
                  <p>
                    ব্যাখ্যা: এটি একটি সংগঠিত পরিকল্পনা তৈরি করতে সহায়ক, যা
                    অধ্যয়নে সাহায্য করে।
                  </p>
                </div>
              </div>
            </div>
            {/* Left Part: One Full Section */}
            <div className="w-3/5 flex flex-col border border-white">
              <div className="h-3/5  border-b border-white">
                <div
                  className="flex flex-col text-lg text-center justify-center items-center"
                  style={{ fontFamily: "Atma, sans-serif", fontWeight: 500 }}
                >
                  <p>
                    আমাকে{" "}
                    <span className="font-extrabold">
                      [ধারণা A] এবং [ধারণা B]
                    </span>{" "}
                    এর প্রধান পার্থক্যগুলো ব্যাখ্যা করুন।
                  </p>
                  <p>
                    উদাহরণ: "নবায়নযোগ্য এবং অ-নবায়নযোগ্য জ্বালানি মধ্যে
                    পার্থক্যগুলো ব্যাখ্যা করুন।"
                  </p>
                  <p>ব্যাখ্যা: এটি তুলনামূলক ধারণা বুঝতে সহায়ক।</p>
                </div>
              </div>
              <div className="h-2/5 ">
                <div
                  className="flex flex-col text-lg text-center justify-center items-center"
                  style={{ fontFamily: "Atma, sans-serif", fontWeight: 500 }}
                >
                  <p>
                    আমি <span className="font-extrabold">[বিশেষ বিষয়]</span>{" "}
                    নিয়ে একটি সাক্ষাৎকারের জন্য প্রস্তুতি নিতে সাহায্য করুন।
                  </p>
                  <p>
                    উদাহরণ: "ডিজিটাল মার্কেটিং নিয়ে একটি সাক্ষাৎকারের জন্য
                    প্রস্তুতি নিতে সাহায্য করুন।"
                  </p>
                  <p>
                    ব্যাখ্যা: এটি সাধারণ প্রশ্ন এবং টিপস দেয়, যা চর্চার জন্য
                    সহায়ক।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block lg:hidden py-20 pb-40">
        <div className="flex flex-col h-screen">
          {/* Top Section */}
          <div className="flex flex-col w-full border border-white mb-4">
            <div className="flex flex-col w-full border-b border-white p-4">
              <div
                className="flex flex-col text-xl text-center justify-center items-center"
                style={{ fontFamily: "Atma, sans-serif", fontWeight: 400 }}
              >
                <p>
                  আপনি কি আমাকে{" "}
                  <span className="font-extrabold">[বিষয় বা নিবন্ধ]</span> এর
                  মূল বিষয়বস্তু সংক্ষেপে বলতে পারেন?
                </p>
                <p>
                  উদাহরণ: "আপনি কি আমাকে জলবায়ু পরিবর্তন সম্পর্কিত নিবন্ধটির
                  মূল বিষয়গুলো সংক্ষেপে বলতে পারেন?"
                </p>
                <p>
                  ব্যাখ্যা: এটি দীর্ঘ পাঠকে সংক্ষিপ্ত আকারে জানার সুযোগ দেয়,
                  মূল ধারণাগুলি সহজে বোঝা যায়।
                </p>
              </div>
            </div>
            <div className="flex flex-col w-full p-4">
              <div
                className="flex flex-col text-xl text-center justify-center items-center"
                style={{ fontFamily: "Atma, sans-serif", fontWeight: 400 }}
              >
                <p>
                  আমি <span className="font-extrabold">[বিশেষ বিষয়]</span>{" "}
                  সম্পর্কে কোন গুরুত্বপূর্ণ বিষয়গুলো জানা উচিত?
                </p>
                <p>
                  উদাহরণ: "মেশিন লার্নিং সম্পর্কে কোন গুরুত্বপূর্ণ বিষয়গুলো
                  জানা উচিত?"
                </p>
                <p>
                  ব্যাখ্যা: এটি দ্রুত বিষয়ে একটি সংক্ষিপ্ত ধারণা বা রিফ্রেশারের
                  জন্য উপযুক্ত।
                </p>
              </div>
            </div>
          </div>

          {/* Middle Section */}
          <div className="flex flex-col w-full border border-white mb-4">
            <div className="flex flex-col w-full border-b border-white p-4">
              <div
                className="flex flex-col text-2xl text-center justify-center items-center"
                style={{ fontFamily: "Atma, sans-serif", fontWeight: 500 }}
              >
                <p>
                  আপনি কি <span className="font-extrabold">[ধারণা]</span> সহজ
                  ভাষায় ব্যাখ্যা করতে পারবেন?
                </p>
                <p>উদাহরণ: "ব্লকচেইন সহজ ভাষায় ব্যাখ্যা করতে পারবেন?"</p>
                <p>
                  ব্যাখ্যা: এটি জটিল ধারণাগুলোকে সহজ ভাষায় ব্যাখ্যা করতে
                  সাহায্য করে।
                </p>
              </div>
            </div>
            <div className="flex flex-col w-full p-4">
              <div
                className="flex flex-col text-xs text-center justify-center items-center"
                style={{ fontFamily: "Atma, sans-serif", fontWeight: 500 }}
              >
                <p>
                  মানুষ সাধারণত <span className="font-extrabold">[বিষয়]</span>{" "}
                  সম্পর্কে কোন কোন প্রশ্ন করে?
                </p>
                <p>
                  উদাহরণ: "মানুষ সাধারণত ব্যক্তিগত অর্থনীতি সম্পর্কে কোন
                  প্রশ্নগুলো করে?"
                </p>
                <p>
                  ব্যাখ্যা: এটি সাধারণ প্রশ্নগুলো জানতে সাহায্য করে, যা লেখালেখি
                  বা আলোচনার জন্য উপযোগী।
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col w-full border border-white">
            <div className="flex flex-col w-full border-b border-white p-4">
              <div
                className="flex flex-col text-lg text-center justify-center items-center"
                style={{ fontFamily: "Atma, sans-serif", fontWeight: 500 }}
              >
                <p>
                  আমি <span className="font-extrabold">[দক্ষতা বা বিষয়]</span>{" "}
                  শিখতে সেরা উপকরণগুলো কী?
                </p>
                <p>উদাহরণ: "পাইথন প্রোগ্রামিং শিখতে সেরা উপকরণগুলো কী?</p>
                <p>ব্যাখ্যা: এটি মানসম্মত শিক্ষণ উপকরণের সন্ধান দেয়।</p>
              </div>
            </div>
            <div className="flex flex-col w-full p-4">
              <div
                className="flex flex-col text-lg text-center justify-center items-center"
                style={{ fontFamily: "Atma, sans-serif", fontWeight: 500 }}
              >
                <p>
                  আমি <span className="font-extrabold">[বিষয় বা দক্ষতা]</span>{" "}
                  আয়ত্ত করার জন্য একটি অধ্যয়ন পরিকল্পনা করতে সাহায্য করুন।
                </p>
                <p>
                  উদাহরণ: "আমি ছয় মাসে স্প্যানিশ আয়ত্ত করার জন্য একটি
                  পরিকল্পনা চাই।"
                </p>
                <p>
                  ব্যাখ্যা: এটি একটি সংগঠিত পরিকল্পনা তৈরি করতে সহায়ক, যা
                  অধ্যয়নে সাহায্য করে।
                </p>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </>
  );
};

export default Prompt;
