"use client";
import Image from "next/image";
import arrowDown from "@/assets/arrow-down.svg";
import arrowUp from "@/assets/arrow-up.svg";
import { icons } from "./icons";
import { useState } from "react";
import Link from "next/link";

export default function FooterMobile() {
  const [more, setMore] = useState({div1: true, div2:true, div3:true});
  const handleClick = (index) => {
    setMore(p => ({
        ...p,
        [index]:!p[index]
    }))
  };
  return (
    <footer className=" md:hidden p-5 bg-black">
      <div className="collapse" onClick={() => handleClick("div1")}>
        <input type="checkbox" />
        <div className="flex  justify-between collapse-title text-sm font-medium uppercase text-blue-2">
          Sobre nosotros
          <Image src={more.div1 ? arrowDown : arrowUp} alt="more" />
        </div>
        <div className="collapse-content flex flex-col text-xs gap-2">
          <p>Acerca</p>
          <p>Terminos</p>
          <p>Privacidad</p>
        </div>
      </div>
      <hr className="border-dark-gray" />
      <div className="collapse" onClick={() => handleClick("div2")}>
        <input type="checkbox" />
        <div className="flex  justify-between collapse-title text-sm font-medium uppercase text-blue-2">
          Servicios
          <Image src={more.div2 ? arrowDown : arrowUp} alt="more" />
        </div>
        <div className="collapse-content flex flex-col text-xs gap-2">
          <p>Acerca</p>
          <p>Terminos</p>
          <p>Privacidad</p>
        </div>
      </div>
      <hr className="border-dark-gray" />
      <div className="collapse" onClick={() => handleClick("div3")}>
        <input type="checkbox" />
        <div className="flex  justify-between collapse-title text-sm font-medium uppercase text-blue-2">
          Soporte
          <Image src={more.div3 ? arrowDown : arrowUp} alt="more" />
        </div>
        <div className="collapse-content flex flex-col text-xs gap-2">
          <p>Acerca</p>
          <p>Terminos</p>
          <p>Privacidad</p>
        </div>
      </div>
      <hr className="border-dark-gray" />
      <div className="flex  flex-col text-sm font-medium uppercase py-3 pl-4 text-blue-2">
        Comunidad
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-3 gap-8">
            {icons.map((i) => {
              return (
                <Link
                  key={i.path}
                  href={i.path}
                  className="bg-blue-2 rounded-full p-1"
                >
                  <Image src={i.img} alt=" " />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <hr className="border-dark-gray" />
      <p className="text-center text-blue-2 text-[10px] pt-3">
        © 2023 iEscrow.crypto Derechos Reservados
      </p>
    </footer>
  );
}
