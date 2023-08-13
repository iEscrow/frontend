import React from "react";
import menu from "../../../assets/menu.svg";
import Image from "next/image";
import Userlog from "./Userlog";

const Nav = () => {
  return (
    <div className="navbar bg-base-900 text-white font-medium">
      <div className="navbar-start">
        <div className="drawer z-10">
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
            <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
              <li>
                <a>ABOUT</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
              <li>
                <a>MARKETPLACE</a>
              </li>
              <li>
                <a>LOGIN</a>
              </li>
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
