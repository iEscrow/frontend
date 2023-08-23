import Cuenta from "@/app/components/marketplace/cuenta";
import Wallet from "@/app/components/marketplace/wallet";
import React from "react";
import Link from "next/link";

const Seleccion = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="backdrop-opacity-10 bg-green/20 w-1/3 px-10 py-6 rounded-2xl flex flex-col justify-center items-center">
        <div className="divider" />
        <div className="flex flex-col gap-4 w-full">
          <div>
            <p className="text-white">
              Selecciona la cuenta con la cual recibirás la tranferencia
              bancaria:
            </p>
          </div>
          <div>
            <Cuenta />
          </div>
        </div>
        <div className="border-t border-gray-300 m-10 w-2/4" />
        <div className="flex flex-col gap-4 w-full">
          <div>
            <p className="text-white">
              Selecciona la wallet con la cual enviarás enviarás el (ticker):
            </p>
          </div>
          <div>
            <Wallet />
          </div>
        </div>
        <div className="border-t border-gray-300 m-10 w-2/4" />
        <div className="flex w-full items-center justify-evenly">
          <div className="flex flex-col gap-4">
            <p className="text-white">BTC a Enviar</p>
            <p className="text-white">Cotización Dolar</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center">
              <input
                type="text"
                className="input w-[172px] h-[36px] bg-white"
              />
              <p>~nro dólares</p>
            </div>

            <input type="text" className="input w-[172px] h-[36px] bg-white" />
          </div>
        </div>
        <div className="divider" />
        <div className="flex justify-between w-full">
          <Link href="/marketplace/vender-cripto">
            <button className="btn btn-sm btn-neutral rounded-full">
              ATRAS
            </button>
          </Link>
          <Link href="/marketplace/publicar">
            <button className="btn btn-sm btn-accent rounded-full">
              SIGUIENTE
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Seleccion;
