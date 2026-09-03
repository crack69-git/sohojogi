import React from "react";
import { FcAbout } from "react-icons/fc";

const AboutUsSEction = () => {
  return (
    <div className="w-9/12 mx-auto mt-20 bg-sky-900 text-white p-10 rounded-lg shadow-lg">
      <div className="text-center">
        <h2 className="text-4xl font-bold flex items-center justify-center gap-2">
          <FcAbout />
          আমাদের সম্পর্কে
        </h2>
        <p className="mt-4 text-xl text-gray-200 w-4/5 mx-auto">
          সহযোগী একটি আধুনিক এআই ভিত্তিক শিক্ষাসহায়ক প্ল্যাটফর্ম, যেখানে
          শিক্ষার্থীরা সহজে তাদের পড়াশোনার নোট সংরক্ষণ, সাজানো এবং পুনরায় পড়তে
          পারে। আমরা বিশ্বাস করি—সঠিকভাবে সংগঠিত নোট এবং স্মার্ট স্টাডি টুলস
          একজন শিক্ষার্থীর শেখার গতি ও দক্ষতা অনেকগুণ বাড়িয়ে দিতে পারে।
        </p>
      </div>
    </div>
  );
};

export default AboutUsSEction;
