import React from "react";
import Image from "next/image";
import more from "../../../assets/more-vertical.svg";
import plus from "../../../assets/btn-plus.svg";
import edit from "../../../assets/btn-edit.svg";
import delet from "../../../assets/btn-delete.svg";
const Wallet = () => {
  return (
    <div>
      <div className="flex justify-between w-full">
        <div className="flex sm:gap-2 md:gap-4">
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-green"
            checked
          />
          <div className="flex flex-col">
            <span className="label-text text-white">iEscrow</span>
            <p className="text-light-blue sm:text-xs md:text-sm">0xj865ece9mwJKdPB5Kbhv4JiSemFCu</p>
          </div>
        </div>
        <div className="dropdown sm:dropdown-left md:dropdown-right">
          <button tabIndex={0} className="btn btn-ghost">
            <Image src={more} className="w-[20px] md:w-[20px]" alt="logo" />
          </button>

          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu md:p-2 shadow bg-[#414141] rounded-b-lg w-52 text-white uppercase"
          >
            <li>
            <div className="flex gap-3">
              <Image src={edit} alt="logo" />
              <a>Editar</a>
            </div>
            </li>
            <li>
            <div className="flex gap-3">
              <Image src={delet} alt="logo" />
              <a>Eliminar</a>
            </div>
            </li>
          </ul>
        </div>
      </div>      
      <div className="divider"/>
      <button className="btn btn-ghost btn-sm w-48 bg-[#414141] text-white rounded-full">
        <Image src={plus} className="w-[20px] md:w-[20px]" alt="logo" /> AGREGAR
        WALLET
      </button>
    </div>
  );
};

export default Wallet;
