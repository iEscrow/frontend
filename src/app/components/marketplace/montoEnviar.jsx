import React from "react";

export default function MontoEnviar() {
  return (
    <div className="flex flex-col w-9/12 gap-4">
      <div className="flex flex-col">
        <p className="dark:text-white text-dark-blue">Monto a Enviar</p>
        <p className="text-light-blue text-xs">Moneda local</p>
        <input type="number" className="input w-[172px] h-[36px] dark:bg-input-gay" />
      </div>
      <div className="flex flex-col">
        <p>Cotización Dolar</p>
        <input type="number" className="input w-[172px] h-[36px] dark:bg-input-gay" />
      </div>
    </div>
  );
}
