"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import arrowDown from "../../../assets/arrow-down.svg";
import arrowUp from "../../../assets/arrow-up.svg";
import plus from "../../../assets/btn-plus.svg";
import Opciones from "./opciones";
import axios from "axios";
const Cuenta = () => {
  const [data, setData] = useState(null);

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
    <div className="flex w-full justify-center">
      <div className="flex flex-col md:w-9/12">
        <div className="mb-3">
          <p className="text-white sm:text-center md:text-start sm:text-sm md:text-md">
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
                    <span className="label-text text-white">BBVA</span>
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
                    <b className="text-white sm:text-sm md:text-md">
                      {e.User_Id}
                    </b>
                  </p>
                  <p className="text-green sm:text-sm md:text-md">
                    Nro de cuenta:{" "}
                    <b className="text-white sm:text-sm md:text-md">
                      {e.Account_Number}
                    </b>
                  </p>
                  <p className="text-green sm:text-sm md:text-md">
                    CBU:{" "}
                    <b className="text-white sm:text-sm md:text-md">{e.CBU}</b>
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
          <button className="btn btn-ghost btn-sm w-48 bg-dark-blue text-white text-xs md:text-sm rounded-full p-0">
            <label
              className="flex w-full h-full justify-center items-center cursor-pointer "
              htmlFor={"modal_agregar_cuenta"}
            >
              <Image src={plus} className="w-[20px]" alt="plus" />
              <p>AGREGAR CUENTA</p>
            </label>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cuenta;
