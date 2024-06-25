"use client";
import Image from "next/image";
import logo from "../../../assets/logo.svg";
import view from "../../../assets/login/view.svg";
import WithApps from "./withApps";
import { useState } from "react";
import { registerUser } from "@/app/services/users/register";
import { useRouter } from "next/navigation";
export default function Register() {
  const ph = [
    { type: "text", placeholder: "Name", name: "name" },
    { type: "text", placeholder: "Last name", name: "lastName" },
    { type: "text", placeholder: "Username", name: "username" },
    { type: "email", placeholder: "Email", name: "email" },
  ];
  const [form, setForm] = useState({});
  const [viewPassword, setViewPassword] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter()
  const togglePassword = (e) => {
    e.preventDefault();
    setViewPassword(!viewPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("")
    try {
      const {data} = await registerUser(form);
      console.log(data);
      router.push("/ConfirmEmail")
      
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setForm({...form, [name]: value})
  }
  return (
    <form className="max-md:w-[90%] pb-4" onSubmit={handleSubmit}>
      <div className="bg-gradient-to-r from-[#171717]  to-[#272727] w-full flex justify-center py-5 rounded-t-xl">
        <Image width={144} height={62.4} src={logo} alt="logo" />
      </div>
      <div className="bg-input-gay rounded-b-xl flex flex-col gap-4 p-4  items-center md:px-[60px] sm:px-8">
        <h2 className="md:text-2xl sm:text-lg font-semibold">Create account</h2>
        {ph.map((p) => {
          return (
            <input
              key={p.placeholder}
              className="bg-[#414141] placeholder:text-[#EAE9E9] border-none rounded sm:text-sm py-3 w-full pl-4 focus:outline-none"
              type={p.type}
              placeholder={p.placeholder}
              name={p.name}
              required
              onChange={handleChange}
            />
          );
        })}
        <div className="flex w-full items-center sm:text-sm bg-[#414141] rounded justify-between p-3 ">
          <input
            className="bg-transparent border-none placeholder:text-[#EAE9E9] w-[80%] focus:outline-none"
            type={viewPassword ? "text" : "password"}
            placeholder="Password"
            name="password"
            required
            onChange={handleChange}
          />
          <button onClick={togglePassword}>
              <Image src={view} alt="view" />
            </button>
        </div>
        <div className="flex w-full items-center sm:text-sm bg-[#414141] rounded justify-between p-3 ">
          <input
            className="bg-transparent border-none placeholder:text-[#EAE9E9] w-[80%] focus:outline-none"
            type={viewPassword ? "text" : "password"}
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={handleChange}
            required
          />
          <button
            onClick={togglePassword}
          >
            <Image src={view} alt="view" />
          </button>
        </div>
        <button type="submit" className="bg-blue-2 py-2 px-14 rounded-[22px] font-bold shadow-xl mt-6 mb-2 uppercase" >Register</button>
        {error && <div style={{ color: "red" }}>{error}</div>}
        <WithApps mode="Sign In" />
      </div>
    </form>
  );
}
