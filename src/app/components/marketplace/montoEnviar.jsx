import React from "react";

export default function MontoEnviar() {
  return (
    <div className="flex flex-col w-9/12 gap-4">
      <div className="flex flex-col">
        <p className="text-white">Monto a Enviar</p>
        <p className="text-light-blue text-xs">Moneda local</p>
        <input type="text" className="input w-[172px] h-[36px] bg-[#2D2D2D]" />
      </div>
      <div className="flex flex-col">
        <p>Cotización Dolar</p>
        <input type="text" className="input w-[172px] h-[36px] bg-[#2D2D2D]" />
      </div>
    </div>
  );
}
