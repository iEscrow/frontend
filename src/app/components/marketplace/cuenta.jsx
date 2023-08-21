"use client";
import Image from "next/image";
import more from "../../../assets/more-vertical.svg";
import plus from "../../../assets/btn-plus.svg";
import arrowUp from "../../../assets/arrow-up.svg";
import arrowDown from "../../../assets/arrow-down.svg";
import { useState } from "react";

const Cuenta = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <div className="flex flex-col w-1/5">
      <div className="flex w-full justify-between">
        <div className="flex gap-6 items-center">
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
            className="dropdown-content z-[1] menu p-2 shadow bg-dark-blue rounded-b-lg w-52 text-white"
          >
            <li>
              <a>Editar</a>
            </li>
            <li>
              <a>Eliminar</a>
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
      <div className="flex items-center my-4">
        <div className="flex-grow border-t border-gray-300"></div>
        <div className="mx-4 text-gray-400">
          <Image
            src={isCollapsed ? arrowDown : arrowUp}
            className="w-[20px] md:w-[20px]"
            alt="logo"
            onClick={() => toggleCollapse()}
          />
        </div>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      <button className="btn btn-ghost btn-sm w-48 bg-dark-blue text-white rounded-full">
        <Image src={plus} className="w-[20px] md:w-[20px]" alt="logo" /> AGREGAR
        CUENTA
      </button>
    </div>
  );
};

export default Cuenta;
