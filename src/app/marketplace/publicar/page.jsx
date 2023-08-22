import React from "react";
import Link from "next/link";

const Publicar = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="backdrop-opacity-10 bg-green/20 w-1/3 px-10 py-6 rounded-2xl flex flex-col justify-center items-center">
        <div className="divider" />
        <div className="flex flex-col items-center gap-4 w-full">
          <div>
            <p className="text-white">
              Elige una web de la cual tomar el precio de Bitcoin. El precio
              continuará actualizandose hasta que la otra parte acepte el
              intercambio
            </p>
          </div>
          <div className="flex flex-col w-4/5 gap-4">
            <div className="flex justify-between gap-4">
              <div className="flex items-center gap-4">
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-green"
                  checked
                />
                <p className="label-text text-white">Bitstamp</p>
              </div>
              <div>
                <p className="text-green">U$D 10.238,25</p>
              </div>
            </div>
            <div className="flex justify-between gap-4">
              <div className="flex items-center gap-4">
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-green"
                  checked
                />
                <p className="label-text text-white">Coinmonitor</p>
              </div>
              <div>
                <p className="text-green">U$D 10.215,45</p>
              </div>
            </div>
            <div className="flex justify-between gap-4">
              <div className="flex items-center gap-4">
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-green"
                  checked
                />
                <p className="label-text text-white">Binance</p>
              </div>
              <div>
                <p className="text-green">U$D 10.203,06</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-300 m-10 w-2/4" />
          <div className="flex flex-col w-full gap-6">
            <div>
              <p>% DE COMISIÓN</p>
              <input
                type="text"
                className="input w-[172px] h-[36px] bg-white"
              />
            </div>
            <div>
              <p>ARS TOTAL</p>
              <input
                type="text"
                className="input w-[172px] h-[36px] bg-white"
                placeholder="0.01224"
              />
            </div>
          </div>
          <div className="border-t border-gray-300 m-10 w-2/4" />
          <div className="flex justify-between w-full">
          <Link href="/marketplace/seleccion">
            <button className="btn btn-sm btn-neutral rounded-full">
              ATRAS
            </button>
          </Link>
          <button className="btn btn-sm btn-accent rounded-full">
            PUBLICAR ESCROW
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Publicar;
