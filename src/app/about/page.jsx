"use client";
import { useState } from "react";
import Link from "next/link";
import { useApp } from "@/context/Context";
import { options } from "./options";

export default function About() {
  
  const { setMsj, msj } = useApp();
  const handleChange = (e) => {
    setMsj(e.target.value);
  };
  return (
    <>
        <div className="flex gap-4 items-center  max-md:hidden ">
        <div className="flex flex-col justify-center   w-1/4 ">
            {options.map((f) => (
            <div key={f.value} className="flex items-center  gap-3">
                <div className={`divider divider-horizontal w-1  bg-blue-2`}>
                <input
                    type="radio"
                    name="radio-7"
                    className="radio bg-blue radio-info"
                    value={f.value}
                    checked={msj === f.value}
                    onChange={handleChange}
                />
                </div>
                <p>{f.title}</p>
            </div>
            ))}
        </div>
        <div className="w-3/4" >
            {options.map(
            (f) =>
                msj === f.value && (
                <div key={f.value}>
                    <p className="leading-loose">{f.description}</p>
                </div>
                )
            )}
        </div>
        </div>
        <div className="md:hidden">
            {options.map(o => (
                <details key={o.value} name="about" className="mb-4" >
                    <summary className="text-lg">{o.title}</summary>
                    <p className="text-xs text-justify leading-normal">{o.description}</p>
                </details>
            ))}
        </div>
    </>
  );
}
