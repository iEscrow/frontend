"use client";
import Image from "next/image";

export const Step3 = () => {
  return (
    <dialog
      id="reactivate_step3"
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
        <form className="px-6 flex flex-col gap-4" >
          <label className="space-y-2">
            <span className="text-light-blue">Código de verificación de Google</span>
            <input type="text" className="w-full py-3 px-4 rounded-md"  />
            <p className="text-xs px-2 " >Para garantizar la seguridad de su cuenta, por favor complete la siguiente verificación.</p>
          </label>
          <label className="space-y-2">
            <span className="text-light-blue">Código de verificación de correo electronico</span>
            <div className="flex bg-[#414141] rounded-md py-3 md:px-4 ">
              <input type="text" className="border-none bg-transparent md:flex-1 focus:outline-none "  />
              <button className="underline max-md:text-xs max-md:truncate text-light-blue">
                Obtener código
              </button>
            </div>
            <p className="text-xs px-2 " >Por favor ingrese el código de verificacón de 6 dígitos recibido en fac***@gmail.com..</p>
          </label>
        </form>
        <form method="dialog">
          <div className="modal-action justify-between">
            <button className=" uppercase sm:btn-sm md:btn-md bg-white  dark:bg-button-gray  dark:text-white text-blue-2 font-semibold shadow-md  rounded-full">
              Cancelar
            </button>
            <button onClick={() => document.getElementById("reactivate_step4").showModal()}
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
