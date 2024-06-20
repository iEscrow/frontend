"use client";
import Image from "next/image";

export const Step2 = () => {
  return (
    <dialog
      id="reactivate_step2"
      className="modal modal-bottom sm:modal-middle"
    >
      <div className="modal-box px-10 border-2 border-blue-2">
        <div className="flex justify-center mb-4">
          <div className="border-2 border-blue-2 rounded-full p-2">
            <Image alt="reactivate" src={require("@/assets/reactivate.svg")} />
          </div>
        </div>
        <h3 className="text-xs sm:text-sm md:text-base lg:text-lg uppercase text-center font-semibold">
          reactivar cuenta
        </h3>
        <p className="text-xs sm:text-sm pt-4 text-center">
        Por motivos de seguridad, actualiza tu contraseña y asegúrate de que solo tú puedas acceder a tu correo electrónico o Autenticador de Google.
        </p>
        <p className="text-xs sm:text-sm py-4 text-center">
        Por favor permanezca paciente mientras la información es revisada, lo que puede tardar hasta un día hábil. Podrás realizar retiros 48 hs después de la reactivación de la cuenta.
        </p>
        <form method="dialog">
          <div className="modal-action justify-between">
            <button className=" uppercase sm:btn-sm md:btn-md bg-white  dark:bg-button-gray  dark:text-white text-blue-2 font-semibold shadow-md  rounded-full">
              Cancelar
            </button>
            <button
              onClick={()=>document.getElementById('reactivate_step3').showModal()}
              className="uppercase sm:btn-sm md:btn-md bg-blue-2 text-white font-semibold shadow-md  rounded-full"
            >
              Reactivar
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};
