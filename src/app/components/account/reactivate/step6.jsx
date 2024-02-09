"use client";
import Image from "next/image";
import Link from "next/link";

export const Step6 = () => {
  return (
    <dialog
      id="reactivate_step6"
      className="modal modal-bottom sm:modal-middle"
    >
      <div className="modal-box px-10 border-2 border-blue-2">
        <h3 className="text-xs sm:text-sm md:text-base lg:text-lg uppercase text-center font-semibold">
          Verificación de seguridad
        </h3>
        <p className="text-xs sm:text-sm pt-4 pb-6">
          Ahora confirmaremos tu identidad. Mira a la cámara y sigue las
          instrucciones para comenzar.
        </p>
        <div className="grid grid-cols-2 gap-3 mb-10">
          <div className="flex flex-col items-center gap-2">
            <Image alt="evitar usar sombreros" src={require("@/assets/hat.svg")} />
            <span className="text-sm">Evite usar sombreros</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image alt="evitar usar gafas" src={require("@/assets/lentes.svg")} />  
            <span className="text-sm">Evite usar gafas</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image alt="evitar usar filtros" src={require("@/assets/filtros.svg")} />
            <span className="text-sm">Evitar el uso de filtros</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image alt="Utilice suficiente iluminación" src={require("@/assets/luz.svg")} />
            <span className="text-sm">Utilice suficiente iluminación</span>
          </div>
        </div>

        <form method="dialog" className="flex justify-center">
            <button
              onClick={() =>
                document.getElementById("reactivate_step7").showModal()
              }
              className="uppercase sm:btn-sm md:btn-md bg-blue-2 text-white font-semibold shadow-md  rounded-full"
            >
              comnezar verificación
            </button>
        </form>
            <p className="text-sm py-4 text-center">
              <Link href="/" className="text-light-blue underline">Utilizar teléfono móvil</Link> para <br/> completar esta verificación
              </p>
              <Link href="/">
                <p className="text-sm pt-4 text-center text-light-blue underline">
                  He completado la verificación en mi teléfono
                </p>
              </Link>
      </div>
    </dialog>
  );
};
