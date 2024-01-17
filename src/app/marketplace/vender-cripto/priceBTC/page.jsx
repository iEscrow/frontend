"use client"
import { useApp } from "@/context/Context";
import Link from "next/link";
import React from "react";

export default function PriceBTC() {
    const {sendOffer} = useApp()
  return (
    <>
      <div className="mb-6">
        <p className="dark:text-white sm:text-sm sm:text-center md:text-start">
          Elige una web de la cual tomar el precio de Bitcoin. El precio
          continuará actualizandose hasta que la otra parte acepte el
          intercambio
        </p>
      </div>
      <div className="flex flex-col gap-2 sm:w-5/6 md:w-2/3 ">
        <div className="flex justify-between w-full">
          <div className="flex items-center sm:gap-2 md:gap-4">
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-green"
              checked
            />
            <p>Bitstamp</p>
          </div>
          <div>
            <p>U$D 10.238,25</p>
          </div>
        </div>
        <div className="flex justify-between w-full">
          <div className="flex items-center sm:gap-2 md:gap-4">
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-blue-2"
              checked
            />
            <p>CoinMarketCap</p>
          </div>
          <div>
            <p>
              U$D 10.238,25
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-300 sm:m-6 sm:w-5/6 md:w-2/3" />
      <div className="flex flex-col w-full gap-4 items-center">
        <div>
          <p className="text-xs text-center">% DE COMISIÓN</p>
          <input type="text" className="input w-[172px] h-[36px] dark:bg-input-gay" />
        </div>
        <div>
          <p className="text-xs text-center">ARS TOTAL</p>
          <input
            type="text"
            className="input w-[172px] h-[36px] dark:bg-input-gay"
            placeholder="0.01224"
          />
        </div>
      </div>
      <div className="border-t border-gray-300 sm:m-6 sm:w-5/6 md:w-2/3" />
      <div className="flex sm:justify-around w-full uppercase">
        <Link href="/marketplace/vender-cripto/seleccion">
          <button className=" uppercase sm:btn-xs md:btn-md dark:bg-input-gay dark:text-white text-blue-2 bg-white shadow-md font-semibold rounded-full">
            atras
          </button>
        </Link>

        <button onClick={sendOffer} className="uppercase sm:btn-xs md:btn-md bg-blue-2 text-white shadow-sm font-semibold rounded-full">
          publicar escrow
        </button>
      </div>
    </>
  );
}
