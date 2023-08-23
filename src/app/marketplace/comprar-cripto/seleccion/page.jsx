import Comision from "@/app/components/marketplace/comision";
import Cuenta from "@/app/components/marketplace/cuenta";
import MontoEnviar from "@/app/components/marketplace/montoEnviar";
import Wallet from "@/app/components/marketplace/wallet";
import logo from "@/assets/logo.svg";
import logoDark from "@/assets/logo-dark.svg";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Seleccion() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-[40%] flex flex-col justify-center">
        <div className="flex flex-col gap-4 w-full">
        <Image
          src={logo}
          className="w-[150px] md:w-[250px] hidden  dark:flex"
          alt="logo"
        />
        <Image
          src={logoDark}
          className="w-[150px] md:w-[250px] dark:hidden "
          alt="logo"
        />
          <div>
            <p className="text-white text-lg">
              Selecciona la wallet con la cual recibirás el (token):
            </p>
          </div>
          <div className="ml-14 w-[60%]">
            <Wallet />
          </div>
        </div>
        <div className="border-t border-[#2E75A9] my-5 w-full" />
        <div className="flex flex-col gap-4 w-full">
          <div>
            <p className="text-white text-lg">
              Selecciona la cuenta con la cual realizarás la tranferencia
              bancaria:
            </p>
          </div>
          <div className="ml-14 w-[60%]">
            <Cuenta />
          </div>
        </div>
        <div className="border-t border-[#2E75A9] my-5 w-full" />
        <MontoEnviar />
        <div className="border-t border-[#2E75A9] my-5 w-full" />
        <Comision />
        <div className="border-t border-[#2E75A9] my-5 w-full" />
        <div className="flex justify-between w-full font-semibold text-lg">
          <Link
            className="px-9 py-1 bg-dark-blue rounded-full"
            href="/marketplace/comprar-cripto"
          >
            ATRAS
          </Link>
          <Link
            className="px-9 py-1 bg-green rounded-full"
            href="/marketplace/comprar-cripto/publicar"
          >
            PUBLICAR ESCROW
          </Link>
        </div>
      </div>
    </div>
  );
}
