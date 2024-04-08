import DashboardCardPage from "@/components/DashboardCardPage";
import Navbar from "./Navbar";
import React from "react";

export default function Dashboard() {
  return (
    <main className="">
      <Navbar />
      <div className="flex flex-row">
        <DashboardCardPage />
      </div>
    </main>
  );
}
