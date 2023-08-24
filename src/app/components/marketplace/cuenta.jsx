"use client";
import Image from "next/image";
import more from "../../../assets/more-vertical.svg";
import plus from "../../../assets/btn-plus.svg";
import arrowUp from "../../../assets/arrow-up.svg";
import arrowDown from "../../../assets/arrow-down.svg";
import edit from "@/assets/btn-edit.svg";
import delet from "@/assets/btn-delete.svg";
import { useState } from "react";

const Cuenta = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <div>
      <div className="flex w-full justify-between">
        <div className="flex gap-4 items-center">
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-green"
            checked
          />
          <span className="label-text text-white">BBVA</span>
        </div>
        <div className="dropdown dropdown-right">
          <button tabIndex={0} className="btn btn-ghost">
            <Image src={more} className="w-[20px] md:w-[20px]" alt="logo" />
          </button>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-[#414141] rounded-b-lg w-52 text-white uppercase"
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
      <div className={`${isCollapsed ? "hidden" : "flex flex-col ml-12"}`}>
        <p className="text-green">
          Titular: <b className="text-white">Facundo salas</b>
        </p>
        <p className="text-green">
          Número de cuenta: <b className="text-white">3216XXXXXXXXX4351</b>
        </p>
        <p className="text-green">
          CBU: <b className="text-white">0000321XXXXX4684351</b>
        </p>
      </div>

      <div className="flex items-center">
        <div className="flex-grow divider"></div>
        <div>
          <Image
            src={isCollapsed ? arrowDown : arrowUp}
            className="w-[20px] md:w-[20px]"
            alt="logo"
            onClick={() => toggleCollapse()}
          />
        </div>
        <div className="flex-grow divider"></div>
      </div>

      <button className="btn btn-ghost btn-sm w-48 bg-[#414141] text-white rounded-full">
        <Image src={plus} className="w-[20px] md:w-[20px]" alt="logo" /> AGREGAR
        CUENTA
      </button>
    </div>
  );
};

export default Cuenta;
