import Link from "next/link";
import axios from "axios";
import Dashboard from "./Dashboard";
import Records from "./Records";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Login from "./Login";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Login />
    
    </main>
  );
}
