"use client";
import { useState } from "react";
import qr from "../../../assets/qr.svg";
import Image from "next/image";

const Select = () => {
  const [selectedMoneda, setSelectedMoneda] = useState("");
  const [selectedRed, setSelectedRed] = useState("");

  const handleSelectedMoneda = (event) => {
    setSelectedMoneda(event.target.value);
  };

  const handleSelectedRed = (event) => {
    setSelectedRed(event.target.value);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <div className="">
          <p className="text-xs ml-1">SELECCIONA LA MONEDA DESEADA</p>
          <select
            className="select w-full max-w-xs"
            value={selectedMoneda}
            onChange={handleSelectedMoneda}
          >
            <option disabled selected>
              Seleccionar
            </option>
            <option>ETC</option>
            <option>BTC</option>
            <option>USDT</option>
            <option>USDC</option>
          </select>
        </div>
        {selectedMoneda ? (
          <div>
            <p className="text-xs ml-1">SELECCIONA LA RED DESEADA</p>
            <select
              className="select w-full max-w-xs"
              value={selectedRed}
              onChange={handleSelectedRed}
            >
              <option disabled selected>
                Seleccionar
              </option>
              <option>{selectedMoneda}</option>
              <option>{selectedMoneda}</option>
              <option>{selectedMoneda}</option>
              <option>{selectedMoneda}</option>
              <option>{selectedMoneda}</option>
            </select>
          </div>
        ) : null}
      </div>
      <div>
        {selectedRed ? (
          <div className="w-full flex flex-col justify-center items-center gap-2">
            <Image src={qr} alt="qr" />
            <div className="text-center">
              <p className="text-xs">Dirección de billetera</p>
              <p className="text-green text-xs">
                0xsaf35000321654845146843sdff65
              </p>
            </div>
          </div>
        ) : null}
      </div>
      <div className="flex justify-center">
        <button className="btn btn-sm btn-wide btn-outline rounded-full">
          cerrar
        </button>
      </div>
    </div>
  );
};

export default Select;
