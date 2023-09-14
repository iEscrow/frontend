import Image from "next/image";
import Link from "next/link";
import campana from "../../../assets/campana.svg";
import WalletAccion from "./walletAccion";

const Userlog = () => {
  return (
    <div>
      <ul className="menu menu-horizontal flex justify-center items-center gap-x-2 p-2">
        <li>
          <Link href={"/marketplace"}>MARKETPLACE</Link>
        </li>
        <li>
          <Link href={"/"}>ESCROWS</Link>
        </li>
        <li>
          <button className="btn btn-sm btn-outline btn-accent rounded-full">
            CREAR SCROW
          </button>
        </li>
        <li>
          <Image src={campana} alt="campana" />
        </li>

        <div className="dropdown dropdown-bottom dropdown-end">
          <div tabindex="0" className="avatar">
            <div className="w-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 cursor-pointer">
              <img
                src="https://api.dicebear.com/6.x/adventurer/svg?seed=Abby"
                alt="user"
              />
            </div>
          </div>
          <ul
            tabindex="0"
            className="mt-4 dropdown-content z-[100] menu p-2 shadow bg-base-100  rounded-b-xl w-52"
          >
            <li>
              <a className="cursor-pointer hover:bg-green">MI PERFIL</a>
            </li>
            <li>
              <a className="cursor-pointer hover:bg-green">FAQ{`'`}S</a>
            </li>
            <li>
              <a className="hover:bg-green">AYUDA</a>
            </li>
            <li>
              <a className="hover:bg-green">REFERIDOS</a>
            </li>
            <li>
              <WalletAccion />
            </li>
            <li>
              <a className="hover:bg-green">CERRAR SESIÓN</a>
            </li>
          </ul>
        </div>
      </ul>
    </div>
  );
};

export default Userlog;
