import React from "react";
import Link from "next/link";
import NavLogo from "@/components/NavLogo";

export default function Navbar() {
  return (
    <div className="w-full h-20 flex flex-row px-28 py-4">
      <div className="flex flex-row items-center justify-evenly w-56 h-10">
        <NavLogo />
        <Link href='./Dashboard.jsx'>
          <div className="cursor-pointer">Dashboard</div>
        </Link>
        <Link href='./Records.jsx/'>
          <div className="cursor-pointer">Records</div>
        </Link>
      </div>
      <div className="flex-1"></div>
      <div className="flex flex-row w-44 h-10">
        <div className="border-solid py-1 rounded-btn border-blue-400 bg-sky-600 text-white flex flex-row items-center justify-between px-5 cursor-pointer">
          <span className="px-1">+</span>Record
        </div>
        <div className="w-10 h-10 rounded-full bg-gray-400 ml-6 cursor-pointer "></div>
      </div>
    </div>
  );
}
