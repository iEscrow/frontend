'use client'
import Image from "next/image";
import logo from "../../../assets/logo.svg";
import google from "../../../assets/login/google.svg";
import face from "../../../assets/login/face.svg";
import apple from "../../../assets/login/apple.svg";
import mail from "../../../assets/login/mail.svg";
import lock from "../../../assets/login/lock.svg";
import view from "../../../assets/login/view.svg";
import Link from "next/link";
import { useState } from "react";

export default function Form() {
    const [password, setPassword] = useState(false)
    const togglePassword = (e)=> {
        e.preventDefault() 
        setPassword(!password)
    }
  return (
    <form className="w-[20%]">
      <div className="bg-blue w-full flex justify-center py-5 rounded-t-xl">
        <Image width={144} height={62.4} src={logo} alt="logo" />
      </div>
      <div className="bg-[#37d1f44f] text-white rounded-b-xl flex flex-col items-center px-[60px]">
        <h2 className="my-6 md:text-[24px] font-semibold">Log In</h2>
        <div className="flex w-full text-dark-gray">
            <Image src={mail} className="absolute my-4 ml-4" alt="mail" />
          <input
            className="bg-white border-none rounded-xl py-3 mb-4 w-full pl-11 focus:outline-none"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="flex w-full text-dark-gray">
            <Image src={lock} className="absolute my-3 ml-4" alt="mail" />
          <input
            className="bg-white border-none rounded-xl py-3 mb-4 w-full pl-11 focus:outline-none"
            type={password ? "text" : "password"}
            placeholder="Password"
          />
          <button onClick={togglePassword} className="absolute my-4 ml-56">
          <Image src={view} alt="view"/>
          </button>
        </div>
        
        <span>Forgot password?</span>
        <button className="bg-green py-2 px-14 rounded-[22px] font-bold shadow-xl mt-7 mb-2">
          LOGIN
        </button>
        <div>
          <div className="flex items-center justify-center text-[14px] w-full mb-7">
            <input
              type="checkbox"
              className="checkbox checkbox-xs border-white border mr-2"
            />
            <span> Remember me</span>
          </div>
          <div className="flex items-center text-[12px] mb-3">
            <hr className="border border-light-blue w-[82px] mr-2" />
            <span>Or Sing In with</span>
            <hr className="border border-light-blue w-[82px] ml-2" />
          </div>
          <div className="flex justify-center gap-5 mb-4">
            <Link href="/"><Image src={google} alt="google" /></Link>
            <Link href="/"><Image src={face} alt="facebook" /></Link>
            <Link href="/"><Image src={apple} alt="apple" /></Link>
          </div>
          <div className="flex gap-2 mb-4">
            <h2>Don&#39;t have an account</h2>
            <Link href="/singin" className="underline">
              Create One
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
}
