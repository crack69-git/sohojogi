import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoLogInOutline } from "react-icons/io5";
import NavLink from "./NavLink";
import { FaHome } from "react-icons/fa";
import { PiBrowsersBold, PiWarningCircleLight } from "react-icons/pi";
import { BiSolidPhoneCall } from "react-icons/bi";

const NavbarSection = () => {
  const links = (
    <>
      <NavLink href="/">
        <FaHome />
        হোম
      </NavLink>
      <NavLink href="/cnt">
        <PiBrowsersBold />
        আমার নোট
      </NavLink>
      <NavLink href="/bn">
        <BiSolidPhoneCall />
        যোগাযোগ
      </NavLink>
      <NavLink href="/vg">
        <PiWarningCircleLight />
        আমাদের সম্পর্কে
      </NavLink>
    </>
  );
  return (
    <nav className="w-11/12 mx-auto pt-4 sticky ">
      <div className="flex justify-between items-center bg-white rounded-2xl p-4 border-2 shadow-inner shadow-sky-100">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-2xl"
          ></Image>
          <p className="text-3xl font-bold font-bengali text-sky-950">সহযোগী</p>
        </div>
        <div className="flex gap-4">{links}</div>
        <div>
          <Button className="bg-sky-800 text-white hover:bg-sky-700 gap-2 flex items-center px-4 py-2 rounded-lg transition-colors duration-300">
            <IoLogInOutline />
            লগ ইন
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarSection;
