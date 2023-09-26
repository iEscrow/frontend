"use client";
import Image from "next/image";
import copy from "@/assets/copy.svg";
import { useState } from "react";
export default function Referral() {
  const [copied, setCopied] = useState(false);
  const referralId = 87654356789;
  const referralLink = "www.iescrow.com/....4366";
  return (
    <div className="flex flex-col max-md:items-center max-md:pb-5 gap-10">
      <div className="md:px-24 flex flex-col max-md:items-center gap-4">
        <p>ID de referido predeterminado</p>
        <div className="flex gap-5">
          <p className="bg-input-gay px-4 py-2 rounded w-fit ">{referralId}</p>
          <button
            onClick={() => {
              navigator.clipboard.writeText(referralId);
              setCopied(true);
              setTimeout(()=> setCopied(false), 2000 )
              
            }}
            className="bg-input-gay p-2 rounded"
          >
            <Image src={copy} alt="copy" width={25} />
          </button>
        </div>
      </div>
      <div className="md:px-24 flex flex-col max-md:items-center gap-4">
        <p>Link de referido</p>
        <div className="flex gap-5">
          <p className="bg-input-gay px-4 py-2 rounded w-fit ">
            {referralLink}
          </p>
          <button
            onClick={() => {
              navigator.clipboard.writeText(referralLink);
              setCopied(true);
              setTimeout(()=> setCopied(false), 2000 )
            }}
            className="bg-input-gay p-2 rounded"
          >
            <Image src={copy} alt="copy" width={25} />
          </button>
        </div>
      </div>
      {copied && (
        <div className="absolute md:flex justify-center">
        <div className="alert alert-success w-fit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Copiado!</span>
      </div>
        </div>
      )}
    </div>
  );
}
