"use client";

import { useState } from "react";
import campana from "../../../assets/campana.svg";
import Image from "next/image";

const Userlog = () => {
  const [userlog, setUserLog] = useState(false);
  return (
    <div>
      {userlog ? (
        <ul className="menu menu-horizontal flex justify-center items-center gap-x-2 p-2">
          <li>
            <a>MARKETPLACE</a>
          </li>
          <li>
            <a>ESCROWS</a>
          </li>
          <li>
            <a>ABOUT</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
          <li>
            <button className="btn btn-sm btn-outline btn-accent rounded-full">
              CREAR SCROW
            </button>
          </li>
          <li>
            <Image src={campana} alt="campana" />
          </li>
          <li>
            <div className="avatar" onClick={() => setUserLog(!userlog)}>
              <div className="w-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://api.dicebear.com/6.x/adventurer/svg?seed=Abby" />
              </div>
            </div>
          </li>
        </ul>
      ) : (
        <ul className="menu menu-horizontal flex justify-center items-center gap-x-4 p-2">
          <li>
            <a>MARKETPLACE</a>
          </li>
          <li>
            <a>ABOUT</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
          <li onClick={() => setUserLog(!userlog)}>
            <a>LOGIN</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Userlog;
