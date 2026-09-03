import React from "react";
import { FcServices } from "react-icons/fc";

const FeaturesSection = () => {
  return (
    <div className="mt-40">
      <h2 className="text-4xl font-bold flex items-center justify-center gap-2">
        <FcServices />
        আমাদের সেবাসমূহ
      </h2>
      <div>
        <div className="relative max-w-4xl mx-auto py-12 px-4">
          {/* SVG Dotted Connectors Layer */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox="0 0 800 1200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Connector 1: Card 1 (Left) -> Card 2 (Right) */}
            <path
              d="M 380 140 H 580 A 24 24 0 0 1 604 164 V 370"
              stroke="#94A3B8"
              strokeWidth="2.5"
              strokeDasharray="6 6"
              strokeLinecap="round"
            />

            {/* Connector 2: Card 2 (Right) -> Card 3 (Left) */}
            <path
              d="M 420 420 H 220 A 24 24 0 0 0 196 444 V 660"
              stroke="#94A3B8"
              strokeWidth="2.5"
              strokeDasharray="6 6"
              strokeLinecap="round"
            />

            {/* Connector 3: Card 3 (Left) -> Card 4 (Right) [ADDED] */}
            <path
              d="M 380 680 H 580 A 24 24 0 0 1 604 704 V 930"
              stroke="#94A3B8"
              strokeWidth="2.5"
              strokeDasharray="6 6"
              strokeLinecap="round"
            />

            {/* Rocket Icon on path 1 */}
            <g transform="translate(540, 125)">
              <text fontSize="20">🚀</text>
            </g>
          </svg>

          {/* Cards Layer */}
          <div className="relative z-10 flex flex-col gap-16">
            {/* Card 1 - Left */}
            <div className=" w-full md:w-[48%] self-start bg-slate-50 border border-slate-100 rounded-3xl p-6 shadow-sm">
              <div className="relative -top-10 left-0 w-12 h-12  text-6xl">
                ⏰
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                নোট সংরক্ষণ ও ব্যবস্থাপনা
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                আপনার ক্লাস নোট, গুরুত্বপূর্ণ পয়েন্ট, লেকচার সারাংশ এবং পড়ার
                উপকরণগুলো এক জায়গায় সাজিয়ে সংরক্ষণ করুন। প্রয়োজন অনুযায়ী নোটগুলো
                আলাদা ক্যাটাগরিতে ভাগ করতে পারবেন, যাতে পড়ার সময় দ্রুত খুঁজে
                পাওয়া যায়। সবকিছু থাকবে নিরাপদ, সংগঠিত এবং সহজে অ্যাক্সেসযোগ্য।
              </p>
            </div>

            {/* Card 2 - Right */}
            <div className="w-full md:w-[48%] self-end bg-gradient-to-br from-violet-600 to-indigo-700 text-white rounded-3xl p-6 shadow-md">
              <div className="w-12 h-12  text-6xl relative -top-10 left-0 ">
                🤖
              </div>
              <h3 className="text-xl font-bold mb-2">এআই সহায়তা </h3>
              <p className="text-sm text-violet-100 leading-relaxed">
                জটিল বিষয়গুলোকে সহজ ভাষায় ব্যাখ্যা করা, দীর্ঘ অধ্যায়ের সারাংশ
                তৈরি করা, পরীক্ষার প্রস্তুতির জন্য প্রশ্নোত্তর তৈরি করা—সবকিছুই
                এআই আপনার জন্য করবে। পড়ার সময় কোনো জায়গায় আটকে গেলে সঙ্গে সঙ্গে
                সাহায্য পাবেন, যেন আপনার পাশে সবসময় একজন স্মার্ট স্টাডি পার্টনার
                থাকে।
              </p>
            </div>

            {/* Card 3 - Left */}
            <div className="w-full md:w-[48%] self-start bg-slate-50 border border-slate-100 rounded-3xl p-6 shadow-sm">
              <div className="w-12 h-12 mb-4 text-6xl relative -top-10 left-0">
                🔍
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                দ্রুত অনুসন্ধান
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                আপনার সংরক্ষিত নোট, টপিক বা নির্দিষ্ট কোনো তথ্য মুহূর্তেই খুঁজে
                বের করতে পারবেন। স্মার্ট সার্চ সিস্টেম আপনার লেখা, ট্যাগ বা
                কিওয়ার্ড চিনে নিয়ে দ্রুত সঠিক নোটটি দেখাবে। পড়ার সময় সময় নষ্ট না
                করে প্রয়োজনীয় তথ্য তৎক্ষণাৎ পেয়ে যান।
              </p>
            </div>

            {/* Card 4 - Right */}
            <div className="w-full md:w-[48%] self-end bg-gradient-to-br from-violet-600 to-indigo-700 text-white rounded-3xl p-6 shadow-md">
              <div className="w-12 h-12  text-6xl relative -top-10 left-0">
                📊
              </div>
              <h3 className="text-xl font-bold mb-2">
                শেখার অগ্রগতি ট্র্যাকিং
              </h3>
              <p className="text-sm text-violet-100 leading-relaxed">
                আপনি কোন টপিকগুলো ভালোভাবে বুঝেছেন, কোনগুলোতে আরও অনুশীলন
                দরকার—সবকিছুই সহজে ট্র্যাক করতে পারবেন। দৈনিক পড়ার সময়, সম্পন্ন
                করা মডিউল, এবং শেখার ধারাবাহিকতা দেখে নিজের অগ্রগতি মূল্যায়ন
                করুন। এতে পড়াশোনা হবে আরও পরিকল্পিত এবং ফলপ্রসূ।
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
