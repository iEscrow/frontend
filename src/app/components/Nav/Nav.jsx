import logoDark from "@/assets/logo-dark.svg";
import logo from "@/assets/logo.svg";
import Image from "next/image";
import menu from "../../../assets/menu.svg";
import Userlog from "./Userlog";

const Nav = () => {
  return (
    <div className="navbar bg-base-900 font-medium z-20">
      <div className="navbar-start">
        <div className="drawer z-30">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label
              htmlFor="my-drawer"
              className="btn btn-ghost flex-initial md:hidden"
            >
              <Image src={menu} alt="menu" />
            </label>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content gap-6">
              <div className="flex justify-center p-6">
                <Image
                  src={logo}
                  className="w-[200px] hidden dark:flex"
                  alt="logo"
                />
                <Image
                  src={logoDark}
                  className="w-[200px] dark:hidden "
                  alt="logo"
                />
              </div>
              <div className="flex w-full justify-around items-center">
                <p>País/moneda</p>
                <select className="select select-ghost max-w-[100px]">
                  <option>$AR</option>
                  <option>$USD</option>
                  <option>€EUR</option>
                </select>
              </div>
              <div>
                <li>
                  <a>MI PERFIL</a>
                </li>
                <li>
                  <a>FAQ'S</a>
                </li>
                <li>
                  <a>AYUDA</a>
                </li>
                <li>
                  <a>REFERIDOS</a>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="navbar-end hidden md:flex min-w-full">
        <Userlog />
      </div>
    </div>
  );
};

export default Nav;
