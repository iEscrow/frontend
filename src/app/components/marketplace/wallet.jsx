"use client";
import Image from "next/image";
import plus from "../../../assets/btn-plus.svg";
import Opciones from "./opciones";
import { usePathname } from "next/navigation";
const Wallet = () => {
  const url = usePathname();
  return (
    <div className="flex dark:text-white text-dark-blue w-full justify-center">
      <div className="flex flex-col md:w-9/12">
        <div className="mb-3">
          <p
            className={` sm:text-center md:text-start sm:text-sm md:text-md ${
              url === "/profile" && "hidden"
            }`}
          >
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
              <span className="label-text">iEscrow</span>
              <p className="text-green sm:text-xs md:text-sm">
                0xj865ece9mwJKdPB5Kbhv4JiS
              </p>
            </div>
          </div>
          <Opciones accion="wallet" />
        </div>
        <div className="divider" />
        <div className="flex w-full justify-center">
          <button className="btn-sm w-48 btn bg-white dark:bg-dark-blue dark:text-white text-blue-2  shadow-md text-xs md:text-sm rounded-full p-0">
            <label
              className="flex w-full h-full items-center justify-center cursor-pointer"
              htmlFor={"modal_agregar_wallet"}
            >
              <Image src={plus}  className="w-[20px] hidden dark:flex" alt="plus" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="24"
                viewBox="0 0 23 24"
                fill="none"
                className="dark:hidden"
              >
                <path
                  d="M16.9706 17.7989C20.0948 14.6747 20.0948 9.60943 16.9706 6.48524C13.8464 3.36104 8.78105 3.36104 5.65685 6.48524C2.53266 9.60943 2.53266 14.6747 5.65685 17.7989C8.78105 20.9231 13.8464 20.9231 16.9706 17.7989Z"
                  stroke="#1B80A4"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.3135 8.74798V15.5362"
                  stroke="#1B80A4"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.91943 12.1421H14.7077"
                  stroke="#1B80A4"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>AGREGAR WALLET</p>
            </label>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
