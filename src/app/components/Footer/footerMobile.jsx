"use client";
import { icons } from "./icons";
import { useState } from "react";
import {arrows} from "./arrows"
import Link from "next/link";

export default function FooterMobile() {
  const [more, setMore] = useState({ div1: true, div2: true, div3: true });
  const handleClick = (index) => {
    setMore((p) => ({
      ...p,
      [index]: !p[index],
    }));
  };
  return (
    <footer className=" md:hidden p-5 dark:bg-black bg-gray ">
      <div className="collapse" onClick={() => handleClick("div1")}>
        <input type="checkbox" />
        <div className="flex  justify-between collapse-title text-sm font-medium uppercase dark:text-blue-2 text-blue">
          Sobre nosotros 
          {more.div1 ? <arrows.down /> : <arrows.up />}
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
        <div className="flex  justify-between collapse-title text-sm font-medium uppercase dark:text-blue-2 text-blue">
          Servicios
          {more.div2 ? <arrows.down /> : <arrows.up />}
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
        <div className="flex  justify-between collapse-title text-sm font-medium uppercase dark:text-blue-2 text-blue">
          Soporte
          {more.div3 ? <arrows.down /> : <arrows.up />}
        </div>
        <div className="collapse-content flex flex-col text-xs gap-2">
          <p>Acerca</p>
          <p>Terminos</p>
          <p>Privacidad</p>
        </div>
      </div>
      <hr className="border-dark-gray" />
      <div className="flex flex-col mb-6 gap-2 p-4">
        <span className="footer-title dark:dark:text-blue-2  text-blue  text-sm">
          Comunidad
        </span>
        <div className="flex justify-center">
          <div className="grid grid-cols-3 gap-3">
            {icons.map((i, index) => {
              return (
                <Link
                  key={index}
                  href={i.path}
                  className="dark:bg-blue-2 dark:text-dark-blue text-blue w-fit bg-white rounded-full p-1 flex items-center justify-center"
                >
                  <i.img />
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
