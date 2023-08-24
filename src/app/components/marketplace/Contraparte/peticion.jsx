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
    <div className="flex flex-col items-center max-h-[90vh]">
      <div className="flex flex-col gap-9 w-[531px] mb-9">
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
        <h1 className="text-4xl text-green">{page}</h1>
      </div>
      <div className="bg-green w-full flex justify-center gap-10 py-4 font-medium text-[18px] text-dark-blue ">
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
      <div className="mt-9 w-[531px]">{children}</div>
      {page === "Escrow Confirmado" ? (
        <Link
        href="/"
        className="uppercase bg-dark-blue px-8 py-1 rounded-[20px]"
      >
        Mis Escrows
      </Link>
      ) : (
        <div className="w-[531px]">
          <div className="divider" />
          <div className="flex justify-between mb-4">
            <Link
              href={back}
              className="uppercase bg-dark-blue px-8 py-1 rounded-[20px]"
            >
              Atras
            </Link>
            <Link
              href={next}
              className="uppercase bg-green px-8 py-1 rounded-[20px]"
            >
              {page === "Escrow Aceptado" ? "CONFIRMAR" : "ACEPTAR ESCROW"}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
