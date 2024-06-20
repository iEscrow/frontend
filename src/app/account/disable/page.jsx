"use client"
import Image from "next/image";
import Link from "next/link";

export default function DisableAccount() {
  return (
    <section className="flex flex-col gap-10 mb-10 max-md:px-4">
      <div className="md:px-24 max-md:flex justify-center">
        <Image
          src={require("@/assets/logo.svg")}
          className="w-[150px] md:w-[250px] hidden dark:flex"
          alt="logo"
        />
        <Image
          src={require("@/assets/logo-dark.svg")}
          className="w-[150px] md:w-[250px] dark:hidden "
          alt="logo"
        />
      </div>
      <div className="md:px-24 md:space-y-4 md:w-2/4">
        <h1 className="md:text-4xl text-2xl  font-medium ">
          Desactivar cuenta
        </h1>
        <h3>Deshabilitar su cuenta causará las siguientes consecuencias:</h3>
        <ul className="list-disc list-inside pl-3">
          <li>Todos los escrows no confirmados serán cancelados</li>
          <li>
            Todos los escrows publicados en el Marcketplace permanecerán
            inactivos momentáneamente hasta que reactive su cuenta.
          </li>
          <li>Todos los dispositivos para su cuenta serán eliminados</li>
          <li>Todos los retiros pendientes serán cancelados.</li>
        </ul>
        <p className="md:w-3/4 md:pb-10">
          Una vez que su cuenta esté deshabilitada, no podrá empezar el proceso
          de reactivación hasta que hayan pasado al menos dos horas.
        </p>
        <div className="divider" />
        <div className="flex justify-between">
        <Link href="/">
            <button  className=" uppercase sm:btn-sm md:btn-md bg-white  dark:bg-button-gray  dark:text-white text-blue-2 font-semibold shadow-md  rounded-full">
                    Cancelar
            </button>
        </Link>
          <button onClick={()=>document.getElementById('disable_account').showModal()} className="uppercase sm:btn-sm md:btn-md bg-blue-2 text-white font-semibold shadow-md  rounded-full">
            Desactivar
          </button>
        </div>
      </div>
    </section>
  );
}
