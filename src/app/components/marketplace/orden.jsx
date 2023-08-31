import Image from "next/image";
import React from "react";
import profile from "@/assets/profile.svg"
export default function Orden({ name, send, method, price }) {
  return (
    <div className="bg-input-gay rounded-2xl flex md:p-4 sm:p-3 justify-between md:h-[145px]">
      <div className=" flex flex-col md:justify-between md:w-[60%]">
        <div className="flex gap-2 max-md:pb-1">
          <Image src={profile} alt="profile" />
          <p className="text-sm">{name}</p>
        </div>
        <div className="md:pl-10 sm:pl-2 max-md:space-y-[-4px]">
        <div className="flex gap-5">
          <p className="text-light-blue text-lg">ENVÍA</p>
          <p className="text-lg">{send}</p>
        </div>
        <div className="flex gap-5">
          <p className="text-light-blue text-lg">PRECIO</p>
          <p className="text-lg">{price}</p>
        </div>
        </div>
        <div className="md:flex md:gap-4 max-md:pl-2 max-md:pb-2 gap-1">
          <p className="text-light-blue text-[10px]">Cerró precio con:</p>
          <p className="md:text-sm sm:text-[10px]">BITSTAMP + 4% = U$D ---,00</p>
        </div>
        <div className="flex gap-4 md:hidden">
        <div className="md:flex md:gap-4 max-md:pl-2 gap-1">
          <p className="text-light-blue text-[10px]">Cotización Dolar</p>
          <p className="md:text-sm sm:text-lg">$ 280,00</p>
        </div>
        <div className="md:flex md:gap-4 max-md:pl-2 gap-1">
          <p className="text-light-blue text-[10px]">Método de pago</p>
          <p className="md:text-sm sm:text-[10px]">{method}</p>
        </div>
        </div>
      </div>
      <div className="  hidden md:flex flex-col gap-2 text-right">
        <div>
        <p className="text-light-blue text-[10px]">Cotización Dolar</p>
        <p className="text-lg">$ 280,00</p>
        </div>
        <div>
        <p className="text-light-blue text-[10px]">Método de pago</p>
        <p className="text-sm">{method}</p>
        </div>
      </div>
      <div className="flex justify-center items-center">
      <button className="bg-blue-2 w-8  flex flex-col justify-center items-center rounded-t-full rounded-b-full py-2 text-sm font-semibold space-y-[-4px] ">
        <p>C</p>
        <p>O</p>
        <p>M</p>
        <p>P</p>
        <p>R</p>
        <p>A</p>
        <p>R</p>
      </button>
      </div>
    </div>
  );
}
