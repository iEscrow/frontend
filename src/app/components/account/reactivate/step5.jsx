"use client";
import Image from "next/image";

export const Step5 = () => {
  return (
    <dialog
      id="reactivate_step5"
      className="modal modal-bottom sm:modal-middle"
    >
      <div className="modal-box px-10 border-2 border-blue-2">
        <h3 className="text-xs sm:text-sm md:text-base lg:text-lg uppercase text-center font-semibold">
          Verificación de seguridad
        </h3>
        <p className="text-xs sm:text-sm pt-4 pb-6">
          Para garantizar la seguridad de su cuenta, por favor complete la
          siguiente verificación.
        </p>
        <form className="px-8 flex flex-col gap-4">
          <p className="text-light-blue">
            Cargar documento nacional de identidad
          </p>
          <div className="flex flex-col gap-2 items-center p-4 border border-blue-2 rounded-lg cursor-pointer">
            <Image alt="dni" src={require("@/assets/dni.svg")} />
            <p className="text-light-blue text-sm">Cargar frente</p>
          </div>
          <div className="flex flex-col gap-2 items-center p-4 border border-blue-2 rounded-lg cursor-pointer">
            <Image alt="dni" src={require("@/assets/dorso.svg")} />
            <p className="text-light-blue text-sm">Cargar dorso</p>
          </div>
          <p className="text-xs text-center">
            Cargar archivos .jpg, .jpeg o .png que no excedan los 5 Mb.
          </p>
        </form>
        <form method="dialog">
          <div className="modal-action justify-between">
            <button
              onClick={() =>
                document.getElementById("reactivate_step4").showModal()
              }
              className=" uppercase sm:btn-sm md:btn-md bg-white  dark:bg-button-gray  dark:text-white text-blue-2 font-semibold shadow-md  rounded-full"
            >
              Atras
            </button>
            <button
              onClick={() =>
                document.getElementById("reactivate_step6").showModal()
              }
              className="uppercase sm:btn-sm md:btn-md bg-blue-2 text-white font-semibold shadow-md  rounded-full"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};
