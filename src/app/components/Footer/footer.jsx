import Image from "next/image";
import Link from "next/link";
import {icons} from "./icons"
export default function Footer() {
  return (
    <footer className=" hidden md:flex flex-col py-8 px-48 bg-gray dark:bg-black">
      <div className="flex justify-around text-xs">
      <div className="flex flex-col gap-3">
        <span className="footer-title dark:text-blue-2 text-blue text-sm">Sobre nosotros</span>
        <Link href={"/about"} className="link link-hover">
          Acerca
        </Link>
        <Link href={"/"} className="link link-hover">
          Términos
        </Link>
        <Link href={"/about"} className="link link-hover">
          Privacidad
        </Link>
      </div>
      <div className="flex flex-col gap-3">
        <span className="footer-title dark:text-blue-2 text-blue text-sm">Servicios</span>
        <Link href={"/"} className="link link-hover">
          Descargar
        </Link>
        <Link href={"/marketplace"} className="link link-hover">
          Marketplace
        </Link>
        <Link href={"/"} className="link link-hover">
          Escrow
        </Link>
        <Link href={"/about"} className="link link-hover">
          Programa de referidos
        </Link>
        <Link href={"/"} className="link link-hover">
          Solicitud de listado
        </Link>
      </div>
      <div className="flex flex-col gap-3">
        <span className="footer-title dark:text-blue-2 text-blue text-sm">Soporte</span>
        <Link href="/help-center" className="link link-hover">
          Centro de ayuda
        </Link>
        <Link href={"/about"} className="link link-hover">
          Seguridad
        </Link>
      </div>
      <div className="flex flex-col gap-3">
        <span className="footer-title dark:text-blue-2 text-blue  text-sm">Comunidad</span>
        <div className="grid grid-cols-2 gap-x-10 gap-y-3 text-[10px]">
        {icons.map((i) => {
          return (
            <div key={i.path} className="grid grid-flow-col gap-4">
              <Link href={i.path} className="flex items-center gap-2">
                <div className="dark:bg-blue-2 text-blue-2 dark:text-dark-blue bg-white rounded-full p-1 flex items-center justify-center">
                  <i.img />
                </div>
                /iescrow
              </Link>
            </div>
          );
        })}
        </div>
      </div>
      </div>
      <div className="divider "/>
      <p className="text-center dark:text-blue-2 text-blue text-[10px]">© 2023 iEscrow.crypto Derechos Reservados</p>
    </footer>
  );
}
