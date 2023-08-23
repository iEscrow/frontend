import Cuenta from "@/app/components/marketplace/cuenta";
import Wallet from "@/app/components/marketplace/wallet";
import React from "react";
import Link from "next/link";

const Seleccion = () => {
  return (
    <div className="min-h-screen flex justify-center items-center w-full p-4">
      <div className="backdrop-opacity-10 bg-white/10 sm:w-full md:w-1/3 sm:p-4 md:p-10 rounded-2xl flex flex-col justify-center items-center">
        <div className="flex flex-col gap-4 w-full">
          <div>
            <p className="text-white text-center sm:text-sm md:text-md">
              Selecciona la cuenta con la cual recibirás la tranferencia
              bancaria:
            </p>
          </div>
          <div>
            <Cuenta />
          </div>
        </div>
        <div className="border-t border-gray-300 sm:m-6 sm:w-5/6" />
        <div className="flex flex-col gap-4 w-full">
          <div>
            <p className="text-white text-center sm:text-sm md:text-md">
              Selecciona la wallet con la cual enviarás enviarás el (ticker):
            </p>
          </div>
          <div>
            <Wallet />
          </div>
        </div>
        <div className="border-t border-gray-300 sm:m-6 sm:w-5/6" />
        <div className="flex w-full items-center gap-4">
          <div className="flex flex-col sm:gap-4 md:gap-4">
            <div>
              <p className="text-white sm:text-xs md:text-md">BTC a Enviar</p>
            </div>
            <div>
              <p className="text-white sm:text-xs md:text-md">
                Cotización Dolar
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center">
              <input
                type="text"
                className="input sm:w-[142px] md:w-[172px] sm:h-[26px] md:h-[36px] bg-white"
              />
              <p className="sm:text-[10px] md:text-md">~nro dólares</p>
            </div>
            <div>
              <input
                type="text"
                className="input sm:w-[142px] md:w-[172px] sm:h-[26px] md:h-[36px] bg-white"
              />
            </div>
          </div>
        </div>
        <div className="divider" />
        <div className="flex sm:justify-around w-full">
          <Link href="/marketplace/vender-cripto">
            <button className="btn sm:btn-xs md:btn-md btn-neutral rounded-full">
              ATRAS
            </button>
          </Link>
          <Link href="/marketplace/publicar">
            <button className="btn sm:btn-xs md:btn-md btn-accent rounded-full">
              SIGUIENTE
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Seleccion;
