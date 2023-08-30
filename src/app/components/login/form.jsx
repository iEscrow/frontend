"use client";
import Image from "next/image";
import logo from "../../../assets/logo.svg";
import mail from "../../../assets/login/mail.svg";
import lock from "../../../assets/login/lock.svg";
import view from "../../../assets/login/view.svg";
import Link from "next/link";
import { useState } from "react";
import WithApps from "./withApps";
import Button from "./button";

export default function Form() {
  const [password, setPassword] = useState(false);
  const togglePassword = (e) => {
    e.preventDefault();
    setPassword(!password);
  };
  return (
    <form className="max-md:w-[90%]">
      <div className="bg-black w-full flex justify-center py-5 rounded-t-xl">
        <Image width={144} height={62.4} src={logo} alt="logo" />
      </div>
      <div className=" shadow-[0_1px_2px_0_rgba(0,0,0,0.25)] bg-black/50 rounded-b-xl flex flex-col items-center md:px-[60px] sm:px-8">
        <h2 className="my-6 md:text-2xl sm:text-lg font-semibold">Log In</h2>
        <div className="flex flex-col w-full gap-2">
          <div className="flex w-full bg-input-gay rounded-xl p-3 gap-1 items-center">
            <Image src={mail} alt="mail" />
            <input
              className=" border-none bg-transparent focus:outline-none"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="flex bg-input-gay rounded-xl p-3 gap-1">
            <Image src={lock} alt="lock" />
            <input
              className="border-none bg-transparent w-[80%] focus:outline-none"
              type={password ? "text" : "password"}
              placeholder="Password"
            />
            <button onClick={togglePassword}>
              <Image src={view} alt="view" />
            </button>
          </div>
        </div>
        <Link href="login/accountRecovery" className="hover:underline">
          Forgot password?
        </Link>
        <Button path="/" mode="login" />
        <div>
          <div className="flex items-center justify-center md:text-sm sm:text-xs w-full pb-7">
            <input
              type="checkbox"
              className="checkbox checkbox-xs border-white border mr-2"
            />
            <span> Remember me</span>
          </div>
          <WithApps mode="Log In" />
          <div className="flex justify-center gap-2 pb-4 sm:text-xs">
            <h2>Don&#39;t have an account</h2>
            <Link href="/signin" className="underline">
              Create One
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
}
