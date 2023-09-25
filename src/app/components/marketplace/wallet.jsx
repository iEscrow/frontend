import Image from "next/image";
import plus from "../../../assets/btn-plus.svg";
import Opciones from "./opciones";
const Wallet = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col md:w-9/12">
        <div className="mb-3">
          <p className="text-white sm:text-center md:text-start sm:text-sm md:text-md">
            Selecciona la wallet con la cual enviarás el (ticket):
          </p>
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex sm:gap-2 md:gap-4">
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-green"
              checked
            />
            <div className="flex flex-col">
              <span className="label-text text-white">iEscrow</span>
              <p className="text-green sm:text-xs md:text-sm">
                0xj865ece9mwJKdPB5Kbhv4JiS
              </p>
            </div>
          </div>
          <Opciones accion="wallet" />
        </div>
        <div className="divider" />
        <div className="flex w-full justify-center">
          <button className="btn btn-ghost btn-sm w-48 bg-dark-blue text-white text-xs md:text-sm rounded-full p-0">
            <label
              className="flex w-full h-full items-center justify-center cursor-pointer"
              htmlFor={"modal_agregar_wallet"}
            >
              <Image src={plus} className="w-[20px]" alt="plus" />
              <p>AGREGAR WALLET</p>
            </label>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
