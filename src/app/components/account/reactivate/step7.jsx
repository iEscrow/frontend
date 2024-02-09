import Image from "next/image";

export const Step7 = () => {
  return (
    <dialog
      id="reactivate_step7"
      className="modal modal-bottom sm:modal-middle"
    >
      <div className="modal-box px-10 border-2 border-blue-2">
        <div className="flex justify-center mb-4">
          <div className="border-2 border-blue-2 rounded-full p-2">
            <Image
              alt="reactivate"
              src={require("@/assets/disableAccount.svg")}
            />
          </div>
        </div>
        <p className="text-xs sm:text-sm py-4 text-center">
          Su cuenta ha sido deshabilitada hace menos de dos horas. Por favor,
          inténtelo de nuevo más tarde.
        </p>
        <form method="dialog">
          <div className="modal-action justify-center">
            <button className="uppercase sm:btn-sm md:btn-md bg-blue-2 text-white font-semibold shadow-md  rounded-full">
              Entendido
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};
