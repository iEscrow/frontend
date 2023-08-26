import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.svg";
import logoDark from "@/assets/logo-dark.svg";
import Link from "next/link";

export default function publicar() {
  return (
    <div className="md:min-h-[90vh] sm:min-h-screen">
      <div className="md:ml-[36%] md:mb-12 sm:mb-5 sm:flex justify-center">
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
      </div>
      <div className="bg-green w-full flex md:justify-center sm:gap-2 md:gap-10 py-4 sm:px-2 font-medium md:text-[18px] sm:text-sm text-dark-blue ">
        <div>
          <h3>FACUNDO.SALAS (reput)</h3>
          <h3>Escrow #102212</h3>
        </div>
        <div>
          <h3>RECIBIRÁS</h3>
          <h3>$ 28.000,00 ARS</h3>
        </div>
        <div>
          <h3>ENVIARÁS</h3>
          <h3>100 USDT</h3>
        </div>
      </div>
      <div className=" flex flex-col md:ml-[36%]  sm:ml-4 mt-12 gap-6">
        <h1 className="md:text-4xl sm:text-lg text-green">Escrow Publicado!</h1>
        <h3 className="md:text-lg sm:text-sm">
          Tu escrow ya se encuentra publicado en el Marketplace
        </h3>
        <div className="flex gap-1">
          <h3 className="md:text-lg sm:text-sm">Podrás visualizarlo</h3>
          <Link className="md:text-lg sm:text-sm underline " href="/">
            aquí.
          </Link>
        </div>
        <h3 className="md:text-lg sm:text-sm">
          Te notificaremos cuando un usuario quiera completar el intercambio.
        </h3>
        <h3 className="md:text-2xl sm:text-base">Gracias por utilizar iEscrow!</h3>
      </div>
      <div className="flex md:gap-5 sm:gap-3 justify-center md:mt-32 sm:mt-12 md:text-lg sm:text-xs md:font-semibold">
        <Link href="/" className="rounded-full bg-dark-blue shadow-sm md:px-5 sm:px-2 sm:py-1 md:py-2">MIS ESCROWS</Link>
        <Link href="/" className="rounded-full bg-dark-blue shadow-sm md:px-5 sm:px-2 sm:py-1 md:py-2">MARKETPLACE</Link>
        <Link href="/" className="rounded-full bg-dark-blue shadow-sm md:px-5 sm:px-2 sm:py-1 md:py-2">NUEVO ESCROW</Link>
      </div>
    </div>
  );
}
