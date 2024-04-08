import NavLogo from "@/components/NavLogo";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Login() {
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();

  async function postIntoLogin() {
    await axios
      .post("http://localhost:4000/Users/Login", { email, pass })
      .then(() => {
        alert("success");
        localStorage.setItem("local", `${email}:${pass}`);
        window.location = "/dashboard";
      })
      .catch((e) => {
        alert(e.message, "aldaa");
      });
  }

  return (
    <>
      <div className="grid grid-cols-2 h-screen bg-white">
        <div className="  flex justify-center items-center p-4">
          <div className="text-black">
            <div className="flex gap-2 mb-14  justify-center items-center">
              <NavLogo /> <p>Geld</p>
            </div>
            <h1 className="text-center text-black">Welcome Back</h1>
            <p className="mb-8">Welcome back, Please enter your details</p>

            <input
              onChange={(e) => setEmail(e.target.value)}
              className="input p-0 bg-slate-300 w-full  text-black block"
              placeholder="Email"
            ></input>
            <input
              type="password"
              onChange={(e) => setPass(e.target.value)}
              className="input p-0  w-full bg-slate-300 block my-3"
              placeholder="Password"
            ></input>
            <button onClick={postIntoLogin} className="btn w-full mb-10">
              Log in
            </button>
            <div className="flex justify-center">
              <div className="flex gap-2">
                <p>Don’t have account?</p>
                <Link className="hover:text-blue-600" href="/SignUp">
                  Sign upp
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-600"></div>
      </div>
    </>
  );
}
