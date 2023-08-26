import Image from "next/image";
import React from "react";
import logo from "../../../assets/logo.svg";
import logoDark from "../../../assets/logo-dark.svg";
import Link from "next/link";
const VenderCripto = () => {
  return (
    <div className=" flex flex-col items-center w-2/4 sm:w-full md:w-1/3 sm:p-4 md:p-10  justify-center">
        <Image
          src={logo}
          className="w-[150px] md:w-[250px] hidden mb-24 dark:flex"
          alt="logo"
        />
        <Image
          src={logoDark}
          className="w-[150px] md:w-[250px] mb-24 dark:hidden "
          alt="logo"
        />
      <div className="flex flex-col gap-6 text-white">
        <div>
          <p>Enviar</p>
          <select className="select w-60 bg-white text-blue">
            <option>BTC</option>
          </select>
        </div>
        <div>
          <p>Recibir</p>
          <select className="select w-60 bg-white text-blue">
            <option>USDT</option>
          </select>
        </div>
      </div>
      <div className="divider"></div>
      <div className="flex md:flex-col gap-6">
        <div className="flex items-center gap-4">
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-green"
            checked
          />
          <div className="flex flex-col">
            <span className="label-text text-white">PRIVADO</span>
            <p className="sm:hidden md:flex">Ya tengo la contraparte.</p>
            <p className="sm:hidden md:flex">No figurará en el Marketplace.</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-green"
            checked
          />
          <div className="flex flex-col">
            <span className="label-text text-white">PÚBLICO</span>
            <p className="sm:hidden md:flex">No tengo la contraparte.</p>
            <p className="sm:hidden md:flex">Se listará en el Marketplace.</p>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="flex justify-around w-full">
        <button className="btn btn-sm btn-neutral rounded-full">ATRAS</button>
        <Link href="/marketplace/seleccion">
        <button className="btn btn-sm btn-accent rounded-full">
          SIGUIENTE
        </button></Link>
      </div>
      </div>
    
  );
};

export default VenderCripto;
