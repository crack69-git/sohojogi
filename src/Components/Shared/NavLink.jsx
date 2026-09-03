"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  console.log("pathname:", pathname);
  const isActive = pathname === href;
  console.log("isActive:", isActive);
  return (
    <div>
      <Link
        href={href}
        className={
          isActive
            ? "text-lg bg-sky-800 px-4 py-2 rounded-lg text-white flex items-center gap-2 hover:bg-sky-700 transition-colors duration-300"
            : "text-black flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-sky-100 transition-colors duration-300"
        }
      >
        {children}
      </Link>
    </div>
  );
};

export default NavLink;
