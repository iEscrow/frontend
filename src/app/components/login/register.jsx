"use client";
import Image from "next/image";
import logo from "../../../assets/logo.svg";
import view from "../../../assets/login/view.svg";
import Button from "./button";
import WithApps from "./withApps";
import { useState } from "react";
export default function Register() {
  const ph = [
    { type: "text", placeholder: "Name" },
    { type: "text", placeholder: "Last name" },
    { type: "email", placeholder: "Email" },
  ];
  const [password, setPassword] = useState(false);
  const togglePassword = (e) => {
    e.preventDefault();
    setPassword(!password);
  };
  return (
    <form>
      <div className="bg-blue w-full flex justify-center py-5 rounded-t-xl">
        <Image width={144} height={62.4} src={logo} alt="logo" />
      </div>
      <div className="bg-[#37d1f44f] text-white rounded-b-xl flex flex-col gap-4 p-4  items-center px-[60px]">
        <h2 className="md:text-2xl sm:text-lg font-semibold">Create account</h2>
        {ph.map((p) => {
          return (
            <input
              key={p.placeholder}
              className="bg-white border-none rounded-full sm:text-sm text-dark-gray py-3 w-full pl-4 focus:outline-none"
              type={p.type}
              placeholder={p.placeholder}
            />
          );
        })}
        <div className="flex w-full items-center sm:text-sm text-dark-gray bg-white rounded-full justify-between p-3 ">
          <input
            className="bg-transparent border-none w-[80%] focus:outline-none"
            type={password ? "text" : "password"}
            placeholder="Password"
          />
          <button
            onClick={togglePassword}
          >
            <Image src={view} alt="view" />
          </button>
        </div>
        <div className="flex w-full items-center sm:text-sm text-dark-gray bg-white rounded-full justify-between p-3 ">
          <input
            className="bg-transparent border-none w-[80%] focus:outline-none"
            type={password ? "text" : "password"}
            placeholder="Confirm Password"
          />
          <button
            onClick={togglePassword}
          >
            <Image src={view} alt="view" />
          </button>
        </div>
        <Button path="signin/confirmEmail" mode="register" />
        <WithApps mode="Sign In" />
      </div>
    </form>
  );
}
