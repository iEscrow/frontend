import Image from "next/image";
import React from "react";
import profile from "@/assets/profile.svg"
export default function Orden({ name, send, method, price }) {
  return (
    <div className="bg-blue rounded-2xl flex p-4 justify-between h-[145px]">
      <div className=" flex flex-col justify-between w-[60%]">
        <div className="flex gap-2">
          <Image src={profile} alt="profile" />
          <p className="text-sm">{name}</p>
        </div>
        <div className="pl-10">
        <div className="flex gap-5">
          <p className="text-light-blue text-lg">ENVÍA</p>
          <p className="text-lg">{send}</p>
        </div>
        <div className="flex gap-5">
          <p className="text-light-blue text-lg">PRECIO</p>
          <p className="text-lg">{price}</p>
        </div>
        </div>
        <div className="flex gap-4">
          <p className="text-light-blue text-[10px]">Cerró precio con:</p>
          <p className="text-sm">BITSTAMP + 4% = U$D ---,00</p>
        </div>
      </div>
      <div className=" flex flex-col gap-2 text-right">
        <div>
        <p className="text-light-blue text-[10px]">Cotización Dolar</p>
        <p className="text-lg">$ 280,00</p>
        </div>
        <div>
        <p className="text-light-blue text-[10px]">Metodo de pago</p>
        <p className="text-sm">{method}</p>
        </div>
      </div>
      <button className="bg-green text-dark-blue w-8 flex flex-col justify-center items-center rounded-t-full rounded-b-full py-2 text-xs font-semibold space-y-[-4px] ">
        <p>C</p>
        <p>O</p>
        <p>M</p>
        <p>P</p>
        <p>R</p>
        <p>A</p>
        <p>R</p>
      </button>
    </div>
  );
}
