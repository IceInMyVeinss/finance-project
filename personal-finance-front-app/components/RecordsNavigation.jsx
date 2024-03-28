import React from "react";
import Link from "next/link";

export default function RecordsNavigation() {
  return (
    <div className=" mt-6 pl-32">
      <div className="flex flex-col w-60 h-20 px-4 justify-evenly">
        <strong className="text-2xl font-semibold pb-6">Records</strong>
        <Link href="?modal=true">
          <div className="btn w-52 h-8">
            <span className="px-1">+</span>Add
          </div>
        </Link>
      </div>
    </div>
  );
}
