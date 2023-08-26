import Image from "next/image";
import React from "react";
import logo from "../../../../assets/logo.svg";
import logoDark from "../../../../assets/logo-dark.svg";
import Link from "next/link";
export default function Peticiion({
  children,
  page,
  get,
  send,
  back = "/",
  next = "/",
}) {
  return (
    <div className="flex flex-col md:items-center md:min-h-[90vh] sm:min-h-[85vh]">
      <div className="flex flex-col gap-9 md:w-[531px] max-md:items-center mb-9">
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
        <h1 className="md:text-4xl sm:text-2xl text-green">{page}</h1>
      </div>
      <div className="bg-green w-full flex md:justify-center sm:gap-2 md:gap-10 py-4 sm:px-2 font-medium md:text-[18px] sm:text-sm text-dark-blue">
        <div>
          <h3>FACUNDO.SALAS (reput)</h3>
          <h3>Escrow #102212</h3>
        </div>
        <div>
          <h3>RECIBIRÁS</h3>
          <h3>{get}</h3>
        </div>
        <div>
          <h3>ENVIARÁS</h3>
          <h3>{send}</h3>
        </div>
      </div>
      <div className="mt-9 md:w-[531px] sm:px-4 md:px-0 sm:text-xs">
        {children}
      </div>
      {page === "Escrow Confirmado" ? (
        <div className="flex justify-center">
          <Link
            href="/"
            className="uppercase bg-dark-blue md:px-8 py-1 sm:px-2   rounded-[20px]"
          >
            Mis Escrows
          </Link>
        </div>
      ) : (
        <div className="md:w-[531px] sm:w-full sm:px-4 md:px-0">
          <div className="divider" />
          <div className="flex justify-between mb-4">
            <Link
              href={back}
              className="uppercase bg-dark-blue md:px-8 py-1 sm:px-2 rounded-[20px]"
            >
              Atras
            </Link>
            <Link
              href={next}
              className="uppercase bg-green md:px-8 py-1 sm:px-2 rounded-[20px]"
            >
              {page === "Escrow Aceptado" ? "CONFIRMAR" : "ACEPTAR ESCROW"}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
