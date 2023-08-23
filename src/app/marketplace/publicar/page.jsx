import React from "react";
import Link from "next/link";

const Publicar = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center p-4">
      <div className="backdrop-opacity-10 bg-white/10 sm:w-full md:w-1/3 sm:p-4 md:p-10 rounded-2xl flex flex-col justify-center items-center">
        <div className="flex flex-col gap-4 w-full">
          <div>
            <p className="text-white sm:text-sm text-center">
              Elige una web de la cual tomar el precio de Bitcoin. El precio
              continuará actualizandose hasta que la otra parte acepte el
              intercambio
            </p>
          </div>
          <div className="flex flex-col w-full">
            <div className="flex justify-evenly">
              <div className="flex items-center sm:gap-2 md:gap-4">
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
          </div>
          <div className="border-t border-gray-300 sm:m-6 sm:w-5/6" />
          <div className="flex flex-col w-full gap-4 items-center">
            <div>
              <p className="text-xs text-center">% DE COMISIÓN</p>
              <input
                type="text"
                className="input w-[172px] h-[36px] bg-white"
              />
            </div>
            <div>
              <p className="text-xs text-center">ARS TOTAL</p>
              <input
                type="text"
                className="input w-[172px] h-[36px] bg-white"
                placeholder="0.01224"
              />
            </div>
          </div>
          <div className="border-t border-gray-300 sm:m-6 sm:w-5/6" />
          <div className="flex sm:justify-around w-full">
          <Link href="/marketplace/seleccion">
            <button className="btn sm:btn-xs md:btn-md btn-neutral rounded-full">
              ATRAS
            </button>
          </Link>
          <button className="btn sm:btn-xs md:btn-md btn-accent rounded-full">
            PUBLICAR ESCROW
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Publicar;
