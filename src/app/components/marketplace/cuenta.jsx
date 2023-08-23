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
    <>
      <div className="flex justify-between">
        <div className="flex sm:gap-2 md:gap-4 items-center">
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-green"
            checked
          />
          <span className="label-text text-white">BBVA</span>
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
      <div
        className={`${
          isCollapsed ? "hidden" : "flex flex-col sm:ml-10 md:ml-12"
        }`}
      >
        <p className="text-green sm:text-sm md:text-md">
          Titular:{" "}
          <b className="text-white sm:text-sm md:text-md">Facundo salas</b>
        </p>
        <p className="text-green sm:text-sm md:text-md">
          Nro de cuenta:{" "}
          <b className="text-white sm:text-sm md:text-md">3216XXXXXXXXX4351</b>
        </p>
        <p className="text-green sm:text-sm md:text-md">
          CBU:{" "}
          <b className="text-white sm:text-sm md:text-md">
            0000321XXXXX4684351
          </b>
        </p>
      </div>
      <div className="flex items-center">
        <div className="flex-grow divider" />
        <Image
          src={isCollapsed ? arrowDown : arrowUp}
          className="w-[20px] md:w-[20px]"
          alt="logo"
          onClick={() => toggleCollapse()}
        />
        <div className="flex-grow divider" />
      </div>
      <div className="flex w-full justify-center">
        <button className="btn btn-ghost btn-sm w-48 bg-dark-blue text-white text-xs md:text-sm rounded-full">
          <Image src={plus} className="w-[20px]" alt="plus" /> AGREGAR CUENTA
        </button>
      </div>
    </>
  );
};

export default Cuenta;
