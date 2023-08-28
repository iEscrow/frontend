"use client"
import Image from "next/image";
import logo from "../../../assets/logo.svg";
import view from "../../../assets/login/view.svg";
import Button from "./button";
import WithApps from "./withApps";
import { useState } from "react";
export default function Register() {
  const ph = [
    {type:"text",
    placeholder: "Name"
    },
    {type:"text",
    placeholder: "Last name"
    },
    {type:"email",
    placeholder: "Email"
    }
  ]
  const [password, setPassword] = useState(false)
    const togglePassword = (e)=> {
        e.preventDefault() 
        setPassword(!password)
    }
  return (
    <form>
      <div className="bg-blue w-full flex justify-center py-5 rounded-t-xl">
        <Image width={144} height={62.4} src={logo} alt="logo" />
      </div>
      <div className="bg-[#37d1f44f] text-white rounded-b-xl flex flex-col items-center px-[60px]">
        <h2 className="my-6 md:text-2xl sm:text-lg font-semibold">Create account</h2>
        {ph.map(p => {
          return (
            <input
            key={p.placeholder}
          className="bg-white border-none rounded-full sm:text-sm text-dark-gray py-3 mb-4 w-full pl-4 focus:outline-none"
          type={p.type}
          placeholder={p.placeholder}
        />
          )
        })}
        <div className="flex w-full text-dark-gray">
          <input
            className="bg-white border-none rounded-full py-3 mb-3 w-full pl-4 focus:outline-none"
            type={password ? "text" : "password"}
            placeholder="Password"
          />
          <button onClick={togglePassword} className="absolute my-4 md:ml-56 sm:ml-52">
          <Image src={view} alt="view"/>
          </button>
        </div>
        <div className="flex w-full text-dark-gray">
          <input
            className="bg-white border-none rounded-full py-3 mb-3 w-full pl-4 focus:outline-none"
            type={password ? "text" : "password"}
            placeholder="Confirm Password"
          />
          <button onClick={togglePassword} className="absolute my-4 md:ml-56 sm:ml-52">
          <Image src={view} alt="view"/>
          </button>
        </div>
        <div className="mb-3">
          <Button path="signin/confirmEmail" mode="register" />
        </div>
        <WithApps mode="Sign In" />
      </div>
    </form>
  );
}
