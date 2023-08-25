import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.svg";
import logoDark from "@/assets/logo-dark.svg";
import Link from "next/link";

export default function publicar() {
  return (
    <div className="min-h-[90vh]">
      <div className="ml-[36%] mb-12">
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
      <div className="bg-green w-full flex justify-center gap-10 py-4 font-medium text-[18px] text-dark-blue ">
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
      <div className=" flex flex-col ml-[36%] mt-12 gap-6">
        <h1 className="text-4xl text-green">Escrow Publicado!</h1>
        <h3 className="text-lg">
          Tu escrow ya se encuentra publicado en el Marketplace
        </h3>
        <div className="flex gap-1">
          <h3 className="text-lg">Podrás visualizarlo</h3>
          <Link className="text-lg underline " href="/">
            aquí.
          </Link>
        </div>
        <h3 className="text-lg">
          Te notificaremos cuando un usuario quiera completar el intercambio.
        </h3>
        <h3 className="text-2xl">Gracias por utilizar iEscrow!</h3>
      </div>
      <div className="flex gap-5 justify-center mt-32 text-lg font-semibold">
        <Link href="/" className="rounded-full bg-dark-blue shadow-sm px-5 py-2">MIS ESCROWS</Link>
        <Link href="/" className="rounded-full bg-dark-blue shadow-sm px-5 py-2">MARKETPLACE</Link>
        <Link href="/" className="rounded-full bg-dark-blue shadow-sm px-5 py-2">NUEVO ESCROW</Link>
      </div>
    </div>
  );
}
