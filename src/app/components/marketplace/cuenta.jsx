"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import arrowDown from "../../../assets/arrow-down.svg";
import arrowUp from "../../../assets/arrow-up.svg";
import plus from "../../../assets/btn-plus.svg";
import Opciones from "./opciones";
import axios from "axios";
import { usePathname } from "next/navigation";
const Cuenta = () => {
  const [data, setData] = useState(null);
  const url = usePathname()
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "http://3.22.169.23:3000/bank-account"
        );
        setData(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <div className="flex dark:text-white text-dark-blue w-full justify-center">
      <div className="flex flex-col md:w-9/12">
        <div className="mb-3">
          <p className={` sm:text-center md:text-start sm:text-sm md:text-md ${url === '/profile' && 'hidden'}`}>
            Selecciona la cuenta con la cual realizarás la tranferencia
            bancaria: 
          </p>
        </div>
        {data &&
          data.BankAccounts.map((e, i) => {
            return (
              <>
                <div className="flex justify-between">
                  <div className="flex sm:gap-2 md:gap-4 items-center">
                    <input
                      type="radio"
                      name="radio-10"
                      className="radio checked:bg-green"
                      checked
                    />
                    <span className="label-text dark:text-white text-dark-blue">BBVA</span>
                  </div>
                  <Opciones accion="cuenta" />
                </div>
                <div
                  className={`${
                    isCollapsed ? "hidden" : "flex flex-col sm:ml-10 md:ml-12"
                  }`}
                  key={i}
                >
                  <p className="text-green sm:text-sm md:text-md">
                    Titular:{" "}
                    <b className="dark:text-white text-dark-blue sm:text-sm md:text-md">
                      {e.User_Id}
                    </b>
                  </p>
                  <p className="text-green sm:text-sm md:text-md">
                    Nro de cuenta:{" "}
                    <b className="dark:text-white text-dark-blue sm:text-sm md:text-md">
                      {e.Account_Number}
                    </b>
                  </p>
                  <p className="text-green sm:text-sm md:text-md">
                    CBU:{" "}
                    <b className="dark:text-white text-dark-blue sm:text-sm md:text-md">{e.CBU}</b>
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="flex-grow divider" />
                  <Image
                    src={isCollapsed ? arrowDown : arrowUp}
                    className="w-[20px] md:w-[20px]"
                    alt="logo"
                    onClick={() => toggleCollapse()}
                  />
                  <div className="flex-grow divider" />
                </div>{" "}
              </>
            );
          })}
        <div className="flex w-full justify-center">
          <button className="btn  btn-sm w-48 bg-white dark:bg-dark-blue dark:text-white text-blue-2  shadow-md text-xs md:text-sm rounded-full p-0">
            <label
              className="flex w-full h-full justify-center items-center cursor-pointer "
              htmlFor={"modal_agregar_cuenta"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="24"
                viewBox="0 0 23 24"
                fill="none"
                className="dark:hidden"
              >
                <path
                  d="M16.9706 17.7989C20.0948 14.6747 20.0948 9.60943 16.9706 6.48524C13.8464 3.36104 8.78105 3.36104 5.65685 6.48524C2.53266 9.60943 2.53266 14.6747 5.65685 17.7989C8.78105 20.9231 13.8464 20.9231 16.9706 17.7989Z"
                  stroke="#1B80A4"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.3135 8.74798V15.5362"
                  stroke="#1B80A4"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.91943 12.1421H14.7077"
                  stroke="#1B80A4"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <Image src={plus} className="w-[20px] hidden dark:flex" alt="plus" />
              <p>AGREGAR CUENTA</p>
            </label>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cuenta;
