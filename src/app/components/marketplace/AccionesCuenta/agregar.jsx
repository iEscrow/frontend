"use client"
import React from "react";
import { useAccount } from "@/context/BankContext";


const AgregarCuenta = () => {
  const { sendAccount } = useAccount()
  const { setAccount, account } = useAccount()
  console.log(account);
  const handleOption = (e) => {
    const {name, value} = e.target
    setAccount({...account, [name]: value })
  }

  return (
    <>
      <input
        type="checkbox"
        id="modal_agregar_cuenta"
        className="modal-toggle"
      />
      <div className="modal  modal-middle">
        <div className="modal-box glass">
          <div className="flex flex-col gap-6 w-full">
            <b className="text-center">AGREGAR CUENTA</b>
            <div className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="TITULAR"
                className="input w-full"
                name="User_Id"
                onChange={handleOption}
              />
              <input type="text" placeholder="BANCO" className="input w-full" name="Id" onChange={handleOption}/>
              <div className="flex gap-2">
                <select className="select w-full">
                  <option disabled selected>
                    NUMERO DE CUENTA
                  </option>
                  <option>UTC</option>
                  <option>BTC</option>
                  <option>ETH</option>
                </select>
                <input type="text" className="input w-full" name="Account_Number" onChange={handleOption}/>
              </div>
              <input type="text" placeholder="CBU" className="input w-full " name="CBU" onChange={handleOption}/>
              <select className="select w-full">
                <option disabled selected>
                  DIVISA
                </option>
                <option>UTC</option>
                <option>BTC</option>
                <option>ETH</option>
              </select>
            </div>
            <div className="flex gap-2 justify-center">
              <input
                type="radio"
                name="radio-4"
                className="radio radio-accent"
                checked
              />
              <p>Guardar Datos para futuras transacciones</p>
            </div>
            <div className="flex w-full justify-around">
              <button className="btn btn-sm btn-neutral rounded-full">
                <label
                  htmlFor="modal_agregar_cuenta"
                  className="cursor-pointer w-full"
                >
                  cancelar
                </label>
              </button>
              <button className="btn btn-sm btn-accent rounded-full" onClick={sendAccount}>
                <label
                  className="cursor-pointer w-full"
                >
                  confirmar
                </label>
              </button>
            </div>
          </div>
        </div>
        <label
          className="modal-backdrop backdrop-blur-[2px]"
          htmlFor="modal_agregar_cuenta"
        />
      </div>
    </>
  );
};

export default AgregarCuenta;
