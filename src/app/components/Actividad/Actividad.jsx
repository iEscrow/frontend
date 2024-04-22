"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import arrowDown from "../../../assets/arrow-down.svg";
import arrowUp from "../../../assets/arrow-up.svg";
import React from "react";
import vector from "../../../assets/Vector.svg";
const Actividad = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="card w-96 bg-dark-blue relative">
      <div className="card-body">
        <div>
          <div className="flex">
            <Image src={vector} />
            <p className="ml-[12px] font-medium">PUBLICO #02202</p>
          </div>
          <p className="text-xs  ml-12">Creado el 15/01/2024 - 17:05 HS</p>
        </div>
        <div className="flex flex-col">
          <div className="flex gap-2 ml-12">
            <div>
              <p className="text-light-blue font-medium">RECIBES</p>
            </div>
            <div>
              <p>$AR 28.000,00</p>
            </div>
          </div>
          <div className="flex gap-2 ml-12">
            <div>
              <p className="text-light-blue font-medium">ENVIAS</p>
            </div>
            <div>
              <p>100,75 USDT</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col text-sm gap-4">
          <div className="flex gap-4">
            <div className="text-light-blue">
              <p>ESTADO</p>
            </div>
            <div className="text-green">
              <p>PUBLICADO</p>
            </div>
          </div>
          <div className={`${isCollapsed ? "hidden" : "flex flex-col"}`}>
            <p>
              Tu escrow ya se encuentra publicado en el marketplace, te
              notificaremos en cuanto alguien quiera realizar una transferencia.
            </p>
          </div>
          <div className="flex absolute bottom-[-10px] left-2/4">
            <Image
              src={isCollapsed ? arrowDown : arrowUp}
              className="w-[20px] md:w-[20px]"
              alt="logo"
              onClick={() => toggleCollapse()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Actividad;
