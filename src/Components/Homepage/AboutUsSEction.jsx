import { Card, Separator } from "@heroui/react";
import React from "react";
import { BiSolidStar } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
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
      <div>
        {" "}
        <Card
          className="w-2/4 mx-auto mt-10 bg-amber-50 text-black flex flex-row items-center justify-center gap-10 "
          variant="default"
        >
          <div className="flex flex-col items-center justify-center gap-2 ">
            <h3 className="text-2xl font-bold flex items-center gap-1">
              <FaUser />
              মোট সক্রিয় সদস্য
            </h3>
            <p className="text-2xl font-bold text-gray-700">10</p>
          </div>
          <Separator orientation="vertical" className="w-1" />
          <div className="flex flex-col items-center justify-center gap-2 ">
            <h2 className="text-2xl font-bold flex items-center  gap-1">
              <BiSolidStar />
              রেটিং
            </h2>
            <p className="flex items-center gap-1 text-2xl font-bold text-gray-700">
              4.5 / 5<FaStar className="text-amber-500" />
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AboutUsSEction;
