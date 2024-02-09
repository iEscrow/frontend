'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";

export const Disable = () => {
  const router = useRouter()
  return (
    <dialog id="disable_account" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <div className="flex justify-center">
          <Image alt="disable" src={require("@/assets/shield_person.svg")} />
        </div>
        <h3 className="text-xs sm:text-sm md:text-base lg:text-lg uppercase font-semibold">
          ¿estás seguro de que deseas desactivar tu cuenta?
        </h3>
        <p className="text-xs sm:text-sm py-4">
          Una vez que su cuenta esté desactivada, verifique que esté segura
          antes de reactivarla
        </p>
        <form method="dialog">
          <div className="modal-action justify-between">
            <button className=" uppercase sm:btn-sm md:btn-md bg-white  dark:bg-button-gray  dark:text-white text-blue-2 font-semibold shadow-md  rounded-full">
              Cancelar
            </button>
            <button onClick={()=> router.push('/login')} className="uppercase sm:btn-sm md:btn-md bg-blue-2 text-white font-semibold shadow-md  rounded-full">
              Confirmar
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};
