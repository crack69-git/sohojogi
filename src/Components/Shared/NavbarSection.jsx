import { Button, Popover, Separator } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoLogInOutline } from "react-icons/io5";
import NavLink from "./NavLink";
import { FaHome } from "react-icons/fa";
import { PiBrowsersBold, PiWarningCircleLight } from "react-icons/pi";
import { BiSolidPhoneCall } from "react-icons/bi";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { MdOutlineLogout } from "react-icons/md";
import { LuLayoutDashboard } from "react-icons/lu";

const NavbarSection = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  console.log("Session in NavbarSection:", session?.user?.image);
  const links = (
    <>
      <NavLink href="/">
        <FaHome />
        হোম
      </NavLink>
      <NavLink href="/cnt">
        <PiBrowsersBold />
        নোটস
      </NavLink>
      <NavLink href="#contact">
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
    <nav className="w-11/12 mx-auto pt-4 ">
      <div className="flex justify-between items-center bg-white rounded-2xl p-4 border-2 shadow-inner shadow-sky-100 ">
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
          {session?.user ? (
            <div className="flex items-center gap-2">
              <div>
                <div className="flex items-center gap-4">
                  <Popover>
                    <Button
                      variant="secondary"
                      className="rounded-full p-0 w-11 h-11"
                    >
                      <Image
                        loading="lazy"
                        src={session?.user?.image}
                        alt="User Image"
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                    </Button>
                    <Popover.Content className="min-w-72">
                      <Popover.Dialog>
                        <Popover.Heading className="text-center">
                          {session?.user?.name}
                        </Popover.Heading>
                        <p className="text-sm text-center text-gray-600">
                          {session?.user?.email}
                        </p>
                        <Separator className="my-4" />
                        <div className="flex flex-col gap-2">
                          <Link
                            href="/dashboard/user/home"
                            className="hover:bg-sky-900 w-full hover:text-white p-2 rounded-lg flex items-center gap-2 border"
                          >
                            <LuLayoutDashboard />
                            ড্যাশবোর্ড
                          </Link>
                          <Link
                            href="/dashboard/user/my-notes"
                            className="hover:bg-sky-900 w-full hover:text-white p-2 rounded-lg flex items-center gap-2 border"
                          >
                            <LuLayoutDashboard />
                            আমার নোটস
                          </Link>
                        </div>
                        <Separator className="my-4" />
                        <Link href="/profile">
                          <Button
                            variant="danger"
                            className="rounded-lg flex items-center gap-2 w-full"
                          >
                            Logout
                            <MdOutlineLogout />
                          </Button>
                        </Link>
                      </Popover.Dialog>
                    </Popover.Content>
                  </Popover>
                </div>
              </div>
            </div>
          ) : (
            <Link href="/login">
              <Button variant="secondary" className="flex items-center gap-2">
                <IoLogInOutline />
                লগ ইন
              </Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavbarSection;
