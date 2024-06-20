"use client";
import Image from "next/image";

export const Step1 = () => {
  return (
    <dialog
      id="reactivate_step1"
      className="modal modal-bottom sm:modal-middle"
    >
      <div className="modal-box px-10 border-2 border-blue-2">
        <div className="flex justify-center mb-4">
          <div className="border-2 border-blue-2 rounded-full p-2">
            <Image alt="reactivate" src={require("@/assets/shield_person.svg")} />
          </div>
        </div>
        <h3 className="text-xs sm:text-sm md:text-base lg:text-lg uppercase text-center font-semibold">
          consejo de sguridad
        </h3>
        <p className="text-xs sm:text-sm py-4 text-center">
          Una vez que reactives tu cuenta, por motivos de seguridad, tus retiros
          de fondos pueden <span className="text-light-blue">desactivarse durante 48 horas</span> después de la
          reactivación.
        </p>
        <form method="dialog">
          <div className="modal-action justify-between">
            <button className=" uppercase sm:btn-sm md:btn-md bg-white  dark:bg-button-gray  dark:text-white text-blue-2 font-semibold shadow-md  rounded-full">
              Cancelar
            </button>
            <button
              onClick={()=>document.getElementById('reactivate_step2').showModal()}
              className="uppercase sm:btn-sm md:btn-md bg-blue-2 text-white font-semibold shadow-md  rounded-full"
            >
              Desbloquear
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};
