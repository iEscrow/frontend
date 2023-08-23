import React from "react";
import Image from "next/image";
import more from "../../../assets/more-vertical.svg";
import plus from "../../../assets/btn-plus.svg";

const Wallet = () => {
  return (
    <>
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
              0xj865ece9mwJKdPB5Kbhv4JiSemFCu
            </p>
          </div>
        </div>
        <div className="dropdown sm:dropdown-left md:dropdown-right">
          <button tabIndex={0} className="btn btn-ghost">
            <Image src={more} className="w-[20px] md:w-[20px]" alt="more" />
          </button>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu md:p-2 shadow bg-dark-blue rounded-lg sm:w-22 md:w-52 text-white"
          >
            <li>
              <a className="text-xs">Editar</a>
            </li>
            <li>
              <a className="text-xs">Eliminar</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="divider" />
      <div className="flex w-full justify-center">
        <button className="btn btn-ghost btn-sm w-48 bg-dark-blue text-white text-xs md:text-sm rounded-full">
          <Image src={plus} className="w-[20px] md:w-[20px]" alt="logo" />{" "}
          AGREGAR WALLET
        </button>
      </div>
    </>
  );
};

export default Wallet;
