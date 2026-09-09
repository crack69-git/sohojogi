import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";
import { FaBookmark, FaHome, FaStickyNote } from "react-icons/fa";

const Sidebar = () => {
  const links = (
    <>
      <NavLink href="/dashboard/user/home">
        <FaHome />
        ড্যাশবোর্ড
      </NavLink>

      <NavLink href="/dashboard/user/my-notes">
        <FaStickyNote />
        আমার নোটস
      </NavLink>
      <NavLink href="/dashboard/user/my-bookmarks">
        <FaBookmark />
        বুকমার্ক
      </NavLink>
    </>
  );
  return (
    <div className="w-11/12 mx-auto">
      <div className="flex  items-center gap-4 my-2 border w-fit p-2 rounded-lg shadow-lg bg-white">
        {links}
      </div>
    </div>
  );
};

export default Sidebar;
