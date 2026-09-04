import { Avatar, Button, Chip } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { FaBookReader } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { GrLogin } from "react-icons/gr";

const HeroSection = () => {
  const users = [
    {
      id: 1,
      image:
        "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/blue.jpg",
      name: "John Doe",
    },
    {
      id: 2,
      image:
        "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/green.jpg",
      name: "Kate Wilson",
    },
    {
      id: 3,
      image:
        "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/purple.jpg",
      name: "Emily Chen",
    },
    {
      id: 4,
      image:
        "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/orange.jpg",
      name: "Michael Brown",
    },
    {
      id: 5,
      image:
        "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/red.jpg",
      name: "Olivia Davis",
    },
  ];
  return (
    <div
      style={{ backgroundImage: "url('/bg.jpg')" }}
      className="bg-cover bg-center mask-b-from-80% mask-t-from-90%"
    >
      <div className="w-9/12 mx-auto flex justify-between items-center bg-cover bg-center">
        <div>
          <Chip className="bg-sky-800 text-white text-[16px] flex items-center gap-2 px-10 py-1">
            <FaBookReader />
            আপনার পড়াশোনার একান্ত সহযোগী
          </Chip>
          <div className="mt-10">
            <h1 className="text-8xl font-bold text-sky-900">
              সহযোগীতে -<br></br>{" "}
              <span className="text-7xl text-black">আপনাকে স্বাগতম</span>
            </h1>
            <p className="text-2xl ">
              এআই ভিত্তিক আপনার পড়াশোনার সহায়ক এবং নোট সংরক্ষণকারী
            </p>
            <div>
              <div className="flex flex-col gap-6 mt-10">
                {/* Basic avatar group */}

                {/* Avatar group with counter */}
                <div className="flex items-center -space-x-2">
                  {users.slice(0, 4).map((user) => (
                    <Avatar key={user.id} className="ring-2 ring-background">
                      <Avatar.Image alt={user.name} src={user.image} />
                      <Avatar.Fallback>
                        {user.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </Avatar.Fallback>
                    </Avatar>
                  ))}
                  <Avatar className="ring-2 ring-background">
                    <Avatar.Fallback className="text-xs">
                      +{users.length - 3}
                    </Avatar.Fallback>
                  </Avatar>
                  <p className="text-lg text-gray-600 ml-7 ">
                    ১০০০+ সক্রিয় ব্যবহারকারী
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 mt-5">
            <Button className="text-lg bg-sky-950 rounded-lg">
              <GrLogin />
              নিবন্ধন করুন
            </Button>
            <Button
              className="text-lg text-sky-900 rounded-lg border border-sky-900"
              variant="secondary"
            >
              <FaMagnifyingGlass />
              আরও দেখুন
            </Button>
          </div>
        </div>
        <div>
          <Image src="/herk.svg" alt="Hero" width={700} height={700}></Image>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
