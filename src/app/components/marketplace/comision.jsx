import React from "react";
import informacion from "../../../assets/informacion.svg";
import Image from "next/image";
export default function Comision() {
  return (
    <div className="flex flex-col sm:gap-2 md:gap-4 sm:justify-between w-9/12">
      <div className="flex flex-col">
        <p>% DE COMISIÓN</p>
        <div className="flex items-center gap-2">
          <input
            type="text"
            className="input w-[172px] h-[36px] bg-input-gay"
          />
          <div className="dropdown dropdown-hover dropdown-right cursor-pointer">
            <Image src={informacion} alt="informacion" />
            <p
              tabIndex={0}
              className=" dropdown-content menu md:w-[178px] rounded-md p-4 bg-input-gay text-[10px]"
            >
              En caso de un porcentaje de descuento, puedes indicarlo
              anteponiendo “-” (resta) al porcentaje
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <p>USDT TOTAL</p>
        <div className="flex items-center gap-2">
          <input
            type="text"
            className="input w-[172px] h-[36px] bg-[#2D2D2D]"
          />
          <div className="dropdown dropdown-hover dropdown-right cursor-pointer">
            <Image src={informacion} alt="informacion" />
            <p
              tabIndex={0}
              className=" dropdown-content menu md:w-[178px] rounded-md p-4 bg-input-gay text-[10px]"
            >
              Si la transacción es mayor o igual a US$ 5000 el fee se reducirá a
              0.5%
            </p>
          </div>
        </div>
        <div className="sm:text-xs">
          <p>Fee: 0.75%</p>
          <div className="flex gap-2">
            <p>RECIBIRÁS</p>
            <span className="text-yellow">0.0102 BTC</span>
          </div>
        </div>
      </div>
    </div>
  );
}
