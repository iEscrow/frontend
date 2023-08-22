import Image from "next/image";
import React from "react";
import logo from "../../../assets/logo.svg";
import logoDark from "../../../assets/logo-dark.svg";
const VenderCripto = () => {
  return (
    <div className="p-20 flex flex-col items-center w-2/4">
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
            <option>USDT</option>
            <option>USDC</option>
            <option>ETH</option>
            <option>BNB</option>
          </select>
        </div>
        <div>
          <p>Recibir</p>
          <select className="select w-60 bg-white text-blue">
            <option>Transferencia bancaria</option>
            <option>USDT</option>
            <option>USDC</option>
            <option>ETH</option>
            <option>BNB</option>
          </select>
        </div>
      </div>
      <div className="divider"></div>
      <div className="flex flex-col gap-6">
        <div className="flex gap-4">
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-green"
            checked
          />
          <div className="flex flex-col">
            <span className="label-text text-white">PRIVADO</span>
            <p>Ya tengo la contraparte.</p>
            <p>No figurará en el Marketplace.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-green"
            checked
          />
          <div className="flex flex-col">
            <span className="label-text text-white">PÚBLICO</span>
            <p>No tengo la contraparte.</p>
            <p>Se listará en el Marketplace.</p>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="flex justify-between w-2/5">
        <button className="btn btn-sm btn-neutral rounded-full">ATRAS</button>
        <button className="btn btn-sm btn-accent rounded-full">
          SIGUIENTE
        </button>
      </div>
    </div>
  );
};

export default VenderCripto;
